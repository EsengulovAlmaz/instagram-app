
import React from 'react';
import { Providers } from '../../../providers';
import { Components } from '../../../components';

import NoneAvatar from "../../../assets/images/profile/NoneAvatar.jpg";
import cls from "../../../assets/styles/profile/Profile.module.scss";
import { Link, useParams } from 'react-router-dom';
import { Layout } from '../../../services/Path';

export default function Profile() {
    const { user, users } = Providers.useAuth();
    const { id } = useParams();
    const [currentUser, setCurrentUser] = React.useState(null);
    const [avatar, setAvatar] = React.useState("");

    React.useEffect(() => {
        if (id) {
            const findUser = users?.find(item => item.id === parseInt(id));
            setCurrentUser(findUser)
        } else {
            setCurrentUser(user);
        }
    }, [id, user, users])


    React.useEffect(() => {
        if (!currentUser?.avatar) {
            setAvatar(NoneAvatar)
        } else {
            setAvatar(currentUser?.avatar)
        }
    }, [currentUser]);

    if (!currentUser) return <Components.Loader fullHeight={"50vh"} />

    function renderProfileButton() {
        if (parseInt(id) === user?.id || id === undefined) {
            return <button>Edit profile</button>
        } else {
            return <button className={cls.profile_follow}>Follow</button>
        }
    }

    function renderLinkSubs(mode) {
        if (id) {
            if (mode === "followers") {
                return `subs/followers/${id}`
            } else {
                return `subs/following/${id}`
            }
        } else {
            if (mode === "followers") {
                return `subs/followers/${user?.id}`
            } else {
                return `subs/following/${user?.id}`
            }
        }
    }

    return (
        <Components.Container>
            <section className={cls.profile_wrapper}>
                <section className={cls.profile_wrapper_top}>
                    <div>
                        <label htmlFor='file'>
                            <Components.Image src={avatar} />
                            <input type={"file"} id="file" />
                        </label>
                    </div>
                    <div>
                        <section className={cls.profile_wrapper_top_name}>
                            <h3>{currentUser?.first_name} {currentUser?.last_name}</h3>
                            {renderProfileButton()}
                        </section>
                        <section className={cls.profile_wrapper_top_follow}>
                            <ul>
                                <li>
                                    0 posts
                                </li>
                                <li>
                                    <Link to={renderLinkSubs("followers")}>
                                        {currentUser?.subscribers} followers
                                    </Link>
                                </li>
                                <li>
                                    <Link to={renderLinkSubs("following")}>
                                        {currentUser?.subscriptions} following
                                    </Link>
                                </li>
                            </ul>
                        </section>
                        <section className={cls.profile_wrapper_top_bio}>
                            <p>
                                {currentUser?.bio}
                            </p>
                        </section>
                        <section className={cls.profile_wrapper_top_login}>
                            <h4>{currentUser?.username}</h4>
                        </section>
                    </div>
                </section>
                <section className={cls.profile_wrapper_bottom}>

                </section>
            </section>
        </Components.Container>
    )
}
