import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'
import BleManager from 'react-native-ble-manager';
import { sendDataToArduino } from '../Home';

export default function Resposta({route}) {

    const EscolheuExatas = route.params?.EscolheuExatas;
    const EscolheuHumanas = route.params?.EscolheuHumanas;
    var ContadorDs = route.params?.ContadorDs;
    var ContadorEle = route.params?.ContadorEle;
    var ContadorLog = route.params?.ContadorLog;
    var ContadorMark = route.params?.ContadorMark;
    var ContadorRh = route.params?.ContadorRh;
    var ContadorTuri = route.params?.ContadorTuri;

    var textoRespota = " ";

    if (EscolheuExatas) {
        if (ContadorDs > ContadorEle && ContadorDs > ContadorLog) {
            textoRespota = "d";
        } else if (ContadorEle  > ContadorDs && ContadorEle  > ContadorLog) {
            textoRespota = "e";
        } else if (ContadorLog > ContadorEle && ContadorLog > ContadorDs) {
            textoRespota = "l";
        }
    } else if (EscolheuHumanas) {
        if (ContadorMark > ContadorRh && ContadorMark > ContadorTuri) {
            textoRespota = "m";
        } else if (ContadorRh  > ContadorMark && ContadorRh  > ContadorTuri) {
            textoRespota = "r";
        } else if (ContadorTuri > ContadorRh && ContadorTuri > ContadorMark) {
            textoRespota = "t";
        }
    }

    useEffect(() => {
        sendDataToArduino(textoRespota); // Envia a resposta assim que a página for carregada
      }, []); // O array vazio como segundo argumento faz com que o useEffect só seja executado uma vez, quando a página é carregada
    
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
              <Text style={styles.texto}>
                Seu Curso é:
              </Text>
              <Text style={styles.texto}>
                {textoRespota}
              </Text>
            </View>
          </View>
        </View>
      );
    }