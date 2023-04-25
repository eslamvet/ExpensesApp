export type SectionState = {
    id: number
    label: string
    spentMoney: number
}

export type SharedBudgetState = SectionState & {
    budget: number
}

export type ExpenseServiceState = SharedBudgetState & {
    sections: SectionState[];
}

export type ExpenseState  = SharedBudgetState & {
    servises: ExpenseServiceState[];
}

export type MonthlyExpenseState = Omit<SharedBudgetState,'spentMoney'> & {
    totalExpenses: number
    expenses: ExpenseState[];
}