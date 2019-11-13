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
                    value={this.props.value}
                    onChange={this.props.onChange}
                />
            </div>
        )
    }
}

export default TextArea;