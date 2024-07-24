// @flow
import * as React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/theme";
import Stack from "@mui/material/Stack";
import {Slider} from "@mui/material";
import Button from "@mui/material/Button";
import {MutableRefObject, useEffect, useState} from "react";

type CounterOptionsProps = {
	OptionsSaved: (max: number, start: number) => void
	maxValue: number
	startValue:  MutableRefObject<number>
};

export const CounterOptions = ({OptionsSaved, maxValue, startValue}: CounterOptionsProps) => {
	const [maxOptionsValue, setMaxOptionsValue] = useState<number>(0);
	const [startOptionsValue, setStartOptionsValue] = useState<number>(0);

	useEffect(()=>{
		setMaxOptionsValue(maxValue)
	},[maxValue])

	const onChangeMaxValueHandler = (_: Event, newValue: number | number[]) => setMaxOptionsValue(newValue as number); // _ показывает что параметр намеренно не используется
	const onChangeStartValueHandler = (_: Event, newValue: number | number[]) => setStartOptionsValue(newValue as number);

	const onCLickSaveHandler = () => OptionsSaved(maxOptionsValue, startOptionsValue)

	return (
		<StyledCounterOptions>
			<Stack>
				<div>
					<span>Max value</span>
					<StyledSlider defaultValue={0} aria-label="Default" valueLabelDisplay="auto" value={maxOptionsValue} onChange={onChangeMaxValueHandler}/>
				</div>
				<div>
					<span>Reset value</span>
					<Stack direction="row" spacing={1}>
						<StyledSlider defaultValue={0} aria-label="Default" valueLabelDisplay="auto" value={startOptionsValue} onChange={onChangeStartValueHandler}/>
					</Stack>
				</div>
			</Stack>

			<Button variant="contained" onClick={onCLickSaveHandler}>Save</Button>
		</StyledCounterOptions>
	);
};

const StyledCounterOptions = styled.div`
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  outline: ${theme.colors.neon} 3px solid;
  height: fit-content;
  padding: 20px;
  border-radius: 10px;
  width: 450px;
	
	button {
		margin-top: 30px;
	}
`

const StyledSlider = styled(Slider)`
  width: 50px;
`