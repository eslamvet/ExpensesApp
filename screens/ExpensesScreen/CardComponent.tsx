import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'
import { CardProps } from '../../types/component.types'
import { COLORS, FONTS, SIZES } from '../../utils/theme'
import ProgressItem from './ProgressItem'
import TitleComponent from '../../components/TitleComponent'
import RowComponent from '../../components/RowComponent'
import BoxComponent from '../../components/BoxComponent'



const CardComponent = ({ expense, customIconContainerStyle, iconSrc, customContainerStyle, custompProgressIndicatorStyle, onPress }: CardProps) => {
  return (
    <BoxComponent customStyle={customContainerStyle}>
      <RowComponent customStyle={styles.customRowStyle}>
        <View style={[styles.iconContainer, customIconContainerStyle]}>
          <Image source={iconSrc} resizeMode='cover' />
        </View>
        <TitleComponent>{expense.label}</TitleComponent>
        <Text style={[FONTS.body3]}>${expense.budget}</Text>
      </RowComponent>
      {
        expense.servises.map((service, i) => <ProgressItem key={i} service={service} onPress={onPress} custompProgressIndicatorStyle={custompProgressIndicatorStyle} />)
      }
    </BoxComponent>
  )
}

export default memo(CardComponent)

const styles = StyleSheet.create({
  iconContainer: {
    width: 45,
    height: 45,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  customRowStyle: {
    marginBottom: SIZES.padding
  }
})