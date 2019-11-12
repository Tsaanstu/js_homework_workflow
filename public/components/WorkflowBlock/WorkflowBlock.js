"use strict";
import React from "react";
import "Components/WorkflowBlock/WorkflowBlock.css"

class WorkflowBlock extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div
                className={"ListBlock"}
            >
                {this.props.inner}
            </div>
        )
    }
}

export default WorkflowBlock;