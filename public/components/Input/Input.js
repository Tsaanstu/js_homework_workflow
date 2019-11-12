import React from "react"
import 'Components/Input/Input.css';

class Input extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let typeRender = "";
        switch (this.props.type) {
            case "playerTitle":
                typeRender += "playerTitle";
                break;
            case "default":
                typeRender += "default";
                break;
        }
        return (
            <div>
                <input
                    className={typeRender}
                    id={this.props.id}
                    type={this.props.inputType}
                    value={this.props.value}
                    onChange={this.props.onChange}
                />
            </div>
        )
    }
}

export default Input;