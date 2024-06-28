import { BleManager, Device } from "react-native-ble-plx";
import { useEffect, useState } from "react";
import { PermissionsAndroid, Platform} from "react-native";

interface BluetoothLowEnergyApi {
  requestPermissions(): Promise<boolean>;
  scanForPeripherals(): void;
  connectToDevice(device: Device): Promise<void>;
  disconnectFromDevice(): void;
  connectedDevice: Device | null;
  allDevices: Device[];
}

function useBLE(): BluetoothLowEnergyApi {
  const [bleManager, setBleManager] = useState<BleManager | null>(null);
  const [allDevices, setAllDevices] = useState<Device[]>([]);
  const [connectedDevice, setConnectedDevice] = useState<Device | null>(null);

  useEffect(() => {
    const initBLEManager = async () => {
      const manager = new BleManager();
      if (Platform.OS === "android") {
        await manager.startDeviceScan(null, null, (error, device) => {
          if (error) {
            console.error("Error scanning:", error);
            return;
          }
          if (device && device.name) {
            setAllDevices((prevDevices) => {
              if (!prevDevices.find((d) => d.id === device.id)) {
                return [...prevDevices, device];
              }
              return prevDevices;
            });
          }
        });
      }
      setBleManager(manager);
    };

    initBLEManager();

    return () => {
      if (bleManager) {
        bleManager.destroy();
        setBleManager(null);
      }
    };
  }, []);

  const requestPermissions = async (): Promise<boolean> => {
    if (Platform.OS === "android") {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
      ]);
      return (
        granted["android.permission.ACCESS_FINE_LOCATION"] ===
          PermissionsAndroid.RESULTS.GRANTED &&
        granted["android.permission.BLUETOOTH_SCAN"] ===
          PermissionsAndroid.RESULTS.GRANTED &&
        granted["android.permission.BLUETOOTH_CONNECT"] ===
          PermissionsAndroid.RESULTS.GRANTED
      );
    }
    return true; // Para outras plataformas, não precisamos solicitar permissões
  };

  const scanForPeripherals = () => {
    if (bleManager) {
      bleManager.startDeviceScan(null, null, (error, device) => {
        if (error) {
          console.error("Error scanning:", error);
          return;
        }
        if (device && device.name) {
          setAllDevices((prevDevices) => {
            if (!prevDevices.find((d) => d.id === device.id)) {
              return [...prevDevices, device];
            }
            return prevDevices;
          });
        }
      });
    }
  };

  const connectToDevice = async (device: Device): Promise<void> => {
    if (bleManager) {
      try {
        const connectedDevice = await bleManager.connectToDevice(device.id);
        setConnectedDevice(connectedDevice);
        await connectedDevice.discoverAllServicesAndCharacteristics();
        // Aqui você pode iniciar outras operações, como monitoramento de características
      } catch (error) {
        console.error("Failed to connect:", error);
      }
    }
  };

  const disconnectFromDevice = (): void => {
    if (connectedDevice && bleManager) {
      bleManager.cancelDeviceConnection(connectedDevice.id);
      setConnectedDevice(null);
    }
  };

  return {
    requestPermissions,
    scanForPeripherals,
    connectToDevice,
    disconnectFromDevice,
    connectedDevice,
    allDevices,
  };
}

export default useBLE;
