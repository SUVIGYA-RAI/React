import React from "react";

class LifecycleClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date().toLocaleTimeString() };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.timer = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", prevState, "->", this.state);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.timer);
  }

  render() {
    return <div>Time: {this.state.time}</div>;
  }
}

export default LifecycleClass;