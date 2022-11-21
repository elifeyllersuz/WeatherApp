import React from 'react'
import { Text,View,Image,ScrollView } from 'react-native';
import styles from './WeatherScrollViewStyle';
import OtherDaysWeather from '../OtherDaysWeathers/OtherDaysWeathers';
import moment from 'moment-timezone';


const WeatherScrollView = ({weatherData}) => {

    return(

        <ScrollView horizontal={true} style={styles.scrollView}>
           <CurrentDay data={weatherData && weatherData.length > 0 ? weatherData[0] : {}}/>
           <OtherDaysWeather data={weatherData} />
        </ScrollView>
    )
}

const CurrentDay = ({data}) => {

    if(data && data.weather){
        return (
            <View style={styles.currentDayContainer}>
                <Image source={{uri: 'http://openweathermap.org/img/wn/'+ data.weather[0].icon +'@4x.png' }}
                style={styles.image}/>
                <View style={styles.dayInfoContainer}>
                    <Text style={styles.day}>{moment(data.dt * 1000).format('dddd')}</Text>
                    <Text style={styles.temparature}>Night - {data.temp.night}&#176;C</Text>
                    <Text style={styles.temparature}>Day - {data.temp.day}&#176;C</Text>
    
                </View>
            </View>
        )
    }
    else{
        return(
            <View>

            </View>
        )
    }

   
}
export default WeatherScrollView;