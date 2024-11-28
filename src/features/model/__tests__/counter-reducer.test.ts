import {
    counterReducer,
    CounterState,
    incrementAC,
    resectAC,
    setMaxValueAC
} from "../counter-reducer";
// Как вызвать акшен несколько раз в тесте ?

const initState: CounterState = {
    value: 0,
    maxValue: 2,
    optionsIsOpen: false,
    resetValue: 0
}

test('correct increase and reset to zero', () => {
    const startState = {...initState}

    const endState1 = counterReducer(startState, incrementAC())
    const endState2 = counterReducer(endState1, incrementAC())
    const endState3 = counterReducer(endState2, incrementAC())
    const endState4 = counterReducer(endState3, resectAC())

    expect(endState1.value).toEqual(1)
    expect(endState2.value).toEqual(2)
    expect(endState3.value).toEqual(2)
    expect(endState4.value).toEqual(0)
})

test('correct change max value', () => {
    const startState = {...initState}
    const endState = counterReducer(startState, setMaxValueAC(1))
    const endState1 = counterReducer(endState, incrementAC())
    const endState2 = counterReducer(endState1, incrementAC())

    expect(endState2.value).toEqual(1)

})





