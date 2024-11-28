import {useState} from 'react';
import {theme} from "../../../styles/theme";
import Stack from '@mui/material/Stack';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import PlusOneIcon from '@mui/icons-material/PlusOne';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import {useAppDispatch} from "../../../common/hooks/useAppDispatch";
import {useAppSelector} from "../../../common/hooks/useAppSelector";
import {setMaxValueAC, setResetValueAC, incrementAC, resectAC} from "../../model/counter-reducer";
import {selectCounterValue, selectMaxValue, selectResetValue} from "../../model/counterSelectors";
import {CounterOptions} from "./CounterOptions/CounterOptions";
import {DisplayCounterValue} from "./DisplayCounterValue/DisplayCounterValue";
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';

const generateRandomMaxValue = (maxValueNow: number) => Math.round(Math.random() * 20) + maxValueNow;

export const Counter = () => {


	const dispatch = useAppDispatch()
	const counterValue = useAppSelector(selectCounterValue)
	const maxValue = useAppSelector(selectMaxValue)
	const resetValue = useAppSelector(selectResetValue)

	const [optionsIsOpen, setOptionsIsOpen] = useState<boolean>(false);

	const switchDisplayOptions = () => {
		setOptionsIsOpen(!optionsIsOpen)
	}

	const OptionsSaved = (max: number, start: number) => {
		dispatch(setMaxValueAC(max))
		switchDisplayOptions()
		dispatch(setResetValueAC(start))
	}

	const isMaxValue = counterValue >= maxValue

	const increase = () => {
		dispatch(incrementAC())
	}

	const reset = () => {
		dispatch(resectAC());
	}

	const setRandomMaxValue = (maxValueNow: number) => {
		dispatch(setMaxValueAC(generateRandomMaxValue(maxValueNow)))
		dispatch(resectAC());
	}

	const disabledIncrease = () => isMaxValue
	const disabledReset = () => counterValue === 0


	return <StyledMainDIv>
		{
			optionsIsOpen
				? <CounterOptions OptionsSaved={OptionsSaved} maxValue={maxValue} resetValue={resetValue}/>
				: <>
					<StyledCounter>
						<StyledHiddenButton
							variant='contained'
							onClick={switchDisplayOptions}
							size="large"
						>
							<StyledSettingsIcon className="icon"/>
						</StyledHiddenButton>
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
						</StyledStack>
					</StyledCounter>
				</>
		}
	</StyledMainDIv>


};

// Стили
export const StyledMainDIv = styled(Box)`
  margin-top: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
	outline: 1px solid red;
`

const StyledCounter = styled.div`
  position: relative; /* Это важно */
  background-color: ${theme.colors.accent};
  font-size: 3rem;
  display: flex;
  flex-direction: column;
  outline: ${theme.colors.primaryDark} 10px solid;
  height: fit-content;
  padding: 60px;
  border-radius: 10px;
  width:500px;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`

const StyledButton = styled(Button)`
  color: ${theme.colors.accentLight};
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


const StyledHiddenButton = styled(Button)`
  position: absolute;
  top: 4%;
  right: 1%;
  background-color: ${theme.colors.accent};
  color: ${theme.colors.accentLight};
  border-radius: 10%;
  padding: 10px;
	box-shadow: none;
  &:hover {
    .icon {transform: rotate(150deg);}
    background-color: ${theme.colors.accent};
    box-shadow: none;
  }
`;

const StyledSettingsIcon = styled(SettingsTwoToneIcon)`
  display: block;
  transition: transform 0.4s ease-in-out; /* Плавный возврат */
  transform: rotate(0deg); /* Начальное положение */
`;
