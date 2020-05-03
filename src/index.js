import * as serviceWorker from './serviceWorker';
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

import {configureStore} from "./store";
import AppRoutes from "./routes";

import "./assets/styles/impots.scss"

const store = configureStore({});


const render = (Component) => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <Component {...{store}} />
            </Provider>
        </React.StrictMode>,
        document.getElementById("root")
    );
};

render(AppRoutes);


if (module.hot) {
    module.hot.accept("./routes", () => {
        const NextApp = require("./routes").default;
        render(NextApp);
    });
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
