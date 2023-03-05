

import React from 'react'
import { Link } from 'react-router-dom'
import { Providers } from '../../providers'


export default function OptionModal({ isOpen }) {
    const { OptionList } = Providers.useAuth();
    return (
        <div className={isOpen ? "option-modal active" : "option-modal"}>
            <ul>
                {
                    OptionList().map(item => (
                        <li onClick={item.event} key={item.id}>
                            <Link>
                                {item.caption}
                                <item.icon />
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
