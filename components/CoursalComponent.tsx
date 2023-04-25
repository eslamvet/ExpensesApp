import { Animated, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { memo, useRef } from 'react'
import { ExpandingDot } from 'react-native-animated-pagination-dots'
import { SIZES, COLORS } from '../utils/theme'
import { CoursalProps } from '../types/component.types'

const CoursalComponent = ({ data, renderItem, customContentContainerStyle, separatorWidth = SIZES.padding } : CoursalProps) => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const onScrollHandler = Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                contentContainerStyle={[{ paddingHorizontal: separatorWidth },customContentContainerStyle]}
                horizontal
                scrollEventThrottle={16}
                pagingEnabled
                decelerationRate='fast'
                snapToAlignment='center'
                snapToInterval={SIZES.width}
                showsHorizontalScrollIndicator={false}
                onScroll={onScrollHandler}
                keyExtractor={(_, i) => i.toString()}
                renderItem={renderItem}
                ItemSeparatorComponent={() => <View style={{ width:separatorWidth }} />}
            />
            <ExpandingDot
                data={data}
                expandingDotWidth={30}
                scrollX={scrollX}
                activeDotColor={COLORS.primary}
                inActiveDotOpacity={0.6}
                dotStyle={styles.dotStyle}
                containerStyle={styles.dotContainerStyle}
            />
        </View>
    )
}

export default memo(CoursalComponent)

const styles = StyleSheet.create({
    container:{
        position:'relative',
        paddingBottom:SIZES.padding
    },
    dotStyle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 5
    },
    dotContainerStyle: {
        bottom: 0,
    },
})