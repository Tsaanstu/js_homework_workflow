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
            stepComponents: [],
        };
        this.step = [];
        this.handleSetStep = this.handleSetStep.bind(this);
        this.handleSetStage = this.handleSetStage.bind(this);
        this.createStep = this.createStep.bind(this);
        this.recreateSteps = this.recreateSteps.bind(this);
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
            this.setState({
                stepCount: this.state.stepCount + 1,
                stepComponents: this.step.map(step =>
                    <WorkflowStep
                        key={step.key}
                        title={step.title}
                        steps={step.steps}
                        count={step.count}
                    />
                )
            })
        } else {
            this.setState({
                stepComponents: this.step.map(step => {
                        return (
                            <WorkflowStep
                                key={Math.random()}
                                title={step.title}
                                steps={step.steps}
                                count={step.count}
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
                inner: "Очень важное дело"
            }
        );
        this.step[0].count += 1;
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