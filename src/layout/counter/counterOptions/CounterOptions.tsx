// @flow
import * as React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/theme";
import Stack from "@mui/material/Stack";
import {Slider} from "@mui/material";
import Button from "@mui/material/Button";
import {useState} from "react";

type CounterOptionsProps = {
	OptionsSaved: (max: number, start: number) => void
};

export const CounterOptions = ({OptionsSaved}: CounterOptionsProps) => {
	const [maxValue, setMaxValue] = useState<number>(0);
	const [startValue, setStartValue] = useState<number>(0);

	const onChangeMaxValueHandler = (_: Event, newValue: number | number[]) => setMaxValue(newValue as number); // _ показывает что параметр намеренно не используется
	const onChangeStartValueHandler = (_: Event, newValue: number | number[]) => setStartValue(newValue as number);

	const onCLickSaveHandler = () => OptionsSaved(maxValue, startValue)

	return (
		<StyledCounterOptions>
			<Stack>
				<div>
					<span>Max value</span>
					<StyledSlider defaultValue={0} aria-label="Default" valueLabelDisplay="auto" value={maxValue} onChange={onChangeMaxValueHandler}/>
				</div>
				<div>
					<span>Start value</span>
					<Stack direction="row" spacing={1}>
						<StyledSlider defaultValue={0} aria-label="Default" valueLabelDisplay="auto" value={startValue} onChange={onChangeStartValueHandler}/>
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