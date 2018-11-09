import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const iMap = {
    'Ionicons': Ionicons,
}
const Icon = ({type = 'Ionicons' ,...props}) => {
    const TempIcon = iMap[type];
    return (
        <TempIcon {...props}></TempIcon>
    )
};

export default Icon;