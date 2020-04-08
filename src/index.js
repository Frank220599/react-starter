import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import {Provider} from "react-redux";
import {configure as configureStore} from "./store";
import AppRoutes from "./routes";

const store = configureStore();

const rootElement = document.getElementById('root');

const render = Component => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <Component {...{store}}/>
            </Provider>
        </React.StrictMode>,
        rootElement
    )
};

render(AppRoutes);


if(module.hot){
    module.hot.accept("./routes", () => {
        const NextApp = require("./routes").default;
        render(NextApp);
    });
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
