import React, { Component } from 'react';
import classNames from 'classnames';
import './Header.css';

export default class TodoItem extends Component {
    render() {
        const {onTopGainersClicked, onTopLosersClicked, topGainers, topLosers} = this.props;
        debugger;
        return(
            <div className="Header">
                <div>S&P/ASX</div>
                <div className={classNames("btn-header", {"active-btn": topGainers})} onClick={onTopGainersClicked}>TOP GAINERS</div>
                <div className={classNames("btn-header", {"active-btn": topLosers})} onClick={onTopLosersClicked}>TOP LOSERS</div>
            </div>
        );
    }
}