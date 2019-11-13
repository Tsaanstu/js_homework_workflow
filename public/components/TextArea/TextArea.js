import React from "react"
import 'Components/TextArea/TextArea.css';

class TextArea extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let typeRender = "";
        switch (this.type) {
            case "step":
                typeRender += "step";
                break;
            case "default":
                typeRender += "default";
                break;
        }
        return (
            <div>
                <textarea
                    className={typeRender}
                    id={this.props.id}
                    type={this.props.inputType}
                    onChange={this.props.onChange}
                    onClick={this.props.onClick}
                />
            </div>
        )
    }
}

export default TextArea;