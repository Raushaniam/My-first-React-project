import React, {FC} from "react";
import {INotFound} from "./INotFound";
import "./NotFound.scss";
import {Button} from "../Button/Button";
import {Dictionary} from "../../constants/Dictionary";

export const NotFound:FC<INotFound> = () => {
    return <div className="NotFound">
        <h1>{Dictionary.ERROR}</h1>
        <div>{Dictionary.SORRY}</div>
        <Button title={Dictionary.HOMEPAGE}/>
    </div>
}