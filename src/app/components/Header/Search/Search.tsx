import React, {FC, useState} from "react";
import {ISearch} from "./ISearch";
import "./Search.scss";
import {RadioBox} from "../RadioBox/RadioBox";
import {Dictionary} from "../../../constants/Dictionary";
import {Button} from "../../Button/Button";

export const Search: FC<ISearch> = ({placeholder, changeFilterType, movieToSearch}) => {

    const [searchText, setsearchText] = useState('');

    const onSearch = () => {
        movieToSearch(searchText);
    }

    return <div className="Search">
        <input
            className="SearchString"
            onChange={(event) => {
                console.log(event)
                setsearchText(event.target.value);
            }}
            type="search"
            placeholder={placeholder}
        />
        <RadioBox name={Dictionary.Name} genre={Dictionary.Genre} changeFilterType={changeFilterType} />
        <Button onClick={onSearch} title={Dictionary.Search} />
    </div>
};
