import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import DateTime from './components/DateTime/DateTime';
import WeatherScrollView from './components/WeatherScrollView/WeatherScrollView';
const APIKey = 'bcaeaa3b723ba4dadad3c96aa1960e28';
//navigator.geolocation = require('@react-native-community/geolocation');
import Geolocation from '@react-native-community/geolocation';


const App = () => {

    const [data,setData] = useState({});

    useEffect(() => {
        Geolocation.getCurrentPosition((succes) => {
            let {latitude,longitude} = succes.coords;
            fetchData(latitude,longitude);
        },
        (error)=> {
          if(error){
            fetchData('37.4220936','-122.083922')
          }
        }
        )

    },[])

    const fetchData = (latitude,longitude) => {
        fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${APIKey}`)
        .then(res => res.json()).then(data => {
        console.log(data)
        setData(data)
        })
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../src/assets/images/background_image.jpg')}
                style={styles.image}>
                <DateTime current={data.current} timezone={data.timezone} latitude={data.lat} longitude={data.lon}    />
                <WeatherScrollView weatherData={data.daily}/>
              
            </ImageBackground>


        </View>
    )
    }

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: 'center'
    }
})

export default App;