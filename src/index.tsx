import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import {GlobalStyle} from "./styles/Global.styled";
import {Provider} from "react-redux";
import {store} from "./app/store";


const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(

	<Provider store={store}>
		<GlobalStyle/>
		<App/>
	</Provider>
);

reportWebVitals();
