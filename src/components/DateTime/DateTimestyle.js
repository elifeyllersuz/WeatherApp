import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container:{
        flex:1.5,
        flexDirection:'row',
        justifyContent:'space-between',
        padding:15
    },

    hour_text:{
        fontSize:40,
        color:'white',
        fontWeight:'100'
    },
    subheading:{
     
        fontSize:25,
        color:'#eee',
        fontWeight:'300'
    },
    rightAlign:{
        textAlign:'right',
        marginTop:20
    },
    timezone:{
        padding:4,
        fontSize:16,
        color:'white'
    },
    latlong:{
        fontSize:16,
        color:'white',
        fontWeight:'700'
    },
    weatherContainer:{
        backgroundColor:'#18181b99',
        borderRadius:10,
        padding:10,
        marginTop:10
    },
    weatherItem:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    title:{
        color:'#eee',
        fontSize:15,
        fontWeight:'400'
    }
    

})