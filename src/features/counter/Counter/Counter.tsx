import * as React from 'react';
import {useEffect, useRef, useState} from 'react';
import {DisplayCounterValue} from "./DisplayCounterValue/DisplayCounterValue";
import {theme} from "../../../styles/theme";
import Stack from '@mui/material/Stack';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import PlusOneIcon from '@mui/icons-material/PlusOne';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import {CounterOptions} from "./CounterOptions/CounterOptions";


const generateRandomMaxValue = (maxValueNow: number) => Math.round(Math.random() * 20) + maxValueNow;

export const Counter = () => {
	const [counterValue, setCounterValue] = useState<number>(0);
	const [maxValue, setMaxValue] = useState<number>(100);
	const [optionsIsOpen, setOptionsIsOpen] = useState<boolean>(false);

	// useEffect(() => {
	// 	let getCounterValue = localStorage.getItem('counterValue')
	// 	if (getCounterValue) {
	// 		setCounterValue(JSON.parse(getCounterValue));
	// 	}
	// }, [])
	//
	// useEffect(() => {
	// 	localStorage.setItem('counterValue', JSON.stringify(counterValue));
	// }, [counterValue]);
	//
	//
	// useEffect(() => {
	// 	let getMaxValue = localStorage.getItem('maxOptionsValue')
	// 	if (getMaxValue) {
	// 		setMaxValue(JSON.parse(getMaxValue));
	// 	}
	// }, [])
	//
	// useEffect(() => {
	// 	localStorage.setItem('maxOptionsValue', JSON.stringify(maxValue))
	// }, [maxValue])

	const resetValue = useRef<number>(0);

	// useEffect(() => {
	// 	let getResetOptionsValue = localStorage.getItem('resetOptionsValue')
	// 	if (getResetOptionsValue) {
	// 		resetValue.current = JSON.parse(getResetOptionsValue)
	// 	}
	// }, [])

	const OptionsSaved = (max: number, start: number) => {
		setMaxValue(max)
		switchDisplayOptions()
		resetValue.current = (start)
	}
	const isMaxValue = counterValue >= maxValue

	const increase = () => !isMaxValue
		? setCounterValue(counterValue + 1)
		: setCounterValue(counterValue)

	const reset = () => {
		setCounterValue(resetValue.current);
	}

	const setRandomMaxValue = (maxValueNow: number) => {
		setMaxValue(generateRandomMaxValue(maxValueNow))
		reset()
	}

	const switchDisplayOptions = () => {
		setOptionsIsOpen(!optionsIsOpen)
	}

	const disabledIncrease = () => isMaxValue
	const disabledReset = () => counterValue === 0


	return <StyledMainDIv>
		{
			optionsIsOpen
				? <CounterOptions OptionsSaved={OptionsSaved} maxValue={maxValue}/>
				: <>
					<StyledCounter>
						<DisplayCounterValue
							maxValue={maxValue}
							isMaxValue={isMaxValue}
							counterValue={counterValue}
						/>
						<StyledStack spacing={1} direction="row" justifyContent={"center"}>
							<StyledButton
								variant='outlined'
								onClick={increase}
								disabled={disabledIncrease()}
								size="large"
							><PlusOneIcon/></StyledButton>
							<StyledButton
								variant='outlined'
								onClick={reset}
								disabled={disabledReset()}
								color={maxValue === counterValue ? "error" : "primary"}
								size="large"
							><RotateLeftIcon/></StyledButton>
							<StyledButton
								variant='outlined'
								onClick={() => setRandomMaxValue(counterValue)}
								size="large"
							>Random max</StyledButton>
							<StyledButton
								variant='outlined'
								onClick={switchDisplayOptions}
								size="large"
							>Settings</StyledButton>
						</StyledStack>
					</StyledCounter>
				</>
		}
	</StyledMainDIv>


};

// Стили
export const StyledMainDIv = styled(Box)`
  font-size: 3rem;
  height: 80vh;
  background-color: ${theme.colors.accent02};
  display: flex;
  outline: 3px solid rgba(52, 16, 16, 0.5);
  border-radius: 20px;
  justify-content: space-evenly;
  align-items: center;
  -webkit-user-select: none; /* Chrome, Safari, Opera */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  /* Non-prefixed version */
  padding: 20px;
  margin-top: 50px;
`

const StyledCounter = styled.div`
  display: flex;
  flex-direction: column;
  outline: ${theme.colors.neon} 3px solid;
  height: fit-content;
  padding: 20px;
  border-radius: 10px;
  width: fit-content;
`

const StyledButton = styled(Button)`
  color: ${theme.colors.text};
  border-width: 2px;

  &:hover {
    border-width: 2px;
  }

  &:disabled {
    border-width: 2px;
  }
`;

const StyledStack = styled(Stack)`
  margin: 20px 0 0 0;
`
