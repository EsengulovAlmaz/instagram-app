
import React from 'react';
import { Components } from '..';

import cls from "../../assets/styles/sidebar/Sidebar.module.scss";
import Logo from "../../assets/images/logo/insta.png"
import { Link, NavLink } from 'react-router-dom';
import { SidebarList } from '../../utils/List';


export default function Sidebar() {
    const bottomList = SidebarList[5];
    return (
        <section className={cls.sidebar_wrapper}>
            <div className={cls.sidebar_wrapper_content}>
                <Components.Image src={Logo} />

                <section className={cls.sidebar_wrapper_content_list}>
                    <ul>
                        {SidebarList.slice(0, 5).map(item => (
                            <li key={item.id}>
                                <NavLink>
                                    <item.icon />
                                    {item.caption}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <ul>
                        <li>
                            <Link>
                                <bottomList.icon />
                                {bottomList.caption}
                            </Link>
                        </li>
                    </ul>
                </section>
            </div>
        </section>
    )
};
