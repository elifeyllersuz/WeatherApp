import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    otherDayWeatherItemContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#00000033',
        borderRadius: 10,
        borderColor: '#eee',
        borderWidth: 1,
        padding: 40,
        marginLeft:10,
        //paddingRight:10

      
    },
    day: {
        fontSize: 20,
        color: 'white',
        backgroundColor: '#3c3c44',
        padding: 5,
        textAlign: 'center',
        borderRadius: 50,
        fontWeight:'300',

    },
    temparature: {
        fontSize:16,
        color:'white',
        fontWeight:'150',
        textAlign:'center'
    },
    image: {
        width: 100,
        height: 100
    }
})