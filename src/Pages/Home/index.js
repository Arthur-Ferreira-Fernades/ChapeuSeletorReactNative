import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity ,Platform, PermissionsAndroid, Alert }from 'react-native';
import { BleManager } from 'react-native-ble-plx';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'
import useBLE from "../../../useBLE";
import DeviceModal from "../../../DeviceConnectionModal";


const Home = () => {
  const navigation = useNavigation();

  const {
    requestPermissions,
    scanForPeripherals,
    allDevices,
    connectToDevice,
    connectedDevice,
    disconnectFromDevice,
  } = useBLE();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const scanForDevices = async () => {
    const isPermissionsEnabled = await requestPermissions();
    if (isPermissionsEnabled) {
      scanForPeripherals();
    }
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  const openModal = async () => {
    scanForDevices();
    setIsModalVisible(true);
  };

  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <Image
          source={require('../../../assets/img/Group 6.png')}
          style={styles.imagemTitulo}
        />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.Container}>
          <Image
            source={require('../../../assets/img/f1a4aeaaddd7a3ade7f80b592ebc807a 1.png')}
            style={styles.imagem}
          />
          <Image
            source={require('../../../assets/img/images-removebg-preview (1) 1.png')}
            style={styles.imagem}
          />
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('PerguntasArea')}>
            <Text style={styles.btnText}>Começar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={connectedDevice ? disconnectFromDevice : openModal}
            style={styles.ctaButton}
          >
            <Text style={styles.ctaButtonText}>
              {connectedDevice ? "Disconnect" : "Connect"}
            </Text>
          </TouchableOpacity>
          <DeviceModal
            closeModal={hideModal}
            visible={isModalVisible}
            connectToPeripheral={connectToDevice}
            devices={allDevices}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;