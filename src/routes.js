import React, {Suspense} from "react";
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";

import App from './App'
import Home from "./pages/Home";

const AppRoutes = ({store}) => (
    <Router >
        <App>
            <Suspense fallback={""}>
                <Switch>
                    <Route path={'/'} component={Home} exact={true}/>
                </Switch>
            </Suspense>
        </App>
    </Router>
);

export default AppRoutes