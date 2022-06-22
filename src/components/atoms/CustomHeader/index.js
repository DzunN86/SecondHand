import { View } from 'react-native';
import React from 'react';
import styles from './style';
// import Back from './Back'
import BackTitle from './BackTitle';
import Title from './Title';
import BackHeader from './BackHeader';

function CustomHeader ({
    title,
    onPress,
    type
}) {
    if(type === 'BackHeader'){
        return <BackHeader onPress={onPress}/>
    }
    if(type === 'BackTitle'){
        return <BackTitle title={title} onPress={onPress} />
    }
    if(type === 'HeaderTitle'){
        return <Title title={title}/>
    }
    return (
        <View style={styles.header}>
        </View>
    )
}

export default CustomHeader

