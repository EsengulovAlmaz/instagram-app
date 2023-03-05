

import React from 'react';
import { Components } from '../../../components';
import UserList from './UserList';
import { Providers } from '../../../providers';


import cls from "../../../assets/styles/users/Users.module.scss";
import { REQUEST } from '../../../api';


export default function Users() {
    const { users, user } = Providers.useAuth();
    const [subs, setSubs] = React.useState(null);
    const [newUsers, setNewUsers] = React.useState([]);

    React.useEffect(() => {
        if (user) {
            const request = REQUEST.GET_ALL_SUBSCRIPTIONS(user?.id);

            request
                .then(res => {
                    const data = res.data

                    setSubs(data)
                })
        }
    }, [user])

    React.useEffect(() => {
        subs?.forEach(s => {
            users?.forEach(u => {
                if (s.to_user === u.id) {
                    setNewUsers(
                        [
                            ...users,
                            {
                                ...u,
                                is_subscriptions: true
                            }
                        ]
                    )
                }
            })
        })
    }, [users, subs])

    return (
        <Components.Container>
            <section className={cls.users_wrapper}>
                <div className={cls.users_wrapper_content}>
                    <h4>Recommendations</h4>

                    <div className={cls.users_wrapper_content_usersInline}>
                        {(!users && newUsers.length === 0) && <Components.Loader fullHeight={"50vh"} />}

                        {newUsers?.map(item => <UserList base={item} />)}
                    </div>
                </div>
            </section>
        </Components.Container>
    )
}
