// actions
export const resectAC = () => ({type: 'RESET-COUNTER'}) as const
export const incrementAC = () => ({type: 'INCREMENT-COUNTER'}) as const
export const setMaxValueAC = (newValue: number) => ({type: 'SET-COUNTER-MAX', newValue}) as const
export const setResetValueAC = (newValue: number) => ({type: 'SET-RESET-VALUE', newValue}) as const

const initialState: CounterState = {
	value: 0,
	maxValue: 10,
	resetValue: 0
}

export const counterReducer = (state: CounterState = initialState, action: ActionsType,): CounterState => {
	switch (action.type) {
		case 'INCREMENT-COUNTER': return {...state, value: state.value >= state.maxValue ? state.value + 1 : state.value}
		case 'SET-COUNTER-MAX': return {...state, maxValue: action.newValue}
		case "SET-RESET-VALUE": return {...state, resetValue: action.newValue}
		case 'RESET-COUNTER': return {...state, value: state.resetValue}

		default: return state
	}
}

//types
export type CounterState = {
	value: number
	maxValue: number
	resetValue: number
}

export type ActionsType =
	| ReturnType<typeof incrementAC>
	| ReturnType<typeof resectAC>
	| ReturnType<typeof setMaxValueAC>
	| ReturnType<typeof setResetValueAC>






