
import { View, Text, ViewProps } from 'react-native';

import { styles } from './styles';

interface Props extends ViewProps{
    title: string;
    subitle: string;

}

export function Heading({title, subitle, ...rest} : Props) {
  return (
    <View style={styles.container} {...rest}>
        <Text style={styles.title}>
            {title}
        </Text>
        <Text style={styles.subtitle}>
            {subitle}
        </Text>
    </View>
  );
}