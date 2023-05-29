import React, {FC} from "react";
import {IHeader} from "./IHeader";
import "./Header.scss";
import {SiteName} from "./SiteName/SiteName";

export const Header: FC<IHeader> = ({title}) => {

    return <div className="Header">
        <SiteName title={title} />
    </div>;
};