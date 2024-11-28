// @flow
import * as React from 'react';
import {useEffect, useState} from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/theme";
import Stack from "@mui/material/Stack";
import {Slider} from "@mui/material";
import Button from "@mui/material/Button";
import {resectAC} from "../../../model/counter-reducer";
import {useAppDispatch} from "../../../../common/hooks/useAppDispatch";

type CounterOptionsProps = {
	OptionsSaved: (max: number, start: number) => void
	maxValue: number
	resetValue: number
};

export const CounterOptions = ({OptionsSaved, maxValue, resetValue}: CounterOptionsProps) => {
	const dispatch = useAppDispatch();

	const [maxOptionsValue, setMaxOptionsValue] = useState<number>(0);
	const [resetOptionsValue, setResetOptionsValue] = useState<number>(0);

	useEffect(()=>{
		setMaxOptionsValue(maxValue)
	},[maxValue])
	useEffect(()=>{
		setResetOptionsValue(resetValue)
	},[resetValue])


	const onChangeMaxValueHandler = (_: Event, newValue: number | number[]) =>
		setMaxOptionsValue(newValue as number);
// _ показывает что параметр намеренно не используется
	const onChangeStartValueHandler = (_: Event, newValue: number | number[]) =>
		setResetOptionsValue(newValue as number);

	const onCLickSaveHandler = () => {
		OptionsSaved(maxOptionsValue, resetOptionsValue)
		dispatch(resectAC());
	}

	const checkError = (first: number, second: number) => {
		let isError: boolean = false

		if (first >= second) {
			isError = false
		}

		if (first < second) {
			isError = true
		}
		return isError
	}

	return (
		<StyledCounterOptions>
			<Stack>
				<div>
					<span>Max value</span>
					<StyledSlider defaultValue={0} aria-label="Default" valueLabelDisplay="auto" value={maxOptionsValue} onChange={onChangeMaxValueHandler}/>
				</div>
				<div>
					<span>Reset value</span>
					{checkError(maxOptionsValue, resetOptionsValue) && <span style={{marginLeft: "5px", color: "red", fontSize: "small"}}>Так разве бывает -_- ?</span>}
					<Stack direction="row" spacing={1}>
						<StyledSlider defaultValue={0} aria-label="Default" valueLabelDisplay="auto" value={resetOptionsValue} onChange={onChangeStartValueHandler}/>
					</Stack>
				</div>
			</Stack>

			<Button variant="contained" onClick={onCLickSaveHandler} disabled={checkError(maxOptionsValue, resetOptionsValue)}>Save</Button>
		</StyledCounterOptions>
	);
};

const StyledCounterOptions = styled.div`
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${theme.colors.accent};
  outline: ${theme.colors.primaryDark} 10px solid;
  color: ${theme.colors.accentLight};
  height: fit-content;
  padding: 60px;
  border-radius: 10px;
  width:500px;
	
  button {
		margin-top: 30px;
	}
	
`

const StyledSlider = styled(Slider)`
  width: 50px;
`