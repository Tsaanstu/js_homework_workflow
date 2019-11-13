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
                <hr/>
                <div
                    className={"ListDate"}
                >
                    {this.state.blocks}
                </div>
                <div
                    style={{
                        position: "fixed"
                    }}
                >
                    <Button
                        eventListener={() => {this.props.eventListener(this.props.index)}}
                        type={"send"}
                        inner={"Перевести верхнюю задачу на следующую стадию"}
                    />
                </div>
            </div>
        )
    }
}

export default WorkflowStep;