import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'


export default function DesempataMarkRh({route}) {

    const navigation = useNavigation();

    var ContadorMark = route.params?.ContadorMark;
    var ContadorRh = route.params?.ContadorTuri;
    var ContadorTuri = route.params?.ContadorRh;

    const AlertaErro = ()  => {
        Alert.alert('Uma ou mais questões não respondida(s)', 'Responda todas as perguntas',[
            {
                text: 'OK',
                onPress: () => console.log('Alerta Fechado')
            }
        ]);
    };

    function calculaPonto(){
        if (selectedRadio1 == 2) {
            ContadorRh++;
        } else if (selectedRadio1 == 1) {
            ContadorMark++;
        } else {
            navigation.navigate('DesempataMarkRh');
        }

        if (selectedRadio2 == 2) {
            ContadorRh++;
        } else if (selectedRadio2 == 1) {
            ContadorMark++;
        } else {
            navigation.navigate('DesempataMarkRh');
        }

        if (selectedRadio3 == 2) {
            ContadorRh++;
        } else if (selectedRadio3 == 1) {
            ContadorMark++;
        } else {
            navigation.navigate('DesempataMarkRh');
        }

        if (selectedRadio1 == 0 || selectedRadio2 == 0 || selectedRadio3 == 0) {
            AlertaErro();
        } else {
            navigation.navigate('Resposta', {EscolheuExatas: false, EscolheuHumanas: true, ContadorMark: ContadorMark, ContadorRh: ContadorRh,ContadorTuri: ContadorTuri});
        }


    }


    const[selectedRadio1,setSelectedRadio1] = useState(0);
    const[selectedRadio2,setSelectedRadio2] = useState(0);
    const[selectedRadio3,setSelectedRadio3] = useState(0);

  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <Image
          source={require('../../../assets/img/Group 6.png')}
          style={styles.imagemTitulo}
        />
      </View>
      <View style = {styles.contentContainer}>
        <View style = {styles.Container}>
            <View style = {styles.texto}>
                <Text style = {styles.pergunta}>Ao pensar em sua carreira futura, você se imagina mais:</Text>
                <TouchableOpacity onPress={() => setSelectedRadio1(1)}>
                    <View style = {styles.wrapper}>
                        <View style = {styles.radio}>
                            {selectedRadio1 == 1 ? <View style = {styles.radioBg}></View> : null}
                        </View>
                        <Text style = {styles.radioText}>
                            a) Criando estratégias de marketing para promover produtos ou serviços.
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedRadio1(2)}>
                    <View style = {styles.wrapper}>
                        <View style = {styles.radio}>
                            {selectedRadio1 == 2 ? <View style = {styles.radioBg}></View> : null}
                        </View>
                        <Text style = {styles.radioText}>
                            b) Gerenciando e desenvolvendo equipes de trabalho.
                        </Text>
                    </View>
                </TouchableOpacity>

                <Text style = {styles.pergunta}>Quando enfrenta um desafio profissional, você prefere lidar com:</Text>
                <TouchableOpacity onPress={() => setSelectedRadio2(1)}>
                    <View style = {styles.wrapper}>
                        <View style = {styles.radio}>
                            {selectedRadio2 == 1 ? <View style = {styles.radioBg}></View> : null}
                        </View>
                        <Text style = {styles.radioText}>
                            a) Análise de mercado, identificação de tendências e desenvolvimento de campanhas.
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedRadio2(2)}>
                    <View style = {styles.wrapper}>
                        <View style = {styles.radio}>
                            {selectedRadio2 == 2 ? <View style = {styles.radioBg}></View> : null}
                        </View>
                        <Text style = {styles.radioText}>
                            b) Gestão de pessoas, resolução de conflitos e desenvolvimento de talentos.
                        </Text>
                    </View>
                </TouchableOpacity>

                <Text style = {styles.pergunta}>Ao considerar o aspecto mais atraente de um setor profissional, o que mais te intriga:</Text>
                <TouchableOpacity onPress={() => setSelectedRadio3(1)}>
                    <View style = {styles.wrapper}>
                        <View style = {styles.radio}>
                            {selectedRadio3 == 1 ? <View style = {styles.radioBg}></View> : null}
                        </View>
                        <Text style = {styles.radioText}>
                            a) Criar campanhas criativas para atrair clientes ou consumidores.
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedRadio3(2)}>
                    <View style = {styles.wrapper}>
                        <View style = {styles.radio}>
                            {selectedRadio3 == 2 ? <View style = {styles.radioBg}></View> : null}
                        </View>
                        <Text style = {styles.radioText}>
                            b) Desenvolver programas de treinamento e desenvolvimento para funcionários.
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.btn} onPress={calculaPonto}>
            <Text style = {styles.btnText}>Proximo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

