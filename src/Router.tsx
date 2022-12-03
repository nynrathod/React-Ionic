import React from 'react';
import { Route } from 'react-router-dom';

import { IonRouterOutlet } from '@ionic/react';

import Home from './pages/Home';
import Passwords from './pages/passwords'
import Register from './pages/user/register';
import OtpVerification from './pages/user/otp-verification';
import MasterPassword from './pages/user/master-password';
import Tab1 from 'pages/tab1';


const Router: React.FC = () => {
    return (
        <IonRouterOutlet id="main">
            {/* <Route path="/" exact={true} render={() => <Home pagetitle="Home" />} /> */}
            <Route path="/:tab/password" exact={true} render={() => <Tab1 />} />
            <Route path="/" exact={true} render={() => <Passwords pagetitle="Passwords" />} />
            <Route path="/auth/register" exact={true} render={() => <Register />} />
            <Route path="/auth/master-password" exact={true} render={() => <MasterPassword />} />
            <Route path="/auth/otp-verification" exact={true} render={() => <OtpVerification />} />

            <Route path="/:tab(password)" render={() => <Passwords pagetitle="Passwords" />} exact={true} />

            {/* <Route path="/dashboard" render={props => <DashboardPage {...props} />} />
            <Route exact path="/" render={() => <Redirect to="/dashboard" />} /> */}

        </IonRouterOutlet>

    );
};

export default Router;