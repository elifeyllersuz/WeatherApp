import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native';
import styles from './DateTimestyle.js'
import moment from 'moment-timezone'

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const WeatherItem = ({ title, value, unit }) => {

    return (
        <View style={styles.weatherItem}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.title}>{value}{unit}</Text>

        </View>
    )
}

const DateTime = ({current,longitude,latitude,timezone}) => {
    const [date, setDate] = useState('');
    const [dateInfo, setDateInfo] = useState('');

    useEffect(() => {
        setInterval(() => {
            const dateInfo = new Date();
            
            const month = dateInfo.getMonth();
            const date = dateInfo.getDate();
            const day = dateInfo.getDay();
            const hour = dateInfo.getHours();
            const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour
            const minutes = dateInfo.getMinutes();
            const ampm = hour >= 12 ? 'PM' : 'AM'

            setDateInfo((hoursIn12HrFormat < 10 ? '0' + hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10 ? '0' + minutes : minutes)
                + ' ' + ampm)

            setDate(days[day] + ', ' + date + ' ' + months[month])
        }, 1000)

    }, [])

    return (

        <View style={styles.container}>
            <View>
                <View>
                    <Text style={styles.hour_text}>{dateInfo}</Text>
                </View>
                <View>
                    <Text style={styles.subheading}>{date}</Text>
                </View>
                <View style={styles.weatherContainer}>
                    <WeatherItem title='Humidity' value={current? current.humidity : ""} unit="%" />
                    <WeatherItem title='Pressure' value={current? current.pressure : ""} unit="hpA" />
                    <WeatherItem title='Sunrise' value={current? moment.tz(current.sunrise * 1000 ,timezone).format("HH:mm"): ""} unit="am" />
                    <WeatherItem title='Sunset' value={current? moment.tz(current.sunset * 1000 ,timezone).format("HH:mm"): ""} unit="pm" />

                </View>

            </View>
            <View style={styles.rightAlign}>
                <Text style={styles.timezone}>{timezone}</Text>
                <Text style={styles.latlong}>{latitude}N {longitude}E</Text>
            </View>
        </View>
    )
}

export default DateTime;