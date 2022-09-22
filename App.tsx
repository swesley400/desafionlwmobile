
import { StatusBar } from 'react-native';
import {useRef, useEffect} from 'react'
import * as Notifications from 'expo-notifications'



import {useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black} from '@expo-google-fonts/inter'




import {Subscription} from 'expo-modules-core'  
import { Backgroung } from './src/components/Backgroung';
import { Routes } from './src/components/routes';
import { Loading } from './src/components/Loading';

import './src/services/notificationsConfig'
import { getPushNotificationToken } from './src/services/getPushNotificationToken'



export default function App() {
  const[fontLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  })


  const getNotifactionListener = useRef<Subscription>()
  const responseNotificationListener = useRef<Subscription>()
  
  useEffect(() =>{
    getPushNotificationToken()
  })
  
  useEffect(()=>{
    getNotifactionListener.current = Notifications.addNotificationReceivedListener(notications => {
      console.log(notications)
    }) 
    responseNotificationListener.current = Notifications.addNotificationResponseReceivedListener(response => {
       console.log(response)
    }) 
    return () => {
      if( getNotifactionListener.current && responseNotificationListener.current){
        Notifications.removeNotificationSubscription(getNotifactionListener.current)
        Notifications.removeNotificationSubscription(responseNotificationListener.current)
      }
    }

  },[])

  return (
    <Backgroung >
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      { fontLoaded ? <Routes/> : <Loading/> }
    </Backgroung>
    
  );
}

 
