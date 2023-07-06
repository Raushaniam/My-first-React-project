import React, {FC} from "react";
import {IHeader} from "./IHeader";
import "./Header.scss";
import {SiteName} from "./SiteName/SiteName";
import {Search} from "./Search/Search";

export const Header: FC<IHeader> = ({title, placeholder, changeFilterType, movieToSearch}) => {
    return <div className="Header">
        <SiteName title={title}/>
        <Search
            placeholder={placeholder}
            changeFilterType={changeFilterType}
            movieToSearch={movieToSearch}
        />
    </div>;
};