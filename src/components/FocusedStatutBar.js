import { useIsFocused } from '@react-navigation/native'
import React from 'react'
import { StatusBar, Text, View } from "react-native"

const FocusedStatutBar = (props) => {
    const isFocused = useIsFocused()
    return isFocused ? <StatusBar animated={true} {...props} /> : null
}

export default FocusedStatutBar