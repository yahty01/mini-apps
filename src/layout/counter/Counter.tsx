import * as React from 'react';
import {Button} from "../../components/Button";
import styled from "styled-components";
import {useRef, useState} from "react";
import {DisplayValue} from "./DisplayValue";

export const Counter = () => {
	const generateRandomMaxValue = () => Math.round(Math.random() * 9) + 1;

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
			<DisplayValue
				maxValue={maxValue.current}
				isMaxValue={isMaxValue}
				counterValue={counterValue}/>
			<div>
				<StyledButton
					name={'increase'}
					onClick={increase}
					disabled={disabledIncrease()}/>
				<StyledButton
					name={'reset'}
					onClick={reset}
					disabled={disabledReset()}/>
			</div>
		</StyledMainDIv>
	);
};

// Стили
const StyledMainDIv = styled.div`
  font-size: 30px;
  width: 600px;
  height: 500px;
  background-color: rgb(68, 15, 134);
  display: flex;
  margin: 50px auto;
  outline: 5px solid black;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const StyledButton = styled(Button)`
  background-color: ${props => (props.disabled ? "grey" : "blue")};
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${props => (props.disabled ? 0.6 : 1)};
  border-radius: 10px;
  margin: 5px;
  font-weight: bold;
  letter-spacing: 2px;

  &:hover {
    background-color: ${props => (props.disabled ? "grey" : "darkblue")};
  }
`;

