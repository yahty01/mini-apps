



export type incrementCounterAT = {
	type: 'INCREMENT-COUNTER'
}

export type initialStateType = {
	counterValue: number
	maxValue: number
}

//union type
export type ActionsType =
	| incrementCounterAT


const initialState: initialStateType = {
	counterValue: 0,
	maxValue: 10
}

export const counterReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {

	switch (action.type) {
		case 'INCREMENT-COUNTER': {

			return {...state}
		}

		default:
			return state
	}
}


// функции фабрики
export const incrementAC = (): incrementCounterAT => {
	return {
		type: 'INCREMENT-COUNTER',
	} as const
}



