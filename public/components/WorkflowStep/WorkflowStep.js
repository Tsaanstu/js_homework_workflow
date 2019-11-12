import React from "react";
import "Components/WorkflowBlock/WorkflowBlock"
import "Components/WorkflowStep/WorkflowStep.css"
import Button from "Components/Button/Button";

class WorkflowStep extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blocks: [],
        }
    }

    componentDidUpdate(prevProps) {
        console.log("componentDidUpdate");
        const changes = Object.keys(this.props).filter((name) => this.props[name] !== prevProps[name]);
        changes.forEach((name) => {
                switch (name) {
                    case "inner":
                        console.log("INNER UPDATE");
                        this.setState({
                                blocks: this.props[name].map(block =>
                                    <Button
                                        inner={block.inner}
                                    />)
                            }
                        );
                        break;
                }
            }
        )
    }

    render() {
        console.log(this.props);
        return (
            <div
                className={"ListBlock"}
            >
                <div>
                    {this.props.title}
                </div>
                <hr/>
                <div
                    className={"ListDate"}
                >
                    {this.props.steps}
                </div>
            </div>
        )
    }
}

export default WorkflowStep;