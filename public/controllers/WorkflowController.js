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
            textAreaValue: "",
            textAreaKey: Math.random()
        };
        this.step = [];
        this.handleSetStep = this.handleSetStep.bind(this);
        this.handleSetStage = this.handleSetStage.bind(this);
        this.createStep = this.createStep.bind(this);
        this.recreateSteps = this.recreateSteps.bind(this);
        this.handleUpdateTextAreaValue = this.handleUpdateTextAreaValue.bind(this);
        this.handleDoStep = this.handleDoStep.bind(this);
        this.handleChangeStep = this.handleChangeStep.bind(this);
        this.handleChangeStepValue = this.handleChangeStepValue.bind(this);
        this.handleClearChanged = this.handleClearChanged.bind(this);
    }

    handleClearChanged() {
        this.recreateSteps("clearChanged");
    }

    handleChangeStep(indexStage, indexStep) {
        this.step[indexStage].changed = indexStep;
        this.recreateSteps();
    }

    handleChangeStepValue(indexStage, indexStep, value) {
        this.step[indexStage].steps[indexStep].inner = value
    }

    handleDoStep(index) {
        let dvig = this.step[index].steps[0];
        this.step[index].steps.shift();
        if (index + 1 < this.state.stepCount) {
            this.step[index + 1].steps.push(dvig);
        } else {
            alert(`Поздравляю с выполнением задачи "${dvig.inner}"`);
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
            changed: -1,
        });
    }

    recreateSteps(newObject) {
        if (newObject === "clearChanged") {
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
                                changed={-1}
                                eventListener={this.handleDoStep}
                                changeStep={this.handleChangeStep}
                                changeStepValue={this.handleChangeStepValue}
                            />
                        )
                    }
                )
            });
        } else if (newObject !== undefined) {
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
                                changed={step.changed}
                                eventListener={this.handleDoStep}
                                changeStep={this.handleChangeStep}
                                changeStepValue={this.handleChangeStepValue}
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
                                changed={step.changed}
                                eventListener={this.handleDoStep}
                                changeStep={this.handleChangeStep}
                                changeStepValue={this.handleChangeStepValue}
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
        this.createStep();
    }

    handleSetStage(event) {
        this.createStage();
        this.setState({
            textAreaKey: Math.random()
        })
    }

    render() {
        return (
            <div
                className={"flexColumn"}
                onClick={this.handleClearChanged}
            >
                <h1>
                    {"Workflow"}
                </h1>
                <Button
                    inner={"Добавить стадию процесса"}
                    eventListener={this.handleSetStep}
                />
                <h3
                    style={{
                        textAlign: "center"
                    }}
                >
                    {"Опишите Вашу задачу"}
                    <br/>
                    {"Для изменения задачи нажмите на неё и задайте новое значение"}
                </h3>
                <TextArea
                    key={this.state.textAreaKey}
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