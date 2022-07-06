import { View } from 'react-native';
import React from 'react';
import TabPicture from './TabPicture';
import TabProduk from './TabProduk';

function TabAdd ({
    title, icon, onPress, label, type
}) {
    if(type === 'TabProduk'){
        return <TabProduk type={type} title={title} icon={icon} onPress={onPress}/>
    }
    if(type === 'TabPicture'){
        return <TabPicture type={type} label={label} onPress={onPress} icon={icon}/>
    }
}

export default TabAdd

