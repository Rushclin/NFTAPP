import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StatusBar, Text, View } from 'react-native'
import { COLORS } from './src/constants'
import Detail from './src/screens/Detail'
import Home from './src/screens/Home'

// ! For Stack navigation
const Stack = createNativeStackNavigator()

// ! For theme
const theme = {
  ...DefaultTheme.colors,
  colors: {
    background: 'transparent'

  }
}

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <StatusBar backgroundColor={COLORS.primary} />
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Details' component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App