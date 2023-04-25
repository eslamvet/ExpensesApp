import { NavigatorScreenParams } from "@react-navigation/native"

export type MainTabParamList = {
    OverView:undefined
    ThisMonth:NavigatorScreenParams<ThisMonthStackParamList>
    Offers:undefined
    Settings:undefined
}

export type ThisMonthStackParamList = {
    Expenses:undefined
    Bill:undefined
    CreditScore:undefined
}

