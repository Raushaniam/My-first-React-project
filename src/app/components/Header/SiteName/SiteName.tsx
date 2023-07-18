import React, {FC} from "react";
import {ISiteName} from "./ISiteName";
import "./SiteName.scss";

export const SiteName: FC<ISiteName> = ({title}) => {
    return <div className="IconBox">
               <div className="Icon"></div>
               <div className="Name">{title}</div>
           </div>;
}