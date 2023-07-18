import React, {FC} from "react";
import {IButton} from "./IButton";
import "./Button.scss";

export const Button:FC <IButton> = ({title, onClick}) => {
    return <button onClick={onClick}>{title}</button>
}