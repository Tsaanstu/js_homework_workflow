"use strict";
import React from "react";
import update from 'react-addons-update';
import Button from "Components/Button/Button";
import WorkflowStep from "Components/WorkflowStep/WorkflowStep";
import "Controllers/WorkflowController.css"

class Workflow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stepCount: 0,
            step: [],
            stepComponents: [],
        };
        this.handleSetStep = this.handleSetStep.bind(this);
        this.handleSetStage = this.handleSetStage.bind(this);
        this.createStep = this.createStep.bind(this);
    }

    createStep() {
        console.log("--- createStep");

        let st = this.state.step;
        let newCount = this.state.stepCount + 1;
        let newStep = {
            title: `Stage ${newCount}`,
            steps: ["kek", "lol"],
        };
        st.push(newStep);

        this.setState({
            stepCount: newCount,
            step: st,
        });
        this.setState({
            stepComponents: this.state.step.map(step =>
                <WorkflowStep
                    title={step.title}
                    steps={step.steps}
                />
            )
        });
    }

    createStage() {
        console.log(`CreateStage: ${this.state.step[0].title}`);
        if (this.state.stepCount < 1) {
            alert(`Сначала добавьте "стадию"`);
            return
        }
        let beginArr = this.state.step[0].steps;
        let newStage = {
            inner: "Очень важное дело"
        };
        beginArr.push(newStage);
        this.setState({
            step: update(this.state.step, {0: {steps: {$set: beginArr}}})
        });
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
                <Button
                    inner={"Добавить стадию процесса"}
                    eventListener={this.handleSetStep}
                />
                {/*<Line/>*/}
                <Button
                    inner={"Добавить задачу"}
                    eventListener={this.handleSetStage}
                />
                {/*{this.state.stepCount}*/}
                {/*{this.state.step}*/}
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