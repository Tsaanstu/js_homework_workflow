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
        let typeRender = "button";
        switch (this.type) {
            case "send":
                typeRender += " buttonSend";
                break;
            case "changeOk":
                typeRender += " changeOk";
                break;
            case "default":
                typeRender += " buttonDefault";
                break;
        }
        return (
            <div id={this.state.id} onClick={this.state.onBtnClick} className={typeRender}>
                {this.state.inner}
            </div>
        )
    }
}

export default Button;