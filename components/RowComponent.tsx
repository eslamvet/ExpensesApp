import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SIZES } from '../utils/theme'
import { RowComponentProps } from '../types/component.types'

const RowComponent = ({children,customStyle}:RowComponentProps) => {
  return (
    <View style={[styles.rowStyle,customStyle]}>
      {children}
    </View>
  )
}

export default RowComponent

const styles = StyleSheet.create({
    rowStyle:{
        flexDirection:'row',
        alignItems:'center',
        gap:SIZES.radius
    }
})