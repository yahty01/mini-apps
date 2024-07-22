import * as React from 'react';
import {useRef, useState} from "react";
import {DisplayCounterValue} from "./DisplayCounterValue";
import {theme} from "../../styles/theme";
import Stack from '@mui/material/Stack';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import PlusOneIcon from '@mui/icons-material/PlusOne';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';


export const Counter = () => {
	const generateRandomMaxValue = () => Math.round(Math.random() * 90) + 1;

	let maxValue = useRef(generateRandomMaxValue());

	const initialValue = 0
	const [counterValue, setCounterValue] = useState<number>(initialValue);
	const isMaxValue = counterValue >= maxValue.current

	const increase = () => !isMaxValue
		? setCounterValue(counterValue + 1)
		: setCounterValue(counterValue)

	const reset = () => {
		maxValue.current = generateRandomMaxValue()
		setCounterValue(0);
	}


	const disabledIncrease = () => isMaxValue
	const disabledReset = () => counterValue === 0

	return (
		<StyledMainDIv>
			<StyledCounter>
				<DisplayCounterValue
					maxValue={maxValue.current}
					isMaxValue={isMaxValue}
					counterValue={counterValue}/>
				<StyledStack spacing={1} direction="row" justifyContent={"center"}>
					<StyledButton
						variant='outlined'
						onClick={increase}
						disabled={disabledIncrease()}
						size="medium"
					><PlusOneIcon /></StyledButton>
					<StyledButton
						variant='outlined'
						onClick={reset}
						disabled={disabledReset()}
						color={maxValue.current === counterValue ? "error" : "primary"}
						size="medium"
					><RotateLeftIcon /></StyledButton>
				</StyledStack>
			</StyledCounter>
		</StyledMainDIv>
	);
};

// Стили
export const StyledMainDIv = styled(Box)`
  font-size: 2rem;
  height:80vh;
  background-color: ${theme.colors.accent02};
  display: flex;
  outline: 5px solid black;
  border-radius: 20px;
  justify-content: space-around;
  -webkit-user-select: none; /* Chrome, Safari, Opera */
  -moz-user-select: none;    /* Firefox */
  -ms-user-select: none;     /* Internet Explorer/Edge */
  user-select: none; 
	/* Non-prefixed version */
	padding: 20px;
	margin-top: 50px;
`

const StyledCounter = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledButton = styled(Button)`
  color: ${theme.colors.text};
  letter-spacing: 2px;
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
