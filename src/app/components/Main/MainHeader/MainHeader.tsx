import React, {FC} from "react";
import {IMainHeader} from "./IMainHeader";
import "./MainHeader.scss";
import {ISortValue} from "../../../types/ISortValue";

export const MainHeader: FC<IMainHeader> = (
    {
        find,
        name,
        numberOfFilms,
        dates,
        changeSortType,
        sortType
    }
) => {
    const onChangeSortType = (sortName: 'year' | 'name') => {
        let value: ISortValue;
        if (sortType[sortName].value === 'asc') {
            value = 'desc';
        } else {
            value = 'asc';
        }
        changeSortType({
            year: {
                value: sortName === "year" ? value : sortType.year.value,
                isActive: sortName === "year",
            },
            name: {
                value: sortName === "name" ? value : sortType.name.value,
                isActive: sortName === "name",
            }
        });
    }

    return <div className="MainHeader">
        <div className="Find">{find}
            <span className="Count">{numberOfFilms}</span>
        </div>
        <div className="Sorting">
            <div className={sortType.name.isActive ? "Name Focus" : "Name"}
                 onClick={() => onChangeSortType('name')}>
                {name}
                <div className="Arrows">
                    <div className={sortType.name.value === 'asc' ? "Up" : "Down"}>&#8593;</div>
                </div>
            </div>
            <div className={sortType.year.isActive ? "Dates Focus" : "Dates"}
                 onClick={() => onChangeSortType('year')}>
                {dates}
                <div className="Arrows">
                    <div className={sortType.year.value === 'asc' ? "Up" : "Down"}>&#8593;</div>
                </div>
            </div>
        </div>
    </div>
}