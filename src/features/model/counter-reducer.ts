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

export type ChangeResetValueA = {
	type: 'CHANGE-RESET-VALUE'
	newValue: number
}

export type initialStateType = {
	counterValue: number
	maxValue: number
	resetValue: number
}

//union type
export type ActionsType =
	| IncrementCounterA
	| ResetCounterA
	| ChangeResetValueA
	| ChangeCounterMaxValueA


const initialState: initialStateType = {
	counterValue: 0,
	maxValue: 10,
	resetValue: 0
}
//Если мы используем данные с сервера, каким образом мы их инициализируем при первом рендере?
export const counterReducer = (
	state: initialStateType = initialState,
	action: ActionsType,
): initialStateType => {

	switch (action.type) {
		case 'INCREMENT-COUNTER': {
			const isMaxValue = state.counterValue >= state.maxValue
			return {
				...state,
				counterValue: !isMaxValue
					? state.counterValue + 1
					: state.counterValue
			}
		}

		case 'RESET-COUNTER': {
			return {...state, counterValue: state.resetValue}
		}

		case 'CHANGE-COUNTER-MAX': {
			return {...state, maxValue: action.newValue}
		}

		case "CHANGE-RESET-VALUE": {
			return {...state, resetValue: action.newValue}

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

export const changeResetValueAC = (newValue: number): ChangeResetValueA => {
	return {
		type: 'CHANGE-RESET-VALUE',
		newValue
	} as const
}



