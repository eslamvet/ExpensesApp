import React, { useState, useCallback, useEffect, useMemo } from 'react'
import { StyleSheet, View } from 'react-native'
import CardComponent from './CardComponent'
import { COLORS, FONTS, SIZES } from '../../utils/theme'
import TitleComponent from '../../components/TitleComponent'
import { TotalExpenses } from '../../utils/dummyData'
import PickerComponent from './PickerComponent'
import { MonthlyExpenseState, ExpenseState, ExpenseServiceState } from '../../types/expenseScreen.types'
import CoursalComponent from '../../components/CoursalComponent'
import BudgetSection from './BudgetSection'
import { useNavigation } from '@react-navigation/native'
import LayoutComponent from '../../components/LayoutComponent'



const ExpensesScreen = () => {
  const [monthlyExpenses, setMonthlyExpenses] = useState<MonthlyExpenseState>(null as any)
  const navigation = useNavigation<any>()

  useEffect(() => {
    monthlyExpenseChangeHandler(0)
  }, [])
  
  const renderItem = useCallback(({item} : {item:ExpenseState}) => <CardComponent onPress={onCardPressHandler} customContainerStyle={styles.customBillCardStyle} expense={item} customIconContainerStyle={styles.customBillIconContainerStyle} iconSrc={require('../../assets/images/receipt-text.png')} custompProgressIndicatorStyle={styles.customBillProgressIndicatorStyle} />, [])

  const onChangeHandler = useCallback((id:number)=>{
    monthlyExpenseChangeHandler(id)
  },[])

  const chuncks = useMemo<any>(()=>{
    return monthlyExpenses?.expenses.map(({spentMoney},i)=>({budget:monthlyExpenses.budget,spentMoney,custompProgressIndicatorStyle:{backgroundColor:i == 0 ? COLORS.primary : i == 1 ? COLORS.secondary : COLORS.success}}))
  },[monthlyExpenses])

  function monthlyExpenseChangeHandler(id:number)  {
    let selectedMonthExpenses = TotalExpenses.find(expense=>expense.id == id) as MonthlyExpenseState
    if(selectedMonthExpenses){
      selectedMonthExpenses.totalExpenses = 0
      selectedMonthExpenses.expenses.forEach(expense=>{
        expense.spentMoney = 0
        expense.budget = 0
        expense.servises.forEach(service=>{
          service.spentMoney = 0
          service.sections.forEach(section=>{
            service.spentMoney += section.spentMoney
          })
          expense.spentMoney += service.spentMoney 
          expense.budget += service.budget
        })
        selectedMonthExpenses.totalExpenses += expense.spentMoney 
      })
      setMonthlyExpenses(selectedMonthExpenses)
    }
  }

  const monthlyExpensesSliderData = useMemo<any>(()=>{
    return monthlyExpenses?.expenses.slice(1)
  },[monthlyExpenses])

  const onCardPressHandler = useCallback((service:ExpenseServiceState)=>{
    navigation.navigate('Bill',{service})
  },[])

  return (
      <LayoutComponent isLoaded={monthlyExpenses != null} customContentContainerStyle={styles.customContentContainerStyle}>
          <View style={styles.wrapperStyle}>
            <PickerComponent onChange={onChangeHandler} />
            <TitleComponent customTitleStyle={styles.customTitleStyle}>${monthlyExpenses?.totalExpenses}</TitleComponent>
            <BudgetSection budget={monthlyExpenses?.budget} spentMoney={monthlyExpenses?.totalExpenses} chuncks={chuncks} />
            <CardComponent onPress={onCardPressHandler} expense={monthlyExpenses?.expenses[0]} customIconContainerStyle={styles.customTransportIconContainerStyle} iconSrc={require('../../assets/images/car.png')} custompProgressIndicatorStyle={styles.transportCardProgressIndicatorStyle} />
          </View>
          <CoursalComponent data={monthlyExpensesSliderData} renderItem={renderItem} />
      </LayoutComponent>
  )
}

export default ExpensesScreen

const styles = StyleSheet.create({
  customContentContainerStyle:{
    paddingVertical: SIZES.padding,
    paddingHorizontal:0
  },
  customTitleStyle: {
    textAlign: 'center',
    marginVertical: 18,
    ...FONTS.largeTitle
  },
  wrapperStyle:{
    marginHorizontal : SIZES.padding,
  },
  transportCardStyle: {
    marginBottom : SIZES.padding
  },
  customTransportIconContainerStyle: {
    backgroundColor: COLORS.transparentPrimary
  },
  transportCardProgressIndicatorStyle: {
    backgroundColor: COLORS.primary
  },
  customBillProgressIndicatorStyle: {
    backgroundColor: COLORS.secondary
  },
  customBillIconContainerStyle: {
    backgroundColor: COLORS.transparentSecondary
  },
  customBillCardStyle: {
    width: SIZES.width - (SIZES.padding * 2),
    marginBottom:0
  }
})