import React from 'react'
import { View, Text } from 'react-native'

interface SliderProp{
    label: string;
    right?: boolean;
}

const Slider = ( {label, right}: SliderProp ) => {
    return(
        <View>
            <Text>{label}</Text>
        </View>
    );
}

export default Slider;