

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthPath, Layout } from '../services/Path';

export default function useLocations() {
    const navigate = useNavigate();

    //AUTH FORWARDS
    const goToLogin = React.useCallback(() => navigate(AuthPath.login), [navigate])

    //AUTH FORWARDS
    const goToHome = React.useCallback(() => navigate(Layout.home), [navigate])

    return {
        goToLogin,
        goToHome
    }
};
