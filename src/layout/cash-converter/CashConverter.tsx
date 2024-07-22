// @flow
import * as React from 'react';
import styled from "styled-components";
import {StyledMainDIv} from "../counter/Counter";

type Props = {

};
export const CashConverter = (props: Props) => {
	return (
		<MainDiv>
			<h1>Cash Converter</h1>
			<div>
				
			</div>
		</MainDiv>
	);
};

const MainDiv = styled(StyledMainDIv)`

`

// const StyledButton = styled()`
//   background-color: ${props => (props.disabled ? "grey" : "blue")};
//   color: white;
//   border: none;
//   padding: 10px 20px;
//   cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
//   opacity: ${props => (props.disabled ? 0.6 : 1)};
//   border-radius: 10px;
//   margin: 5px;
//   font-weight: bold;
//   letter-spacing: 2px;
//
//   &:hover {
//     background-color: ${props => (props.disabled ? "grey" : "darkblue")};
//   }
// `;
