import { Animated, LayoutChangeEvent, Pressable, StyleSheet, Text, View   } from 'react-native'
import React, { memo, useMemo, useRef } from 'react'
import { ProgressItemProps } from '../../types/component.types'
import { COLORS, FONTS, SIZES } from '../../utils/theme'
import TitleComponent from '../../components/TitleComponent'
import RowComponent from '../../components/RowComponent'
import ProgressIndicator from '../../components/ProgressIndicator'

const ProgressItem = ({ service,custompProgressIndicatorStyle,onPress }: ProgressItemProps) => {

    const chuncks = useMemo(()=>{
        return [{...service,custompProgressIndicatorStyle}]
    },[service])

    return (
        <Pressable style={styles.containerStyle} onPress={()=>onPress(service)}>
            <RowComponent customStyle={styles.customRowStyle}>
                <TitleComponent>{service.label}</TitleComponent>
                <Text style={styles.budgetTextStyle}>${service.budget}</Text>
            </RowComponent>
            <RowComponent>
                <ProgressIndicator chuncks={chuncks} />
                <Text style={[FONTS.body4]}>${service.budget - service.spentMoney}</Text>
            </RowComponent>
        </Pressable>
    )
}

export default memo(ProgressItem)

const styles = StyleSheet.create({
    containerStyle: {
        marginBottom: SIZES.radius
    },
    customRowStyle:{
        marginBottom:5
    },
    budgetTextStyle:{
        ...FONTS.h3,
        color:COLORS.black
    }
})