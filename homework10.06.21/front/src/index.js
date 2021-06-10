import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';

import { store } from './redux/store';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>

			<BrowserRouter>
				<Switch>

					<Route exact path="/">
					      <App />
					</Route>

					<Route exact path="/Playlist">
					      <h1>Playlist</h1>
					</Route>


				
				</Switch>

			</BrowserRouter>



		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
