// @flow
import * as React from 'react';
import styled from "styled-components";

type DisplayValueProps = {
	maxValue: number
	isMaxValue: boolean
	counterValue: number
};

export const DisplayValue = ({maxValue, isMaxValue, counterValue}: DisplayValueProps) => {
	const progressPercentage = (counterValue / maxValue) * 100;

	return (
		<div>
			<MaxValue>Max value: {maxValue}</MaxValue>
			<ValueCounter isMaxValue={isMaxValue}>{counterValue}</ValueCounter>
			<ProgressBarContainer>
				<ProgressBar progress={progressPercentage}/>
			</ProgressBarContainer>
		</div>
	);
};

// Стили
type ValueCounterProps = {
	isMaxValue: boolean
};

const ValueCounter = styled.p<ValueCounterProps>`
  color: ${props => (props.isMaxValue ? "red" : "black")};
  text-align: center;
  font-weight: bold;
`;

const MaxValue = styled.p`
  text-align: center;
  border-bottom: 3px solid black;
  font-weight: bold;
  color: wheat;
`;

type ProgressBarProps = {
	progress: number,
};

const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 10px;
`;

const ProgressBar = styled.div<ProgressBarProps>`
  width: ${props => props.progress}%;
  height: 20px;
  background-color: ${props => (props.progress >= 100 ? "red" : "green")};
`;

