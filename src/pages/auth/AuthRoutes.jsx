

import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import { Auth } from '../../services/Path';
import { AuthPages } from '../Lazy';

export default function AuthRoutes() {
    return (
        <React.Fragment>
            <Switch>
                <Route path={Auth.register} element={<AuthPages.Register />} />
                <Route path={Auth.login} element={<AuthPages.Login />} />
            </Switch>
        </React.Fragment>
    )
};
