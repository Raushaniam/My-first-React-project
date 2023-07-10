import React, {FC, useState} from "react";
import {IRadioBox} from "./IRadioBox";
import "./RadioBox.scss";

export type RadioType = ''|'name'|'genre';
export const RadioBox: FC<IRadioBox> = ({name, genre, changeFilterType}) => {
    const [selectedRadioType, setSelectedRadioType] = useState<RadioType>('');
    const onChangeRadio = (radioType: RadioType) => {
        setSelectedRadioType(radioType);
        changeFilterType(radioType);
    }

    return <div className="RadioBox">
        <div className={selectedRadioType === 'name' ? 'ActiveRadioBtn Underlined' : 'Underlined RadioBtn'} onClick={() => onChangeRadio('name')}>{name}</div>
        <div className={selectedRadioType === 'genre' ? 'ActiveRadioBtn' : 'RadioBtn'} onClick={() => onChangeRadio('genre')}>{genre}</div>
    </div>;
}