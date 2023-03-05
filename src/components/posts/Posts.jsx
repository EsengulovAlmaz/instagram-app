

import React from 'react';
import { Components } from '..';
import { REQUEST } from '../../api';

import cls from "../../assets/styles/posts/Posts.module.scss";
import { Providers } from '../../providers';
import PostsCard from './PostsCard';

export default function Posts() {
    const [post, setPost] = React.useState(null);
    const [userPost, setUserPost] = React.useState([]);
    const { users } = Providers.useAuth();

    React.useEffect(() => {
        const request = REQUEST.GET_ALL_POSTS();


        request
            .then(res => {
                const data = res.data;

                setPost(data);
            })
    }, []);

    const uniquePosts = [...new Set(userPost)];

    React.useEffect(() => {
        post?.forEach(p => {
            users?.forEach(user => {
                if (user.id === p.user) {
                    setUserPost(prev => {
                        return [
                            ...prev,
                            {
                                avatar: user?.avatar,
                                userID: user?.id,
                                username: user?.username,
                                post: p
                            }
                        ]
                    })
                }
            })
        })
    }, [post, users])

    return (
        <section className={cls.posts_wrapper}>
            <div className={cls.posts_wrapper_inline}>
                {post?.length === 0 && <p>Empty</p>}

                {!post && <Components.Loader fullHeight={"50vh"} />}

                {uniquePosts?.map(item => <PostsCard base={item} />)}
            </div>
        </section>
    )
}
