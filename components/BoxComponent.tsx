import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SIZES, COLORS } from '../utils/theme'
import { RowComponentProps } from '../types/component.types'

const BoxComponent = ({children,customStyle}:RowComponentProps) => {
  return (
    <View style={[styles.container, customStyle]}>
        {children}
    </View>
  )
}

export default BoxComponent

const styles = StyleSheet.create({
    container: {
        padding: SIZES.font,
        borderRadius: SIZES.radius,
        elevation: 1,
        backgroundColor: COLORS.additionalColor4,
        borderColor: COLORS.additionalColor13,
        borderWidth: 1,
        marginBottom:SIZES.padding
    },
})