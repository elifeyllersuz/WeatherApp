import React from 'react'
import { View, Text, Image } from 'react-native';
import styles from './OtherDaysWeathersStyle';
import moment from 'moment-timezone'

const OtherDaysWeather = ({data}) => {

    return (
        <View style={{flexDirection:'row'}}>
           {
        data && data.length > 0 ? 
        data.map((data,idx) => (

            idx !==0 && <OtherDayWeatherItem  key={idx} otherDayItem = {data}/>

        )) 
             :
             <View/>
        
        }

        </View>

    )
    
}

const OtherDayWeatherItem = ({otherDayItem}) => {
    return (
        <View style={styles.otherDayWeatherItemContainer}>
            <Text style={styles.day}>{moment(otherDayItem.dt * 1000).format('ddd')}</Text>
            <Image source={{uri: 'http://openweathermap.org/img/wn/'+ otherDayItem.weather[0].icon +'@4x.png' }}
            style = {styles.image}/>
            <Text style={styles.temparature}>Night - {otherDayItem.temp.night}&#176;C</Text>
            <Text style={styles.temparature}>Day - {otherDayItem.temp.day}&#176;C</Text>
        </View>
    )
}



export default OtherDaysWeather;