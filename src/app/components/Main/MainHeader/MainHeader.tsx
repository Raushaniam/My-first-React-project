import React, {FC} from "react";
import {IMainHeader} from "./IMainHeader";
import "./MainHeader.scss";

export const MainHeader: FC<IMainHeader> = (
    {find, sorting, name, genre, filterType, numberOfFilms}
) => {
    return <div className="MainHeader">
        <div className="Find">{find}
            <span className="Count">{numberOfFilms}</span>
        </div>
        <div className="Sorting">{sorting}
            <div className="Name">{name}</div>
            <div className="Genre">{genre}</div>
            <div className="Dates">
                <div className="Date">1998</div>
                <div className="Date">2014</div>
                <div className="Date">2021</div>
                <div className="Date">2022</div>
                <div className="Date">2023</div>
            </div>
        </div>
    </div>
}