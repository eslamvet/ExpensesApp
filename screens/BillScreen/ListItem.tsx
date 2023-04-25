import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { memo } from 'react'
import RowComponent from '../../components/RowComponent'
import TitleComponent from '../../components/TitleComponent'
import { ListItemProps } from '../../types/component.types'
import { COLORS, FONTS, SIZES } from '../../utils/theme'

const ListItem = ({section,onPress}:ListItemProps) => {
  return (
    <Pressable onPress={onPress}>
        <RowComponent customStyle={styles.customRowStyle}>
            <Image source={require('../../assets/images/Logo.png')} resizeMode='cover' style={styles.iconStyle} />
            <View style={styles.textWrapperStyle}>
                <Text style={styles.labelStyle}>{section.label}</Text>
                <TitleComponent>${section.spentMoney}</TitleComponent>
            </View>
            <Image source={require('../../assets/images/arrow-right.png')}/>
        </RowComponent>
    </Pressable>
  )
}

export default memo(ListItem)

const styles = StyleSheet.create({
    textWrapperStyle:{
        flex:1
    },
    labelStyle:{
        ...FONTS.body3,
        color:COLORS.gray85
    },
    customRowStyle:{
        paddingVertical:SIZES.base,
        marginBottom:SIZES.base
    },
    iconStyle:{
        width:50,
        height:50,
        borderRadius:25
    }
})