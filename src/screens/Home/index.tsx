import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import {  View,Image, FlatList } from 'react-native';


import {SafeAreaView} from 'react-native-safe-area-context'


import logoImg from '../../assets/logo-nlw-esports.png'
import { Backgroung } from '../../components/Backgroung';
import { GameCard, GameCardProps } from '../../components/GameCard';
import { Heading } from '../../components/Heading';
import { styles } from './styles';

export function Home() {

  const navigation =  useNavigation()

  function handleOpenGame({id, title, bannerUrl}: GameCardProps){
    navigation.navigate('game', {id, title, bannerUrl})
  }

  const [games, setGames] = useState<GameCardProps[]>([])
  useEffect(()=>{
    fetch('http://192.168.1.41:8080/games')
    .then(response => response.json())
    .then(data => setGames(data))
    .catch(err => err)
  },[])

  return (
    <Backgroung>
    <SafeAreaView style={styles.container}>
      
      <Image
        source={logoImg}
        style={styles.logo}
      />
      <Heading
        title = "Encontre seu duo!"
        subitle='Selecione o game que deseja jogar...'
      />
      <FlatList data={games} 
      keyExtractor={item => item.id}
       renderItem={({item}) => (<GameCard data={item} onPress={()=>{handleOpenGame(item)}}/>
       )}
       horizontal
       contentContainerStyle = {styles.contentList}
       showsHorizontalScrollIndicator={false} >
      </FlatList>
     
      
    </SafeAreaView>
    </Backgroung>
  );
}