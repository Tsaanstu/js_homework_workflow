"use strict";
import React from "react";
import TextArea from "Components/TextArea/TextArea"
import Button from "Components/Button/Button";
import WorkflowStep from "Components/WorkflowStep/WorkflowStep";
import "Controllers/WorkflowController.css"

class Workflow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stepCount: 0,
            stepComponents: [],
            textAreaValue: ""
        };
        this.step = [];
        this.handleSetStep = this.handleSetStep.bind(this);
        this.handleSetStage = this.handleSetStage.bind(this);
        this.createStep = this.createStep.bind(this);
        this.recreateSteps = this.recreateSteps.bind(this);
        this.handleUpdateTextAreaValue = this.handleUpdateTextAreaValue.bind(this);
        this.handleUpdateTextAreaValue = this.handleUpdateTextAreaValue.bind(this);
        this.handleDoStep = this.handleDoStep.bind(this);
    }

    handleDoStep(index) {
        console.log(index);
        console.log(this.state.stepCount);

        let dvig = this.step[index].steps[0];

        this.step[index].steps.shift();

        if (index + 1 < this.state.stepCount) {
            this.step[index + 1].steps.push(dvig);
        }
        this.recreateSteps();
    }

    handleUpdateTextAreaValue(event) {
        this.setState({textAreaValue: event.target.value});
    }

    createStep() {
        let newCount = this.state.stepCount + 1;
        this.recreateSteps({
            key: this.state.stepCount,
            title: `Stage ${newCount}`,
            steps: [],
            count: 0,
        });
    }

    recreateSteps(newObject) {
        if (newObject !== undefined) {
            this.step.push(newObject);
            let index = 0;
            this.setState({
                stepCount: this.state.stepCount + 1,
                stepComponents: this.step.map((step, index) => {
                        index += 1;
                        return (
                            <WorkflowStep
                                key={step.key}
                                index={index - 1}
                                title={step.title}
                                steps={step.steps}
                                count={step.count}
                                eventListener={this.handleDoStep}
                            />
                        )
                    }
                )
            })
        } else {
            let index = 0;
            this.setState({
                stepComponents: this.step.map((step, index) => {
                        index += 1;
                        return (
                            <WorkflowStep
                                key={Math.random()}
                                index={index - 1}
                                title={step.title}
                                steps={step.steps}
                                count={step.count}
                                eventListener={this.handleDoStep}
                            />
                        )
                    }
                )
            });
        }
    }

    createStage() {
        if (this.state.stepCount < 1) {
            alert(`Сначала добавьте "стадию"`);
            return
        }
        this.step[0].steps.push(
            {
                key: this.step[0].count,
                inner: this.state.textAreaValue
            }
        );
        this.step[0].count += 1;
        this.setState({
            textAreaValue: ""
        });
        this.recreateSteps();
    }

    handleSetStep(event) {
        console.log("handleSetStep");
        this.createStep();
    }

    handleSetStage(event) {
        console.log("handleSetStage");
        this.createStage();
    }

    render() {
        return (
            <div
                className={"flexColumn"}
            >
                <h1>
                    {"Workflow"}
                </h1>
                <Button
                    inner={"Добавить стадию процесса"}
                    eventListener={this.handleSetStep}
                />
                <h3>
                    {"Опишите вашу задачу"}
                </h3>
                <TextArea
                    value={this.state.textAreaValue}
                    onChange={this.handleUpdateTextAreaValue}
                />
                <Button
                    inner={"Добавить задачу"}
                    eventListener={this.handleSetStage}
                />
                <div
                    className={"flexRow"}
                >
                    {this.state.stepComponents}
                </div>
            </div>
        )
    }
}

export default Workflow;