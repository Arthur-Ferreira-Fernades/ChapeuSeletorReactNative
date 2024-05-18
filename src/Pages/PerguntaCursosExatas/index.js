import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity, ScrollView, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'


export default function PerguntaCursosExatas() {

    const navigation = useNavigation();

    var ContadorDs = 0;
    var ContadorLog = 0;
    var ContadorEle = 0;

    function validaResposta() {
        if (ContadorDs == ContadorLog && ContadorDs > 1 && ContadorLog > 1) {
            navigation.navigate('DesempataDsLog', {EscolheuExatas: true, EscolheuHumanas: false, ContadorDs: ContadorDs, ContadorEle: ContadorEle, ContadorLog: ContadorLog});
        } else if (ContadorDs == ContadorEle && ContadorDs > 1 && ContadorEle > 1) {
            navigation.navigate('DesempataDsEle', {EscolheuExatas: true, EscolheuHumanas: false, ContadorDs: ContadorDs, ContadorEle: ContadorEle, ContadorLog: ContadorLog});
        } else if (ContadorLog == ContadorEle && ContadorLog > 1 && ContadorEle > 1) {
            navigation.navigate('DesempataLogEle', {EscolheuExatas: true, EscolheuHumanas: false, ContadorDs: ContadorDs, ContadorEle: ContadorEle, ContadorLog: ContadorLog});
        } else {
            navigation.navigate('Resposta', {EscolheuExatas: true, EscolheuHumanas: false, ContadorDs: ContadorDs, ContadorEle: ContadorEle,ContadorLog: ContadorLog});
        }
    }

    const AlertaErro = ()  => {
        Alert.alert('Uma ou mais questões não respondida(s)', 'Responda todas as perguntas',[
            {
                text: 'OK',
                onPress: () => console.log('Alerta Fechado')
            }
        ]);
    };

    function calculaPonto(){
        if (selectedRadio1 == 1) {
            ContadorDs++;
        } else if (selectedRadio1 == 2) {
            ContadorLog++;
        }else if (selectedRadio1 == 3){
            ContadorEle++;
        } else {
            navigation.navigate('PerguntaCursosExatas');
        }

        if (selectedRadio2 == 1) {
            ContadorDs++;
        } else if (selectedRadio2 == 2) {
            ContadorLog++;
        }else if (selectedRadio2 == 3){
            ContadorEle++;
        } else {
            navigation.navigate('PerguntaCursosExatas');
        }

        if (selectedRadio3 == 1) {
            ContadorDs++;
        } else if (selectedRadio3 == 2) {
            ContadorLog++;
        }else if (selectedRadio3 == 3){
            ContadorEle++;
        } else {
            navigation.navigate('PerguntaCursosExatas');
        }

        if (selectedRadio4 == 1) {
            ContadorDs++;
        } else if (selectedRadio4 == 2) {
            ContadorLog++;
        }else if (selectedRadio4 == 3){
            ContadorEle++;
        } else {
            navigation.navigate('PerguntaCursosExatas');
        }

        if (selectedRadio1 == 0 || selectedRadio2 == 0 || selectedRadio3 == 0) {
            AlertaErro();
        } else {
            validaResposta();
        }
    }


    const[selectedRadio1,setSelectedRadio1] = useState(0);
    const[selectedRadio2,setSelectedRadio2] = useState(0);
    const[selectedRadio3,setSelectedRadio3] = useState(0);
    const[selectedRadio4,setSelectedRadio4] = useState(0);

  return (
    <View style={styles.body}>
        <View style={styles.header}>
            <Image
            source={require('../../../assets/img/Group 6.png')}
            style={styles.imagemTitulo}
            />
        </View>
        <View style = {styles.contentContainer}>
            <ScrollView style = {styles.Container}>
                <View style = {styles.texto}>
                    <Text style = {styles.pergunta}>Quando pensa em sua carreira futura, você se imagina:</Text>
                    <TouchableOpacity onPress={() => setSelectedRadio1(1)}>
                        <View style = {styles.wrapper}>
                            <View style = {styles.radio}>
                                {selectedRadio1 == 1 ? <View style = {styles.radioBg}></View> : null}
                            </View>
                            <Text style = {styles.radioText}>
                                a) Criando e desenvolvendo novos softwares ou aplicativos.
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedRadio1(2)}>
                        <View style = {styles.wrapper}>
                            <View style = {styles.radio}>
                                {selectedRadio1 == 2 ? <View style = {styles.radioBg}></View> : null}
                            </View>
                            <Text style = {styles.radioText}>
                                b) Organizando e otimizando processos de produção e distribuição.
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedRadio1(3)}>
                        <View style = {styles.wrapper}>
                            <View style = {styles.radio}>
                                {selectedRadio1 == 3 ? <View style = {styles.radioBg}></View> : null}
                            </View>
                            <Text style = {styles.radioText}>
                                c) Projetando e trabalhando com sistemas elétricos e eletrônicos.
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <Text style = {styles.pergunta}>Ao abordar um problema complexo, você prefere lidar com:</Text>
                    <TouchableOpacity onPress={() => setSelectedRadio2(1)}>
                        <View style = {styles.wrapper}>
                            <View style = {styles.radio}>
                                {selectedRadio2 == 1 ? <View style = {styles.radioBg}></View> : null}
                            </View>
                            <Text style = {styles.radioText}>
                                a) Códigos, algoritmos e sistemas computacionais.
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
                    <TouchableOpacity onPress={() => setSelectedRadio2(3)}>
                        <View style = {styles.wrapper}>
                            <View style = {styles.radio}>
                                {selectedRadio2 == 3 ? <View style = {styles.radioBg}></View> : null}
                            </View>
                            <Text style = {styles.radioText}>
                                c) Circuitos elétricos, dispositivos eletrônicos e sistemas de potência.
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <Text style = {styles.pergunta}>Quando pensa em tecnologia, o que mais te atrai:</Text>
                    <TouchableOpacity onPress={() => setSelectedRadio3(1)}>
                        <View style = {styles.wrapper}>
                            <View style = {styles.radio}>
                                {selectedRadio3 == 1 ? <View style = {styles.radioBg}></View> : null}
                            </View>
                            <Text style = {styles.radioText}>
                                a) Desenvolver soluções de software inovadoras.
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedRadio3(2)}>
                        <View style = {styles.wrapper}>
                            <View style = {styles.radio}>
                                {selectedRadio3 == 2 ? <View style = {styles.radioBg}></View> : null}
                            </View>
                            <Text style = {styles.radioText}>
                                b) Melhorar a eficiência e a organização dos processos.
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedRadio3(3)}>
                        <View style = {styles.wrapper}>
                            <View style = {styles.radio}>
                                {selectedRadio3 == 3 ? <View style = {styles.radioBg}></View> : null}
                            </View>
                            <Text style = {styles.radioText}>
                                c) Trabalhar com a eletricidade e seus diversos usos.
                            </Text>
                        </View>
                    </TouchableOpacity>
                    
                    <Text style = {styles.pergunta}>Em um projeto em equipe, qual papel você se sentiria mais à vontade desempenhando:</Text>
                    <TouchableOpacity onPress={() => setSelectedRadio4(1)}>
                        <View style = {styles.wrapper}>
                            <View style = {styles.radio}>
                                {selectedRadio4 == 1 ? <View style = {styles.radioBg}></View> : null}
                            </View>
                            <Text style = {styles.radioText}>
                                a) Programador, desenvolvendo o código principal do projeto.
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedRadio4(2)}>
                        <View style = {styles.wrapper}>
                            <View style = {styles.radio}>
                                {selectedRadio4 == 2 ? <View style = {styles.radioBg}></View> : null}
                            </View>
                            <Text style = {styles.radioText}>
                                b) Coordenador, organizando e supervisionando a execução das tarefas.
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedRadio4(3)}>
                        <View style = {styles.wrapper}>
                            <View style = {styles.radio}>
                                {selectedRadio4 == 3 ? <View style = {styles.radioBg}></View> : null}
                            </View>
                            <Text style = {styles.radioText}>
                                c) Engenheiro, projetando e implementando sistemas elétricos.
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.btn} onPress={calculaPonto}>
                    <Text style = {styles.btnText}>Proximo</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    </View>
  );
}

