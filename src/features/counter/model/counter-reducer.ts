
export type IncrementCounterA = {
	type: 'INCREMENT-COUNTER'
}

export type ResetCounterA = {
	type: 'RESET-COUNTER'
}

export type ChangeCounterMaxValueA = {
	type: 'CHANGE-COUNTER-MAX'
	newValue: number
}

export type initialStateType = {
	counterValue: number
	maxValue: number
	optionsIsOpen: boolean
	resetValue: number
}

//union type
export type ActionsType =
	| IncrementCounterA
	| ResetCounterA
    | ChangeCounterMaxValueA


const initialState: initialStateType = {
	counterValue: 0,
	maxValue: 10,
	optionsIsOpen: false,
	resetValue: 0
}

export const counterReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {

	switch (action.type) {
		case 'INCREMENT-COUNTER': {
			const isMaxValue = state.counterValue >= state.maxValue
			return {...state, counterValue: !isMaxValue ? state.counterValue + 1 : state.counterValue}
		}

		case 'RESET-COUNTER': {
			return {...state, counterValue: state.resetValue}
		}

		case 'CHANGE-COUNTER-MAX': {
			return {...state, maxValue: action.newValue}
		}

		default:
			return state
	}
}


// функции фабрики
export const incrementAC = (): IncrementCounterA => {
	return {
		type: 'INCREMENT-COUNTER',
	} as const
}

export const resectAC = (): ResetCounterA => {
	return {
		type: 'RESET-COUNTER',
	} as const
}

export const changeMaxValueAC = (newValue: number): ChangeCounterMaxValueA => {
	return {
		type: 'CHANGE-COUNTER-MAX',
		newValue
	} as const
}



