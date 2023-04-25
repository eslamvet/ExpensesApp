import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import { LayoutProps } from '../types/component.types'
import { SafeAreaView } from 'react-native-safe-area-context'
import Loader from './Loader'
import { SIZES } from '../utils/theme'

const LayoutComponent = ({ children, customContentContainerStyle, isLoaded }: LayoutProps) => {

    return (
        <SafeAreaView style={styles.containerStyle} edges={['left', 'right']}>
            {
                isLoaded ?  <ScrollView style={styles.containerStyle} contentContainerStyle={[styles.contentContainerStyle, customContentContainerStyle]} showsVerticalScrollIndicator={false}>
                    {children}
                </ScrollView> : <Loader />
            }
        </SafeAreaView>
    )
}

export default memo(LayoutComponent)

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
    },
    contentContainerStyle: {
        padding: SIZES.padding
    }
})