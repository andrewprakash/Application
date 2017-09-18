import React from 'react';
import ReactDOM from 'react-dom'
import {render} from 'react-dom';
import { Provider } from "react-redux";
import {HashRouter} from 'react-router-dom';
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import promise from "redux-promise-middleware";
import logger from 'redux-logger';

import reducers from "./reducers"

import routes from "./routes"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk,promise()]

const middleware = composeEnhancers(applyMiddleware(...middlewares));

const store = createStore(reducers, middleware)

const App = (
    <Provider store={store}>
        <HashRouter>
            {routes}
        </HashRouter>
    </Provider>
)

render(App, document.getElementById("app"))
// export default App