import React from "react";
import "./App.css";
class Button extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClick}>{this.props.children}</button>
        );
    }
}

class App extends React.Component {
    state = {
        counter: 0,
        counterBy2: 0
    };
    constructor() {
        super();
        this.state = {
            counter: 0
        };
    }
    handleCouter = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    };

    render() {
        return (
            <div>
                <Button onClick={this.handleCouter}>
                    Click Me {this.state.counter}
                </Button>
            </div>
        );
    }
}
export default App;
