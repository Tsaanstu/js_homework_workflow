import React from "react"
import 'Components/TextArea/TextArea.css';

class TextArea extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <textarea
                    className={"default"}
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