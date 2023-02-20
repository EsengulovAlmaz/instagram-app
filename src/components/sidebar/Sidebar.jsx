
import React from 'react';
import { Components } from '..';

import cls from "../../assets/styles/sidebar/Sidebar.module.scss";
import Logo from "../../assets/images/logo/insta.png"


export default function Sidebar() {
    return (
        <section className={cls.sidebar_wrapper}>
            <div className={cls.sidebar_wrapper_content}>
                <Components.Image src={Logo} />
            </div>
        </section>
    )
};
