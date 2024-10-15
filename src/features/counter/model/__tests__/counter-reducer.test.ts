import {
    counterReducer,
    initialStateType,
    incrementAC,
    resectAC,
    changeMaxValueAC
} from "../counter-reducer";
// Как вызвать акшен несколько раз в тесте ?

const initState: initialStateType = {
    counterValue: 0,
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

    expect(endState1.counterValue).toEqual(1)
    expect(endState2.counterValue).toEqual(2)
    expect(endState3.counterValue).toEqual(2)
    expect(endState4.counterValue).toEqual(0)
})

test('correct change max value', () => {
    const startState = {...initState}
    const endState = counterReducer(startState, changeMaxValueAC(1))
    const endState1 = counterReducer(endState, incrementAC())
    const endState2 = counterReducer(endState1, incrementAC())

    expect(endState2.counterValue).toEqual(1)

})





