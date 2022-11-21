import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    scrollView:{

        flex:0.4,
        backgroundColor:'#18181bcc',
        padding:30
    },
    currentDayContainer:{

        flexDirection:'row',
        backgroundColor:'#00000033',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        borderColor:'#eee',
        borderWidth:1,
       // padding:15
    },
    day:{
        fontSize:25,
        color:'white',
        backgroundColor:'#3c3c44',
        padding:10,
        textAlign:'center',
        borderRadius:50,
        fontWeight:'300',
        marginBottom:15

         
    },
    temparature:{
        fontSize:16,
        color:'white',
        fontWeight:'300',
        textAlign:'center'

    },
    image:{
    width:150,
    height:150
    },
    dayInfoContainer:{
       paddingRight:40
    }
})