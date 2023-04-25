import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, {useCallback, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, FONTS, SIZES } from '../../utils/theme'
import TitleComponent from '../../components/TitleComponent'
import { ExpenseServiceState } from '../../types/expenseScreen.types'
import BoxComponent from '../../components/BoxComponent'
import ListItem from './ListItem'
import LayoutComponent from '../../components/LayoutComponent'

const BillScreen = ({route}:any) => {
  const [service,setService] = useState<ExpenseServiceState>(route?.params?.service)

  const sectionPresshandler = useCallback(()=>{
    console.log('pressed');
  },[])

  return (
      <LayoutComponent isLoaded={service !== undefined}>
          <Text style={styles.headerTitleStyle}>Your monthly payment{'\n'}for {service.label}</Text>
          <TitleComponent customTitleStyle={styles.headerBudgetTextStyle}>${service.spentMoney}</TitleComponent>
          <BoxComponent>
            {service.sections.map((section,i)=><ListItem  key={i} section={section} onPress={sectionPresshandler} />)}
          </BoxComponent>
      </LayoutComponent>
  )
}

export default BillScreen

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  contentContainerStyle:{
    padding: SIZES.padding
  },
  headerTitleStyle:{
    ...FONTS.body2,
    textAlign:'center',
    color:COLORS.gray85
  },
  headerBudgetTextStyle:{
    ...FONTS.largeTitle,
    textAlign:'center',
    marginVertical:SIZES.padding
  }

})

