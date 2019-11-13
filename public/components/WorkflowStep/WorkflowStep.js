import React from "react";
import "Components/WorkflowBlock/WorkflowBlock"
import "Components/WorkflowStep/WorkflowStep.css"
import Button from "Components/Button/Button";

class WorkflowStep extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blocks: [],
        };
        this.state.blocks = this.props.steps.map(block => {
                return (
                    <Button
                        key={block.key}
                        inner={block.inner}
                    />
                )
            }
        );
    }

    render() {
        return (
            <div
                className={"ListBlock"}
            >
                <div
                    className={"ListTitle"}
                >
                    {this.props.title}
                </div>
                <div
                    className={"ListLine"}
                >
                    <hr/>
                </div>
                <div
                    className={"InnerIndent"}
                />
                <div
                    className={"ListDate"}
                >
                    {this.state.blocks}
                </div>
            </div>
        )
    }
}

export default WorkflowStep;