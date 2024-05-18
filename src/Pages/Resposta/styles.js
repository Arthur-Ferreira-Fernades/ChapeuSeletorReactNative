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
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: '#463B31',
        borderRadius: 12,
        padding: 20,
        margin: 10
    },

    texto: {
        color: 'white',
        fontSize: 20
    }

});
