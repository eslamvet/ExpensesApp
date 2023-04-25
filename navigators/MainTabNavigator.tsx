import React, { useCallback, useMemo } from 'react'
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainTabParamList } from '../types/navigation.types';
import OverviewScreen from '../screens/OverviewScreen';
import {Image} from 'react-native'
import { COLORS } from '../utils/theme';
import ThisMonthStackNavigator from './ThisMonthStackNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import OffersScreen from '../screens/OffersScreen';

const MainTab = createBottomTabNavigator<MainTabParamList>();

const MainTabBarScreenOptions = ({route}:any) => {
  let imgSrc : any
  switch (route.name) {
    case 'OverView':
      imgSrc = require('../assets/images/OverViewIcon.png')
      break;
    case 'ThisMonth':
      imgSrc = require('../assets/images/ThisMonthIcon.png')
      break;
    case 'Offers':
      imgSrc = require('../assets/images/OffersIcon.png')
      break;
    case 'Settings':
      imgSrc = require('../assets/images/SettingsIcon.png')
      break;
  }

  return {
    headerShown:false,
    tabBarInactiveTintColor:COLORS.additionalColor11,
    tabBarActiveTintColor:COLORS.primary,
    tabBarStyle:{height:60},
    tabBarLabelStyle:{marginBottom:5,fontSize:12,marginTop:-5},
    tabBarIcon:({color,focused,size:width}:{size:number,focused:boolean,color:string})=><Image source={imgSrc} resizeMode='cover' style={{width,tintColor:focused ? color : COLORS.additionalColor9}}  />,
    unmountOnBlur:true
  }
};


const MainTabNavigator = () => {
  return (
    <MainTab.Navigator screenOptions={MainTabBarScreenOptions}>
      <MainTab.Screen name='OverView' component={OverviewScreen} />
      <MainTab.Screen name='ThisMonth' component={ThisMonthStackNavigator} options={{tabBarLabel:'This Month'}}  />
      <MainTab.Screen name='Offers' component={OffersScreen}  />
      <MainTab.Screen name='Settings' component={SettingsScreen}  />
    </MainTab.Navigator>
  )
}

export default MainTabNavigator