import React, {FC} from "react";
import "./Navigate.scss";
import {Dictionary} from "../../../constants/Dictionary";
import {INavigate} from "./INavigate";

export const Navigate: FC<INavigate> = () => {
    return <nav className="Navigate">
        <div>{Dictionary.LOGOUT}</div>
    </nav>
}