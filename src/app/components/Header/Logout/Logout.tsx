import React, {FC} from "react";
import "./Logout.scss";
import {Dictionary} from "../../../constants/Dictionary";
import {ILogout} from "./ILogout";

export const Logout: FC<ILogout> = ({onClick}) => {
    return <div className="Logout" onClick={onClick}>{Dictionary.LOGOUT}</div>

}