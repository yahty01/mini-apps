
//actions
export const setErrorAC = (error: Error) => ({ type: "SET-ERROR", payload: { error }}) as const

const initialState = {
	error: null as Error,
}
//reducer
export const appReducer = (state: AppStateType = initialState, action: ActionsApp): AppStateType => {
	switch (action.type) {

		case "SET-ERROR": {
			return { ...state, error: action.payload.error }
		}
		default:
			return state
	}
}

//types
type ActionsApp = ReturnType<typeof setErrorAC>
export type AppStateType = typeof initialState
export type Error = null | string
