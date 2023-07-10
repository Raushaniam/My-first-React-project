import React, {FC, useState} from "react";
import {IMainHeader} from "./IMainHeader";
import "./MainHeader.scss";

export const MainHeader: FC<IMainHeader> = (
    {
        find,
        sorting,
        name,
        genre,
        filterType,
        numberOfFilms,
        onClickDate,
        date
    }
) => {
    return <div className="MainHeader">
        <div className="Find">{find}
            <span className="Count">{numberOfFilms}</span>
        </div>
        <div className="Sorting">{sorting}
            <div className={filterType === 'name' ? "Name Focus" : "Name"}>{name}</div>
            <div className={filterType === 'genre' ? "Genre Focus" : "Genre"}>{genre}</div>
            <div className="Dates">
                <div className={date === 1998 ? "Date Focus" : "Date"} onClick={() => onClickDate(1998)}>1998</div>
                <div className={date === 2014 ? "Date Focus" : "Date"} onClick={() => onClickDate(2014)}>2014</div>
                <div className={date === 2021 ? "Date Focus" : "Date"} onClick={() => onClickDate(2021)}>2021</div>
                <div className={date === 2022 ? "Date Focus" : "Date"} onClick={() => onClickDate(2022)}>2022</div>
                <div className={date === 2023 ? "Date Focus" : "Date"} onClick={() => onClickDate(2023)}>2023</div>
            </div>
        </div>
    </div>
}