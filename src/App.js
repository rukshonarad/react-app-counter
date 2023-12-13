import React from "react";
import "./App.css";
class Button extends React.Component {
    render() {
        return <button>{this.props.children}</button>;
    }
}

class App extends React.Component {
    handleOnClick = () => {
        console.log("Hello");
    };
    render() {
        return (
            <div>
                <Button>Click Me</Button>
                <span>Counter:0</span>
            </div>
        );
    }
}
export default App;
