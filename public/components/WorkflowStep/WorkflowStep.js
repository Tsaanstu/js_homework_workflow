import React from "react";
import "Components/WorkflowBlock/WorkflowBlock"
import "Components/WorkflowStep/WorkflowStep.css"
import Button from "Components/Button/Button";
import TextArea from "Components/TextArea/TextArea"

class WorkflowStep extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blocks: [],
        };
        let index = 0;
        this.state.blocks = this.props.steps.map((block, index) => {
                index += 1;
                console.log(`1) wtf ${this.props.changed} ${index - 1}`);
                if ((index - 1) !== this.props.changed) {
                    return (
                        <Button
                            key={Math.random()}
                            inner={block.inner}
                            eventListener={() => {
                                this.props.changeStep(this.props.index, index - 1)
                            }}
                        />
                    )
                }
                console.log("2) wtf");
                return (
                    <TextArea
                        key={Math.random()}
                        type={"step"}
                        onChange={() => {
                        }}
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
                        eventListener={() => {
                            this.props.eventListener(this.props.index)
                        }}
                        type={"send"}
                        inner={"Перевести верхнюю задачу на следующую стадию"}
                    />
                </div>
            </div>
        )
    }
}

export default WorkflowStep;