import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import BoxComponent from '../../components/BoxComponent'
import RowComponent from '../../components/RowComponent'
import TitleComponent from '../../components/TitleComponent'
import { BudgetProps } from '../../types/component.types'
import ProgressIndicator from '../../components/ProgressIndicator'
import { SIZES } from '../../utils/theme'
import { useNavigation } from '@react-navigation/native'

const BudgetSection = ({chuncks,budget,spentMoney}:BudgetProps) => {
  const navigation = useNavigation<any>()

  return (
    <Pressable onPress={()=>navigation.navigate('CreditScore',{budget,spentMoney})}>
        <BoxComponent>
            <RowComponent customStyle={styles.customStyle}>
                <View>
                    <Text>Left to spend</Text>
                    <TitleComponent customTitleStyle={styles.customTitleStyle}>${budget-spentMoney}</TitleComponent>
                </View>
                <View>
                    <Text>Monthly budget</Text>
                    <TitleComponent customTitleStyle={styles.customTitleStyle}>${budget}</TitleComponent>
                </View>
            </RowComponent>
            <ProgressIndicator chuncks={chuncks} />
        </BoxComponent>
    </Pressable>
  )
}

export default memo(BudgetSection)

const styles = StyleSheet.create({
    customStyle:{
        justifyContent:'space-between',
        marginBottom:SIZES.font
    },
    customTitleStyle:{
        fontSize:18,
        marginTop:5
    }
})