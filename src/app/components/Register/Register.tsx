import React, {ChangeEvent, FC, useEffect, useState} from "react";
import {IRegister} from "./IRegister";
import "./Register.scss";
import {SiteName} from "../Header/SiteName/SiteName";
import {Dictionary} from "../../constants/Dictionary";
import {Button} from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {registerUser} from "../../../store/thunks/registerUser";
import {IUserRegistrationData} from "../../types/IUserRegistrationData";
import {useNavigate} from "react-router";
import {routes} from "../../constants/routes";
import {IStore} from "../../types/IStore";

export const Register: FC<IRegister> = () => {

    const [state, setState] = useState<IUserRegistrationData>({
        email: '',
        firstname: '',
        lastname: '',
        age: 0,
        password: ''
    });

    const isLoggedIn = useSelector((state: IStore) => {
        return state.isLoggedIn;
    })

    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) {
            navigate(routes.HOME);
        }
    }, [isLoggedIn])

    const dispatch = useDispatch<any>();

    const onRegister = () => {
        dispatch(registerUser(state));
    }

    const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setState((prevState) => {
            return {
                ...prevState,
                email: event.target.value
            }
        })
    }

    const onChangeFirstName = (event: ChangeEvent<HTMLInputElement>) => {
        setState((prevState) => {
            return {
                ...prevState,
                firstname: event.target.value
            }
        })
    }

    const onChangeLastName = (event: ChangeEvent<HTMLInputElement>) => {
        setState((prevState) => {
            return {
                ...prevState,
                lastname: event.target.value
            }
        })
    }

    const onChangeAge = (event: ChangeEvent<HTMLInputElement>) => {
        setState((prevState) => {
            return {
                ...prevState,
                age: Number(event.target.value)
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

    const isDisabledButton = !state.firstname && !state.lastname && !state.email && !state.age && !state.password;


    return <div className="RegistrationForm">
        <SiteName title={Dictionary.MovieVan}/>
        <div className="Register">
            <div className="Wrapper">
                <div>{Dictionary.MAIL}:</div>
                <input onChange={onChangeEmail} className="Mail"/>

            </div>
            <div className="Wrapper">
                <div className="Title">{Dictionary.FIRST_NAME}:</div>
                <input onChange={onChangeFirstName} className="FirstName"/>

            </div>
            <div className="Wrapper">
                <div className="Title">{Dictionary.LAST_NAME}:</div>
                <input onChange={onChangeLastName} className="LastName"/>

            </div>
            <div className="Wrapper">
                <div>{Dictionary.AGE}:</div>
                <input onChange={onChangeAge} className="Age"/>

            </div>
            <div className="Wrapper">
                <div>{Dictionary.PASSWORD}:</div>
                <input onChange={onChangePassword} className="Password"/>
            </div>
            <Button disabled={isDisabledButton}
                    title={Dictionary.REGISTER} onClick={onRegister}/>
        </div>
    </div>
}