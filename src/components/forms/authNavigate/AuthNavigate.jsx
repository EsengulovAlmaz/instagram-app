
import React from 'react';
import { Link } from 'react-router-dom';
import { AuthPath } from '../../../services/Path';
import cls from "../../../assets/styles/forms/Forms.module.scss";

export default function AuthNavigate({ location }) {
    return (
        <div className={cls.auth_page_bottomCard}>
            <p>
                {location === "register"
                    ? "Have an account?"
                    : "Don't have an account? "
                }
                <Link to={location === "register"
                    ? AuthPath.login
                    : AuthPath.register
                }>
                    {
                        location === "register"
                            ? "Log in"
                            : "Sign up"
                    }
                </Link>
            </p>
        </div>
    )
};
