import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity, ScrollView, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'


export default function PerguntaHumanas() {

    const navigation = useNavigation();

    var ContadorMark = 0;
    var ContadorRh = 0;
    var ContadorTuri = 0;

    const AlertaErro = ()  => {
        Alert.alert('Uma ou mais questões não respondida(s)', 'Responda todas as perguntas',[
            {
                text: 'OK',
                onPress: () => console.log('Alerta Fechado')
            }
        ]);
    };

    function validaResposta() {
        if (ContadorMark == ContadorRh && ContadorMark > 1 && ContadorRh > 1) {
            navigation.navigate('DesempataMarkRh', {EscolheuExatas: false, EscolheuHumanas: true, ContadorMark: ContadorMark, ContadorTuri: ContadorTuri,ContadorRh: ContadorRh});
        } else if (ContadorMark == ContadorTuri && ContadorMark > 1 && ContadorTuri > 1) {
            navigation.navigate('DesempataMarkTuri', {EscolheuExatas: false, EscolheuHumanas: true, ContadorMark: ContadorMark, ContadorTuri: ContadorTuri,ContadorRh: ContadorRh});
        } else if (ContadorRh == ContadorTuri && ContadorRh > 1 && ContadorTuri > 1) {
            navigation.navigate('DesempataRhTuri', {EscolheuExatas: false, EscolheuHumanas: true, ContadorMark: ContadorMark, ContadorTuri: ContadorTuri,ContadorRh: ContadorRh});
        } else {
            navigation.navigate('Resposta', {EscolheuExatas: false, EscolheuHumanas: true, ContadorMark: ContadorMark, ContadorTuri: ContadorTuri,ContadorRh: ContadorRh});
        }
    }

    function calculaPonto(){

        if (selectedRadio1 == 1) {
            ContadorMark++;
        } else if (selectedRadio1 == 2) {
            ContadorRh++;
        }else if (selectedRadio1 == 3){
            ContadorTuri++;
        } else {
            navigation.navigate('PerguntaHumanas');
        }

        if (selectedRadio2 == 1) {
            ContadorMark++;
        } else if (selectedRadio2 == 2) {
            ContadorRh++;
        }else if (selectedRadio2 == 3){
            ContadorTuri++;
        } else {
            navigation.navigate('PerguntaHumanas');
        }

        if (selectedRadio3 == 1) {
            ContadorMark++;
        } else if (selectedRadio3 == 2) {
            ContadorRh++;
        }else if (selectedRadio3 == 3){
            ContadorTuri++;
        } else {
            navigation.navigate('PerguntaHumanas');
        }

        if (selectedRadio4 == 1) {
            ContadorMark++;
        } else if (selectedRadio4 == 2) {
            ContadorRh++;
        }else if (selectedRadio4 == 3){
            ContadorTuri++;
        } else {
            navigation.navigate('PerguntaHumanas');
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
                    <Text style = {styles.pergunta}>Quando pensa em uma carreira futura, você se imagina:</Text>
                    <TouchableOpacity onPress={() => setSelectedRadio1(1)}>
                        <View style = {styles.wrapper}>
                            <View style = {styles.radio}>
                                {selectedRadio1 == 1 ? <View style = {styles.radioBg}></View> : null}
                            </View>
                            <Text style = {styles.radioText}>
                                a) Criando estratégias para promover produtos ou serviços.
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
                    <TouchableOpacity onPress={() => setSelectedRadio1(3)}>
                        <View style = {styles.wrapper}>
                            <View style = {styles.radio}>
                                {selectedRadio1 == 3 ? <View style = {styles.radioBg}></View> : null}
                            </View>
                            <Text style = {styles.radioText}>
                                c) Planejando e organizando viagens e experiências turísticas.
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <Text style = {styles.pergunta}>Ao lidar com desafios relacionados a pessoas ou equipes de trabalho, você prefere:</Text>
                    <TouchableOpacity onPress={() => setSelectedRadio2(1)}>
                        <View style = {styles.wrapper}>
                            <View style = {styles.radio}>
                                {selectedRadio2 == 1 ? <View style = {styles.radioBg}></View> : null}
                            </View>
                            <Text style = {styles.radioText}>
                                a) Encontrar maneiras de motivar e envolver os colaboradores.
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedRadio2(2)}>
                        <View style = {styles.wrapper}>
                            <View style = {styles.radio}>
                                {selectedRadio2 == 2 ? <View style = {styles.radioBg}></View> : null}
                            </View>
                            <Text style = {styles.radioText}>
                                b) Desenvolver políticas e práticas para melhorar o ambiente de trabalho.
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedRadio2(3)}>
                        <View style = {styles.wrapper}>
                            <View style = {styles.radio}>
                                {selectedRadio2 == 3 ? <View style = {styles.radioBg}></View> : null}
                            </View>
                            <Text style = {styles.radioText}>
                                c) Adaptar-se a diferentes culturas e necessidades dos viajantes.
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <Text style = {styles.pergunta}>Quando pensa em trabalhar em equipe, qual papel você se sentiria mais à vontade desempenhando:</Text>
                    <TouchableOpacity onPress={() => setSelectedRadio3(1)}>
                        <View style = {styles.wrapper}>
                            <View style = {styles.radio}>
                                {selectedRadio3 == 1 ? <View style = {styles.radioBg}></View> : null}
                            </View>
                            <Text style = {styles.radioText}>
                                a) Desenvolver estratégias de comunicação e marketing.
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedRadio3(2)}>
                        <View style = {styles.wrapper}>
                            <View style = {styles.radio}>
                                {selectedRadio3 == 2 ? <View style = {styles.radioBg}></View> : null}
                            </View>
                            <Text style = {styles.radioText}>
                                b) Gerenciar e resolver conflitos entre membros da equipe.
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedRadio3(3)}>
                        <View style = {styles.wrapper}>
                            <View style = {styles.radio}>
                                {selectedRadio3 == 3 ? <View style = {styles.radioBg}></View> : null}
                            </View>
                            <Text style = {styles.radioText}>
                                c) Organizar e planejar itinerários e atividades turísticas.
                            </Text>
                        </View>
                    </TouchableOpacity>
                    
                    <Text style = {styles.pergunta}>Ao considerar os aspectos mais interessantes de um setor profissional, o que mais te atrai:</Text>
                    <TouchableOpacity onPress={() => setSelectedRadio4(1)}>
                        <View style = {styles.wrapper}>
                            <View style = {styles.radio}>
                                {selectedRadio4 == 1 ? <View style = {styles.radioBg}></View> : null}
                            </View>
                            <Text style = {styles.radioText}>
                                a) Criar campanhas criativas para atrair clientes ou consumidores.
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedRadio4(2)}>
                        <View style = {styles.wrapper}>
                            <View style = {styles.radio}>
                                {selectedRadio4 == 2 ? <View style = {styles.radioBg}></View> : null}
                            </View>
                            <Text style = {styles.radioText}>
                                b) Desenvolver programas de treinamento e desenvolvimento para funcionários.
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedRadio4(3)}>
                        <View style = {styles.wrapper}>
                            <View style = {styles.radio}>
                                {selectedRadio4 == 3 ? <View style = {styles.radioBg}></View> : null}
                            </View>
                            <Text style = {styles.radioText}>
                                c) Explorar novos destinos e culturas, compartilhando essas experiências com outros.
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

