import React, {FC} from "react";
import {IHeaderMain} from "./IHeaderMain";
import "./HeaderMain.scss";


export const HeaderMain:FC<IHeaderMain> =({find, sorting, name}) => {
    return <div className="HeaderMain">
        <div className="Find">{find}</div>
        <div className="Sorting">{sorting}
        <div className="Name">{name}</div>
        <div className="Dates">
            <div className="Date">1998</div>
            <div className="Date">2014</div>
            <div className="Date">2021</div>
            <div className="Date">2022</div>
            <div className="Date">2023</div>
        </div>
        </div>
    </div>;
}