import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../utils/theme'

const OffersScreen = () => {
  return (
    <SafeAreaView style={styles.container} edges={['top','left','right']}>
      <Text style={styles.textStyle}>OffersScreen</Text>
    </SafeAreaView>
  )
}

export default OffersScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
  },
  textStyle:{
    color:COLORS.gray85
  }
})