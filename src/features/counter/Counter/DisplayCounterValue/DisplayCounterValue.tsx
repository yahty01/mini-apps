// @flow
import * as React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/theme";
import LinearProgress from '@mui/material/LinearProgress';

type DisplayValueProps = {
	maxValue: number
	isMaxValue: boolean
	counterValue: number
};


export const DisplayCounterValue = ({maxValue, isMaxValue, counterValue}: DisplayValueProps) => {
	const progressPercentage = (counterValue / maxValue) * 100;

	return (
		<StyledDisplayCounterValue>
			<MaxValue>Max value: {maxValue}</MaxValue>
			<ValueCounter isMaxValue={isMaxValue}>{counterValue}</ValueCounter>
			<BorderLinearProgress variant="buffer" value={progressPercentage} />
		</StyledDisplayCounterValue>
	);
};

// Стили
type ValueCounterProps = {
	isMaxValue: boolean
};
const StyledDisplayCounterValue = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`
const ValueCounter = styled.p<ValueCounterProps>`
  color: ${props => (props.isMaxValue ? "red" : theme.colors.text)};
  text-align: center;
  font-weight: bold;
	padding: 30px;
`;

const MaxValue = styled.p`
  border-bottom: 2px solid ${theme.colors.stroke};
  font-weight: bold;
  color: ${theme.colors.text};
	min-width: 300px;
`;

const BorderLinearProgress = styled(LinearProgress)`
  border-radius: 5px;
	padding: 5px 10px;
`;