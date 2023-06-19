import React, {Component} from "react";
import {IFooter} from "./IFooter";
import './Footer.scss';
import {Footer} from './Footer'

export class FooterContainer extends Component<IFooter, any> {

    render() {
        const {authorName} = this.props;
        return <Footer authorName={authorName}/>;
    }
}