

import React from 'react'
import { Route, Routes as Switch } from 'react-router-dom'
import { Layout } from '../../services/Path'
import { LayoutPages } from '../Lazy'

export default function LayoutRoutes() {
    return (
        <React.Fragment>
            <Switch>
                <Route path={Layout.home} element={<LayoutPages.Home />} />
            </Switch>
        </React.Fragment>
    )
}
