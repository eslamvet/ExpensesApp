import React, { Fragment, useRef, useState } from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import LayoutComponent from '../../components/LayoutComponent'
import { COLORS, FONTS, SIZES } from '../../utils/theme'
import RowComponent from '../../components/RowComponent'
import BoxComponent from '../../components/BoxComponent'

const CreditScoreScreen = ({route}:any) => {
  const [remainingAmount,setRemainingAmount] = useState<any>(route.params ? route.params.budget-route.params.spentMoney : undefined)
  const arr = useRef([1,2,3]).current

  return (
    <LayoutComponent isLoaded={remainingAmount !== undefined}>
      <ImageBackground source={require('../../assets/images/progress.png')} resizeMode='contain' style={styles.imageBackgroundStyle}>
        <Text style={FONTS.body3}>{remainingAmount < 400 ? 'bad' : remainingAmount > 850 ? 'very good' : 'good' }</Text>
        <Text style={styles.TextStyle}>${remainingAmount}</Text>
      </ImageBackground>
      <RowComponent customStyle={styles.customRowStyle}>
        <Text style={FONTS.body3}>400</Text>
        <Text style={FONTS.body3}>850</Text>
      </RowComponent>
      <BoxComponent customStyle={styles.customBoxStyle}>
        {
          arr.map((_,i)=>(
            <View key={i} style={[styles.listItemStyle,i==2 && {borderBottomWidth:0}]}>
              <RowComponent customStyle={styles.customRowStyle}>
                <Text style={[FONTS.body3,styles.textColor]}>{i == 0 ? 'On-time patments' : i == 1 ? 'Credit Utilization' : 'Age of credit'}</Text>
                <Text style={[FONTS.body3,styles.textColor]}>95</Text>
              </RowComponent>
              <RowComponent customStyle={styles.customRowStyle}>
                <Text style={FONTS.body3}>Good</Text>
                <Text style={FONTS.body3}>100</Text>
              </RowComponent>
            </View>
          ))
        }
      </BoxComponent>
    </LayoutComponent>
  )
}

export default CreditScoreScreen

const styles = StyleSheet.create({
  imageBackgroundStyle:{
    height:200,
    alignItems:'center',
    justifyContent:'center'
  },
  TextStyle:{
    ...FONTS.largeTitle,
    color:COLORS.gray85,
    marginTop:SIZES.padding
  },
  customBoxStyle:{
    marginTop:SIZES.largeTitle
  },
  customRowStyle:{
    justifyContent:'space-between'
  },
  listItemStyle:{
    paddingVertical:SIZES.base,
    borderBottomWidth:1,
    borderBottomColor:COLORS.gray10
  },
  textColor:{
    color:COLORS.gray85,
  }
})