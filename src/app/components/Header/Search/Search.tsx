import React, {FC} from "react";
import {ISearch} from "./ISearch";
import "./Search.scss";
import {RadioBox} from "../RadioBox/RadioBox";
import {Dictionary} from "../../../constants/Dictionary";
import {Button} from "../../Button/Button";

export const Search: FC<ISearch> = ({placeholder}) => {
    return <div className="Search">
        <input className="SearchString" type="search" placeholder={placeholder}/>
        <RadioBox name={Dictionary.Name} genre={Dictionary.Genre} />
        <Button title={Dictionary.Search}/>
    </div>
};
