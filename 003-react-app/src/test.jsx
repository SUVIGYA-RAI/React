import React from 'react';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hello: "World!" };
  }

  componentWillMount() {
    console.log("componentWillMount()");
  }

  componentDidMount() {
    console.log("componentDidMount()");
  }

  changeState() {
    this.setState({ hello: "Alex!" });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate()");
    return true;
  }

  componentWillUpdate() {
    console.log("componentWillUpdate()");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate()");
  }

  render() {
    return (
      <div>
        <h1>Education.org, Hello {this.state.hello}</h1>
        <h2>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              this.changeState();
            }}
          >
            Press Here!
          </a>
        </h2>
      </div>
    );
  }
}

export default Test;