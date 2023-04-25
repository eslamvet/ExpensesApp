import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ThisMonthStackParamList } from '../types/navigation.types'
import BillScreen from '../screens/BillScreen'
import CreditScoreScreen from '../screens/CreditScoreScreen'
import { Image, TouchableOpacity } from 'react-native'
import ExpensesScreen from '../screens/ExpensesScreen'

const ThisMonthStack = createNativeStackNavigator<ThisMonthStackParamList>()

const ThisMonthStackNavigator = () => {
  return (
    <ThisMonthStack.Navigator initialRouteName='Expenses' screenOptions={{headerTitleAlign:'center',headerRight:(props)=><TouchableOpacity {...props}><Image source={require('../assets/images/add.png')} resizeMode='cover' /></TouchableOpacity>}}>
        <ThisMonthStack.Screen name='Expenses' component={ExpensesScreen} />
        <ThisMonthStack.Screen name='Bill' component={BillScreen} />
        <ThisMonthStack.Screen name='CreditScore' component={CreditScoreScreen} />
    </ThisMonthStack.Navigator>
  )
}

export default ThisMonthStackNavigator