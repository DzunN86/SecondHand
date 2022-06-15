import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import styles from './style';
import Back from './Back';
import BackTitle from './BackTitle';
import Title from './Title';

function CustomHeader ({
    title,
    onPress,
    type
}) {
    if(type === 'Back'){
        return <Back onPress={onPress}/>
    }
    if(type === 'BackTitle'){
        return <BackTitle title={title} onPress={onPress} />
    }
    if(type === 'Title'){
        return <Title title={title}/>
    }
    return (
        <View style={styles.header}>
        </View>
    )
}

export default CustomHeader

