import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'
import BleManager from 'react-native-ble-manager';

BleManager.start({ showAlert: false })
  .then(() => {
    console.log('Ble Module initialized');
  })
  .catch((error) => {
    console.error('Ble Module initialization error', error);
  });


export default function Home() {

  const navigation = useNavigation();

  useEffect(() => {
    BleManager.start({ showAlert: false })
      .then(() => {
        console.log('Ble Module initialized');
      })
      .catch((error) => {
        console.error('Ble Module initialization error', error);
      });

    return () => {
      manager.destroy(); // Limpa o manager quando o componente for desmontado
    };
  }, []);

  const connectToDevice = () => {
    manager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        console.error(error);
        return;
      }
  
      if (device.name === 'HC-06') {
        manager.stopDeviceScan();
        manager.connectToDevice(device.id)
          .then((device) => {
            console.log('Conectado ao dispositivo:', device.id);
            // Agora você pode enviar e receber dados para o dispositivo
          })
          .catch((error) => {
            console.error('Erro ao conectar:', error);
          });
      }
    });
  };

  const sendDataToArduino = (message) => {
    if (manager && manager.isDeviceConnected('HC-06')) {
      manager.writeCharacteristicWithoutResponseForDevice(
        'HC-06',
        '0000ffe1-0000-1000-8000-00805f9b34fb', // UUID do serviço do módulo Bluetooth do HC-06
        '0000ffe1-0000-1000-8000-00805f9b34fb', // UUID da característica do módulo Bluetooth do HC-06
        message
      )
      .then(() => {
        console.log('Dados enviados com sucesso:', message);
      })
      .catch((error) => {
        console.error('Erro ao enviar dados:', error);
      });
    } else {
      console.error('Dispositivo não está conectado.');
    }
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
          <TouchableOpacity style={styles.btn} onPress={connectToDevice}>
            <Text style={styles.btnText}>Conectar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
