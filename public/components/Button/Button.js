'use strict';

import React from "react";
import 'Components/Button/Button.css';

const noneEL = () => {
};

class Button extends React.Component {
    constructor({
                    inner = "",
                    type = "default",
                    eventListener = noneEL,
                    id = "",
                    meta = "",
                } = {}) {
        super();
        this.type = type;
        this.state = {
            inner: inner,
            id: id,
            onBtnClick: eventListener,
        };
    }

    render() {
        return (
            <div id={this.state.id} onClick={this.state.onBtnClick} className={"button buttonDefault"}>
                {this.state.inner}
            </div>
        )
    }
}

export default Button;