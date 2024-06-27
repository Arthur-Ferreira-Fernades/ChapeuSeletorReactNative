import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'

const Home = () => {
  const navigation = useNavigation();

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
        </View>
      </View>
    </View>
  );
};

export default Home;