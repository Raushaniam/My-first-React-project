import React, {FC} from "react";
import {IFooter} from "./IFooter";
import './Footer.scss';

export const Footer:FC<IFooter> = ({authorName}) => {
    return <div className="Footer">{authorName}</div>
}