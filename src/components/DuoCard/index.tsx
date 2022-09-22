import { GameController } from 'phosphor-react-native';

import { View, Text, DrawerLayoutAndroidBase, TouchableOpacity } from 'react-native';
import { THEME } from '../../theme';
import { DuoInfo } from '../DuoInfo';


import { styles } from './styles';

export interface DuoCardProps{
  id:string ,
  hourEnd:string ,
  hourStart: string,
  name:string ,
  useVoiceChannel: boolean ,
  weekDays: string[],
  yearsPlaying: number,
  
}
interface Props{
  data: DuoCardProps,
  onConect: ()=> void,
}

export function DuoCard({data, onConect} : Props) {
  return (
    <View style={styles.container}>
      <DuoInfo label='Nome' value={data.name}
      />
       <DuoInfo label='Tempo de jogo' value={`${data.yearsPlaying} ano(s)`}
      />
      <DuoInfo label='Dispobibilidade' value={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd}`}
      />
      <DuoInfo 
        label='Chamada de Audio'
        value={data.useVoiceChannel? "Sim" : "Nao"}
        colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS: THEME.COLORS.ALERT }

      />
      <TouchableOpacity style={styles.button} onPress={onConect}>
        <GameController color={THEME.COLORS.TEXT} size={20}/>
        <Text style={styles.title}>Conectar</Text>
      </TouchableOpacity>
      
    
     
    </View>
  );
}