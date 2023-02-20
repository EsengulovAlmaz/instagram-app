


import React from 'react';
import { useForm } from 'react-hook-form';
import { Components } from '../../../components';
import cls from "../../../assets/styles/register/Register.module.scss";
import Logo from "../../../assets/images/logo/insta.png"
import { Link } from 'react-router-dom';
import { formsValidate } from '../../../helpers/form';
import { REQUEST } from '../../../api';
import { Hooks } from '../../../hooks';
import { AuthPath } from '../../../services/Path';

export default function Register() {
    const { goToLogin } = Hooks.useLocations();

    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm(
        {
            mode: "onBlur"
        }
    );


    const onSubmit = (data) => {

        const newData = {
            ...data,
            avatar: null
        }

        if (data) {
            const request = REQUEST.CREATE_USER(newData);

            request
                .then(() => {
                    goToLogin()
                })
        }
    };

    return (
        <Components.Container>
            <section className={cls.register_page}>
                <div className={cls.register_page_card} data-aos="zoom-in-down">
                    <Components.Image src={Logo} />
                    <h3>Sign up to see photos and videos from your friends.</h3>

                    <form onSubmit={handleSubmit(onSubmit)} >
                        <Components.Forms.Divider>
                            <Components.Forms.TextInput
                                type="text"
                                err={errors}
                                placeholder="Username"
                                {...register("username", formsValidate())}
                            />
                            <Components.Forms.Errors err={errors?.username ? "err" : "success"} />
                        </Components.Forms.Divider>
                        <Components.Forms.Divider>
                            <Components.Forms.TextInput
                                type="text"
                                err={errors}
                                placeholder="First name"
                                {...register("first_name", formsValidate())}
                            />
                            <Components.Forms.Errors err={errors?.first_name ? "err" : "success"} />
                        </Components.Forms.Divider>
                        <Components.Forms.Divider>
                            <Components.Forms.TextInput
                                type="text"
                                err={errors}
                                placeholder="Last name"
                                {...register("last_name", formsValidate())}
                            />
                            <Components.Forms.Errors err={errors?.last_name ? "err" : "success"} />
                        </Components.Forms.Divider>
                        <Components.Forms.Divider>
                            <Components.Forms.TextInput
                                type="text"
                                err={errors}
                                placeholder="Bio"
                                {...register("bio", formsValidate())}
                            />
                            <Components.Forms.Errors err={errors?.bio ? "err" : "success"} />
                        </Components.Forms.Divider>
                        <Components.Forms.Divider>
                            <Components.Forms.TextInput
                                type="email"
                                err={errors}
                                placeholder="Email"
                                {...register("email", formsValidate())}
                            />
                            <Components.Forms.Errors err={errors?.email ? "err" : "success"} />
                        </Components.Forms.Divider>
                        <Components.Forms.Divider>
                            <Components.Forms.TextInput
                                type="password"
                                err={errors}
                                placeholder="Password"
                                {...register("password", formsValidate())}
                            />
                            <Components.Forms.Errors err={errors?.password ? "err" : "success"} />
                        </Components.Forms.Divider>
                        <Components.Forms.Divider>
                            <Components.Forms.TextInput
                                type="password"
                                err={errors}
                                placeholder="Password Repeat"
                                {...register("password_repeat", formsValidate())}
                            />
                            <Components.Forms.Errors err={errors?.password_repeat ? "err" : "success"} />
                        </Components.Forms.Divider>
                        <Components.Forms.Divider>
                            <Components.Forms.TextInput
                                type="file"
                                err={errors}
                                {...register("avatar", formsValidate())}
                            />
                            <Components.Forms.Errors err={errors?.avatar ? "err" : "success"} />
                        </Components.Forms.Divider>
                        <p className={cls.usable_service}>
                            People who use our service may have uploaded your contact information to Instagram.
                            <a href="https://www.facebook.com/help/instagram/261704639352628">Learn More</a>
                        </p>

                        <Components.Forms.Divider>
                            <Components.Forms.AuthSubmit location={"Sign up"} />
                        </Components.Forms.Divider>
                    </form>
                </div>

                <Components.Forms.AuthNavigate location="register"/>
            </section>
        </Components.Container>
    )
};
