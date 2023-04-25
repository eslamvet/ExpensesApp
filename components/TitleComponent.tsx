import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TitleProps } from '../types/component.types'
import { COLORS, FONTS } from '../utils/theme'

const TitleComponent = ({children,customTitleStyle}:TitleProps) => {
  return <Text style={[styles.titleStyle,customTitleStyle]}>{children}</Text>
}

export default TitleComponent

const styles = StyleSheet.create({
    titleStyle: {
        flex: 1,
        color: COLORS.black,
        ...FONTS.h3
    },
})