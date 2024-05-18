import { StyleSheet  } from "react-native";

export default StyleSheet.create({

    body: {
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        },
      
        header: {
          width: '100%',
          height: 100,
          backgroundColor: '#641E1E',
          alignItems: 'center',
          justifyContent: 'center',
        },
      
        contentContainer: {
          width: '100%',
          flex: 1,
          flexDirection: 'column',
          height: '90vh',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#3D2F22'
        },
      
        Container: {
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#463B31',
          borderRadius: 12,
          padding: 20
        },
      
        imagemTitulo: {
          width: 100,
          height: 80
        },
      
        btn: {
          flex: 1,
          marginTop: 20,
          width: 150,
          padding: 15,
          backgroundColor: '#0C3259',
          borderRadius: 15,
          textAlign: 'center',
        },
      
        btnText: {
          color: '#C39A1C',
          textAlign: 'center'
        },

        label: {
            marginTop: 20,
            fontSize: 16,
          },
          option: {
            marginLeft: 10,
            fontSize: 16,
          },

        radioText: {
            fontSize: 20, 
            color: 'white'
        },

        radio:{
            width:20,
            height:20,
            borderColor: 'black',
            borderRadius:20,
            borderWidth: 2,
            margin: 10
        },

        wrapper: {
            flexDirection: 'row',
            alignItems: 'center',
        },

        radioBg: {
            backgroundColor: 'black',
            height: 10,
            width: 10,
            margin: 3,
            borderRadius: 20
        },

        pergunta: {
            color: '#C39A1C',
            fontSize: 20,
            margin: 5
        },

        texto: {
            width: 350
        }
      
      
});
