import React from "react";
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";

import App from './App'
import ScrollToTopOnMount from "./components/core/Router/ScrollToTopOnMount";
import {MainLayout, AdminLayout} from "./components/Layouts";

import Home from "./pages/Main/Home";
import Privacy from "./pages/Main/Privacy";
import Pricing from "./pages/Main/Pricing";
import Profile from "./pages/Main/Profile";
import ForgotPassword from "./pages/Authentication/ForgotPassword";
import Signup from "./pages/Authentication/Signup";
import Signin from "./pages/Authentication/Signin";
import AllMovies from "./pages/Main/AllMovies";
import MovieDetails from "./pages/Main/MovieDetails";
import TVSeriesDetails from "./pages/Main/TVSeriesDetails";
import FAQ from "./pages/Main/FAQ";
import Contacts from "./pages/Main/Contacts";
import About from "./pages/Main/About";
import Error from "./pages/Main/Error";
import Dashboard from "./pages/Admin/Dashboard";
import Catalog from "./pages/Admin/Catalog";
import Reviews from "./pages/Admin/Reviews";
import Comments from "./pages/Admin/Comments";
import Users from "./pages/Admin/Users";
import AddMovie from "./pages/Admin/AddMovie";
import Test from "./pages/Test";


const mainRoutes = [
    {path: '/', exact: true, component: Home},
    {path: '/privacy', exact: true, component: Privacy},
    {path: '/pricing', exact: true, component: Pricing},
    {path: '/user/profile/:section', exact: true, component: Profile},
    {path: '/auth/forgot-password', exact: true, component: ForgotPassword, layout: false},
    {path: '/auth/signup', exact: true, component: Signup, layout: false},
    {path: '/auth/signin', exact: true, component: Signin, layout: false},
    {path: '/movies', exact: true, component: AllMovies},
    {path: '/movies/:id', exact: true, component: MovieDetails},
    {path: '/tv-series/:id', exact: true, component: TVSeriesDetails},
    {path: '/about', exact: true, component: About},
    {path: '/contacts', exact: true, component: Contacts},
    {path: '/faq', exact: true, component: FAQ},
];

const adminRoutes = [
    {path: '/admin/dashboard', exact: true, component: Dashboard},
    {path: '/admin/catalog', exact: true, component: Catalog},
    {path: '/admin/comments', exact: true, component: Comments},
    {path: '/admin/users', exact: true, component: Users},
    {path: '/admin/reviews', exact: true, component: Reviews},
    {path: '/admin/movie/add', exact: true, component: AddMovie},
    {path: '/admin/user/edit/:id', exact: true, component: AddMovie},
];


const AppRoutes = ({store}) => (
    <Router>
        <App>
            <Switch>
                {mainRoutes.map((route, key) => (
                    <Route
                        key={key}
                        path={route.path}
                        component={
                            typeof route.layout === "undefined"
                                ? MainLayout(ScrollToTopOnMount(route.component))
                                : ScrollToTopOnMount(route.component)
                        }
                        exact={route.exact}
                    />
                ))}
                {adminRoutes.map((route, key) => (
                    <Route
                        key={key}
                        path={route.path}
                        component={AdminLayout(ScrollToTopOnMount(route.component))}
                        exact={route.exact}
                    />
                ))}
                <Route path={'/test'} component={Test}/>
                <Route component={Error}/>
            </Switch>
        </App>
    </Router>
);

export default AppRoutes
