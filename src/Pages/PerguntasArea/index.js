import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity, Alert, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'


export default function PerguntasArea() {

    const navigation = useNavigation();

    var ContadorHumana = 0;
    var ContadorExata = 0;

    const AlertaErro = ()  => {
        Alert.alert('Uma ou mais questões não respondida(s)', 'Responda todas as perguntas',[
            {
                text: 'OK',
                onPress: () => console.log('Alerta Fechado')
            }
        ]);
    };

    function validaArea() {
        if (ContadorExata > ContadorHumana) {
            navigation.navigate('PerguntaCursosExatas', {EscolheuExatas: true, EscolheuHumanas: false});
        } else {
            navigation.navigate('PerguntaCursosHumanas', {EscolheuExatas: false, EscolheuHumanas: true});
        }
    }

    function calculaPonto(){
        if (selectedRadio1 == 2) {
            ContadorHumana++;
        } else if (selectedRadio1 == 1) {
            ContadorExata++;
        } else {
            navigation.navigate('PerguntasArea');
        }

        if (selectedRadio2 == 2) {
            ContadorHumana++;
        } else if (selectedRadio2 == 1) {
            ContadorExata++;
        } else {
            navigation.navigate('PerguntasArea');
        }

        if (selectedRadio3 == 2) {
            ContadorHumana++;
        } else if (selectedRadio3 == 1) {
            ContadorExata++;
        } else {
            navigation.navigate('PerguntasArea');
        }

        if (selectedRadio1 == 0 || selectedRadio2 == 0 || selectedRadio3 == 0) {
            AlertaErro();
        } else {
            validaArea();
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
                <Text style = {styles.pergunta}>Quando confrontado com um problema complexo, você prefere:</Text>
                <TouchableOpacity onPress={() => setSelectedRadio1(1)}>
                    <View style = {styles.wrapper}>
                        <View style = {styles.radio}>
                            {selectedRadio1 == 1 ? <View style = {styles.radioBg}></View> : null}
                        </View>
                        <Text style = {styles.radioText}>
                            a) Analisar os detalhes e buscar uma solução lógica.
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedRadio1(2)}>
                    <View style = {styles.wrapper}>
                        <View style = {styles.radio}>
                            {selectedRadio1 == 2 ? <View style = {styles.radioBg}></View> : null}
                        </View>
                        <Text style = {styles.radioText}>
                            b) Explorar as diferentes perspectivas e possíveis significados.
                        </Text>
                    </View>
                </TouchableOpacity>

                <Text style = {styles.pergunta}>Ao aprender algo novo, você tende a:</Text>
                <TouchableOpacity onPress={() => setSelectedRadio2(1)}>
                    <View style = {styles.wrapper}>
                        <View style = {styles.radio}>
                            {selectedRadio2 == 1 ? <View style = {styles.radioBg}></View> : null}
                        </View>
                        <Text style = {styles.radioText}>
                            a) Valorizar a precisão e a aplicação prática das informações.
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedRadio2(2)}>
                    <View style = {styles.wrapper}>
                        <View style = {styles.radio}>
                            {selectedRadio2 == 2 ? <View style = {styles.radioBg}></View> : null}
                        </View>
                        <Text style = {styles.radioText}>
                            b) Ficar mais interessado nas teorias e nas ideias subjacentes.
                        </Text>
                    </View>
                </TouchableOpacity>

                <Text style = {styles.pergunta}>Em uma discussão sobre um tema controverso, você costuma:</Text>
                <TouchableOpacity onPress={() => setSelectedRadio3(1)}>
                    <View style = {styles.wrapper}>
                        <View style = {styles.radio}>
                            {selectedRadio3 == 1 ? <View style = {styles.radioBg}></View> : null}
                        </View>
                        <Text style = {styles.radioText}>
                            a) Argumentar com base em fatos e evidências concretas.
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedRadio3(2)}>
                    <View style = {styles.wrapper}>
                        <View style = {styles.radio}>
                            {selectedRadio3 == 2 ? <View style = {styles.radioBg}></View> : null}
                        </View>
                        <Text style = {styles.radioText}>
                            b) Considerar as emoções e experiências pessoais das pessoas envolvidas.
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

