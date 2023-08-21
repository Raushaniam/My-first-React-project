import React, {ChangeEvent, FC, useEffect, useState} from "react";
import {ILogin} from "./ILogin";
import "./Login.scss";
import {Dictionary} from "../../constants/Dictionary";
import {Button} from "../Button/Button";
import {SiteName} from "../Header/SiteName/SiteName";
import {useNavigate} from "react-router";
import {routes} from "../../constants/routes";
import {useDispatch, useSelector} from "react-redux";
import {IStore} from "../../types/IStore";
import {IUserLoginData} from "../../types/IUserLoginData";
import {loginUser} from "../../../store/thunks/loginUser";

export const Login: FC<ILogin> = () => {
    const navigate = useNavigate();

    const onRegister = () => {
        navigate(routes.REGISTER);
    }

    const isLoggedIn = useSelector((state: IStore) => {
        return state.isLoggedIn;
    })

    const [state, setState] = useState<IUserLoginData>({
        email: '',
        password: ''
    });

    const dispatch = useDispatch<any>();

    const onLogin = () => {
        dispatch(loginUser(state));
    }

    const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setState((prevState) => {
            return {
                ...prevState,
                email: event.target.value
            }
        })
    }

    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setState((prevState) => {
            return {
                ...prevState,
                password: event.target.value
            }
        })
    }


    useEffect(() => {
        if (isLoggedIn) {
            navigate(routes.HOME);
        }
    }, [isLoggedIn])

    const isDisabledButton = !state.email && !state.password;

    return <div className="AuthorizationForm">
        <SiteName title={Dictionary.MovieVan}/>
        <div className="Login">
            <div className="Wrapper">
                <div>{Dictionary.MAIL}:</div>
                <input onChange={onChangeEmail} className="Mail"/>

            </div>
            <div className="Wrapper">
                <div>{Dictionary.PASSWORD}:</div>
                <input onChange={onChangePassword} className="Password"/>
            </div>
            <Button disabled={isDisabledButton} onClick={onLogin} title={Dictionary.LOGIN}/>
            <div className="Register">{Dictionary.UNREGISTERED}
                <span onClick={onRegister}> {Dictionary.REGISTER_HERE}</span>
            </div>
        </div>
    </div>
}