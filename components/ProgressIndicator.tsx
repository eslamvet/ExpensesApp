import { Animated, Easing, LayoutChangeEvent, StyleSheet, Text, View, ViewProps } from 'react-native'
import React, { memo, useEffect, useLayoutEffect, useRef } from 'react'
import { ProgressIndicatorProps } from '../types/component.types'
import { SIZES, COLORS } from '../utils/theme'

const ProgressIndicator = ({chuncks} : ProgressIndicatorProps) => {
    const width = useRef(chuncks.map(()=>new Animated.Value(0))).current
    const progressRef = useRef<View>(null)
    const timeOut = useRef<number | null>(null)

    useEffect(()=>{
        if(!timeOut.current){
            timeOut.current = setTimeout(()=>{
                progressRef.current?.measureInWindow((...args)=>{
                    Animated.sequence(chuncks.map(({spentMoney,budget},i)=>Animated.timing(width[i],{toValue:Math.round((spentMoney / budget) *  args[2]),duration:200,easing:Easing.ease,useNativeDriver:false}))).start()
                })
            },150)
        }else{
            progressRef.current?.measureInWindow((...args)=>{
                Animated.sequence(chuncks.map(({spentMoney,budget},i)=>Animated.timing(width[i],{toValue:spentMoney == budget ?  args[2] + 20 : Math.round((spentMoney / budget) *  args[2]),duration:300,easing:Easing.ease,useNativeDriver:false}))).start()
            })
        }
        
        return ()=>{
            timeOut.current && clearTimeout(timeOut.current)
        }
    },[chuncks])

  return (
    <View ref={progressRef} style={styles.progress}>
        {
            chuncks.map(({custompProgressIndicatorStyle},i)=><Animated.View key={i} style={[styles.progressIndicatorStyle,{width:width[i]},custompProgressIndicatorStyle]} />)
        }
    </View>
  )
}

export default memo(ProgressIndicator)

const styles = StyleSheet.create({
    progress:{
        flex:1,
        flexDirection:'row',
        height:SIZES.base - 1,
        borderRadius:SIZES.radius,
        backgroundColor:COLORS.gray40,
        overflow:'hidden'
    },
    progressIndicatorStyle:{
        height:'100%'
    },
})