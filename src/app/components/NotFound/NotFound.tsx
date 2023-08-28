import React, {FC} from "react";
import {INotFound} from "./INotFound";
import "./NotFound.scss";
import {Button} from "../Button/Button";
import {Dictionary} from "../../constants/Dictionary";
import {useNavigate} from "react-router";
import {routes} from "../../constants/routes";
import {useSelector} from "react-redux";
import {IStore} from "../../types/IStore";

export const NotFound: FC<INotFound> = () => {
    const navigate = useNavigate();
    const authToken = useSelector((state: IStore) => {
        return state.authToken;
    })
    const toHomepage = () => {
        if (authToken) {
            navigate(routes.HOME)
        } else {
            navigate(routes.LOGIN)
        }
    }

    return <div className="NotFound">
        <div className="Wrapper">
            <h1>{Dictionary.ERROR}</h1>
            <div>{Dictionary.SORRY}</div>
            <Button onClick={toHomepage} title={Dictionary.HOMEPAGE}/>
        </div>
    </div>
}