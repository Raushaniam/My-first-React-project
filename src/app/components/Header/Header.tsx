import React, {FC} from "react";
import {IHeader} from "./IHeader";
import './Header.scss';

export const Header: FC<IHeader> = ({title}) => {

    return <div className="Header">{title}</div>;
};