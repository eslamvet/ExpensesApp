import { PropsWithChildren } from "react"
import { FlatListProps, ImageSourcePropType, ListRenderItem, StyleProp, TextStyle, ViewStyle } from "react-native/types"
import { ExpenseState, ExpenseServiceState,SectionState,SharedBudgetState } from "./expenseScreen.types"

type SharedProps = {
    custompProgressIndicatorStyle ?: StyleProp<ViewStyle>
}

export type CardProps = {
    onPress : (service:ExpenseServiceState) => void
    expense : ExpenseState
    customIconContainerStyle : StyleProp<ViewStyle>
    customContainerStyle ?: StyleProp<ViewStyle>
    iconSrc:ImageSourcePropType
} & SharedProps

export type ProgressItemProps = {
    service:ExpenseServiceState
    onPress : (service:ExpenseServiceState) => void
} & SharedProps

export type ProgressIndicatorProps = {
    chuncks : (SharedProps & Omit<SharedBudgetState,'label'|'id'>) []
}

export type BudgetProps = ProgressIndicatorProps & Omit<SharedBudgetState,'label'|'id'>

export type TitleProps = PropsWithChildren<{
    customTitleStyle ?: StyleProp<TextStyle>
}>

export type RowComponentProps = PropsWithChildren<{
    customStyle ?: StyleProp<ViewStyle>
}>

export type PickerProps = {
    onChange : (id:number) => void
}

export type CoursalProps = {
    data:any[]
    renderItem:ListRenderItem<any>
    customContentContainerStyle ?: StyleProp<ViewStyle>
    separatorWidth ?: number
}

export type ListItemProps = {
    onPress:()=>void
    section:SectionState
}

export type LayoutProps = PropsWithChildren<{
    customContentContainerStyle ?: StyleProp<ViewStyle>
    isLoaded : boolean
}>
