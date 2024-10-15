import {RootState} from "../../../app/store";

export const selectCounterValue = (state: RootState) => state.counter.counterValue
export const selectMaxValue = (state: RootState) => state.counter.maxValue
export const selectResetValue = (state: RootState) => state.counter.resetValue
