import React, {FC} from "react";
import {IRadioBox} from "./IRadioBox";
import "./RadioBox.scss";

export const RadioBox:FC <IRadioBox> = () => {
     return <div className="RadioBox">
         <label className="RadioBtn" htmlFor="title"><input id="title" type="radio"/>title</label>
         <label htmlFor="genre"><input id="genre" type="radio"/>genre</label>
     </div>;
}