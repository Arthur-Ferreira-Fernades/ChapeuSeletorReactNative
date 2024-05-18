import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'


export default function DesempataDsEle({route}) {

    const navigation = useNavigation();

    var ContadorDs = route.params?.ContadorDs;
    var ContadorLog = route.params?.ContadorLog;
    var ContadorEle = route.params?.ContadorEle;

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
            ContadorLog++;
        } else if (selectedRadio1 == 1) {
            ContadorEle++;
        } else {
            navigation.navigate('DesempataLogEle');
        }

        if (selectedRadio2 == 2) {
            ContadorLog++;
        } else if (selectedRadio2 == 1) {
            ContadorEle++;
        } else {
            navigation.navigate('DesempataLogEle');
        }

        if (selectedRadio3 == 2) {
            ContadorLog++;
        } else if (selectedRadio3 == 1) {
            ContadorEle++;
        } else {
            navigation.navigate('DesempataLogEle');
        }

        if (selectedRadio1 == 0 || selectedRadio2 == 0 || selectedRadio3 == 0) {
            AlertaErro();
        } else {
            navigation.navigate('Resposta', {EscolheuExatas: true, EscolheuHumanas: false, ContadorDs: ContadorDs, ContadorEle: ContadorEle,ContadorLog: ContadorLog});
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
                <Text style = {styles.pergunta}>Quando pensa em sua futura carreira, você se vê mais:</Text>
                <TouchableOpacity onPress={() => setSelectedRadio1(1)}>
                    <View style = {styles.wrapper}>
                        <View style = {styles.radio}>
                            {selectedRadio1 == 1 ? <View style = {styles.radioBg}></View> : null}
                        </View>
                        <Text style = {styles.radioText}>
                            a) Projetando sistemas elétricos e eletrônicos.
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedRadio1(2)}>
                    <View style = {styles.wrapper}>
                        <View style = {styles.radio}>
                            {selectedRadio1 == 2 ? <View style = {styles.radioBg}></View> : null}
                        </View>
                        <Text style = {styles.radioText}>
                            b) Gerenciando e otimizando processos de produção e distribuição.
                        </Text>
                    </View>
                </TouchableOpacity>

                <Text style = {styles.pergunta}>Ao enfrentar um problema complexo, você prefere lidar com:</Text>
                <TouchableOpacity onPress={() => setSelectedRadio2(1)}>
                    <View style = {styles.wrapper}>
                        <View style = {styles.radio}>
                            {selectedRadio2 == 1 ? <View style = {styles.radioBg}></View> : null}
                        </View>
                        <Text style = {styles.radioText}>
                            a) Circuitos elétricos, dispositivos eletrônicos e sistemas de potência.
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedRadio2(2)}>
                    <View style = {styles.wrapper}>
                        <View style = {styles.radio}>
                            {selectedRadio2 == 2 ? <View style = {styles.radioBg}></View> : null}
                        </View>
                        <Text style = {styles.radioText}>
                            b) Fluxos de trabalho, cadeias de suprimentos e logística de produção.
                        </Text>
                    </View>
                </TouchableOpacity>

                <Text style = {styles.pergunta}>Quando se trata de trabalhar em equipe, você se sente mais à vontade:</Text>
                <TouchableOpacity onPress={() => setSelectedRadio3(1)}>
                    <View style = {styles.wrapper}>
                        <View style = {styles.radio}>
                            {selectedRadio3 == 1 ? <View style = {styles.radioBg}></View> : null}
                        </View>
                        <Text style = {styles.radioText}>
                            a) Colaborando no desenvolvimento de sistemas elétricos.
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedRadio3(2)}>
                    <View style = {styles.wrapper}>
                        <View style = {styles.radio}>
                            {selectedRadio3 == 2 ? <View style = {styles.radioBg}></View> : null}
                        </View>
                        <Text style = {styles.radioText}>
                            b) Coordenando a logística e garantindo a eficiência dos processos.
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

