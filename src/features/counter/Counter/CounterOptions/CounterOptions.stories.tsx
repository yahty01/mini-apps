import { CounterOptions }  from './CounterOptions';
import {useRef, useState} from "react";

export default {
	component: CounterOptions,
}


export const CounterAllView = () => {
	const [maxValue, setMaxValue] = useState<number>(100);
	const resetValue = useRef<number>(0);

	const OptionsSaved = (max: number, start: number) => {
		setMaxValue(max)
		resetValue.current = ( start)
	}

	return <CounterOptions
		OptionsSaved={OptionsSaved}
		maxValue={maxValue}/>;
}

