import {ButtonHTMLAttributes} from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({name, onClick, className, disabled}: Props) => {
	return (
		<button className={className} onClick={onClick} disabled={disabled}>{name}</button>
	);
};

