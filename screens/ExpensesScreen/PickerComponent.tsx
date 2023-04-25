import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { PickerProps } from '../../types/component.types'
import { Picker } from '@react-native-picker/picker'
import { TotalExpenses } from '../../utils/dummyData'
import { COLORS } from '../../utils/theme'

const PickerComponent = ({onChange}:PickerProps) => {
  const [selectedMonth, setSelectedMonth] = useState(0)

  return (
      <Picker
        style={styles.customPickerStyle}
        selectedValue={selectedMonth}
        dropdownIconRippleColor='transparent'
        onValueChange={(itemValue, itemIndex) =>{
          onChange(itemValue)
          setSelectedMonth(itemValue)
        }}>
        {
          TotalExpenses.map((expense)=><Picker.Item color={COLORS.black} style={styles.pickerItemStyle} key={expense.id} label={expense.label} value={expense.id} />)       
        }
      </Picker>
  )
}

export default PickerComponent

const styles = StyleSheet.create({
    customPickerStyle:{
        width : 200,
        alignSelf:'center',
        marginBottom:-10,
    },
    pickerItemStyle:{
      backgroundColor:'white'
    }
})