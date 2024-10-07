import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import {GlobalStyle} from "./styles/Global.styled";


const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<>
		<GlobalStyle/>
		<App/>
	</>
);

reportWebVitals();
