

import React from 'react';
import { Components } from '..';
import cls from "../../assets/styles/posts/Posts.module.scss";

import NoneAvatar from "../../assets/images/profile/NoneAvatar.jpg";
import NoneImage from "../../assets/images/posts/postCard.jpg";

import { AiOutlineHeart } from "react-icons/ai";
import { BiMessage } from "react-icons/bi";
import { CiSaveDown2 } from "react-icons/ci";

export default function PostsCard({ base }) {
    const [avatar, setAvatar] = React.useState("");
    const [image, setImage] = React.useState();

    React.useEffect(() => {
        if (!base?.avatar) {
            setAvatar(NoneAvatar)
        } else {
            setAvatar(base?.avatar)
        }

        if (base?.post?.post_images?.length === 0) {
            setImage(NoneImage);
        } else {
            setImage(base?.post?.post_images[0]?.image);
        }
    }, [base]);

    const renderLike = () =>
        base?.post?.liked.length === 0
            ? 0
            : base?.post?.liked.length


    return (
        <div className={cls.posts_card}>
            <div className={cls.posts_card_head}>
                <div className={cls.posts_card_head_inline}>
                    <div>
                        <Components.Image src={avatar} />
                    </div>
                    <div>
                        <h4>{base?.username}</h4>
                    </div>
                </div>
            </div>
            <div className={cls.posts_card_body}>
                <Components.Image src={image} />
            </div>
            <div className={cls.posts_card_foot}>
                <div className={cls.posts_card_foot_inline}>
                    <div>
                        <AiOutlineHeart />
                        <BiMessage />
                    </div>
                    <div>
                        <CiSaveDown2 />
                    </div>
                </div>
                <div className={cls.posts_card_foot_likes}>
                    <p>{renderLike()} отметок "Нравится"</p>
                </div>
                <div className={cls.posts_card_foot_title}>
                    <div>
                        <h4>{base?.username}</h4> <p>{base?.post?.title}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};
