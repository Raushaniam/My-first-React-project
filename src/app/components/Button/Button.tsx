import React, {FC} from "react";
import {IButton} from "./IButton";
import "./Button.scss";

export const Button: FC<IButton> = ({title, onClick, disabled}) => {
    return <button disabled={disabled} onClick={onClick}>{title}</button>
}