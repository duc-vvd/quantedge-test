import React, { Component } from 'react';
import classNames from 'classnames';
import './Row.css';

export default class TodoItem extends Component {
    render() {
        const { info, isTitle } = this.props;
        return(
            <div>
                <div className="Row">
                    <div className={classNames("code", {"title": isTitle})}>{info.code }</div>
                    <div className={classNames("company", {"title": isTitle})}>{info.company}</div>
                    <div className={classNames("price text-alight-right", {"title": isTitle})}>{info.price }</div>
                    <div className={classNames("value text-alight-right", {"title": isTitle})}>{info.value !== "Value" ? info.value.toLocaleString() : "Value"}</div>
                    <div className={classNames("change text-alight-right",{"green": info.change >= 0 }, {"red": info.change < 0 }, {"title": isTitle})}>{info.change}</div>
                    <div className={classNames("percent-change text-alight-right", {"green": info.change >= 0 },  {"red": info.change < 0 }, {"title": isTitle})}>{info.percentChange}</div>
                </div>
            </div>
        );
    }
}