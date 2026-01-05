import React, {Component} from 'react'
class Counterclass extends Component {
    constructor(props) {
        super(props);
        this.state = { count : 0 }
    }

    handleIncrement = ()=>{
        this.setState({count: this.state.count +1})
    };

    render(){
        return(
            <div>
                <h2>Class Counter: {this.state.count}</h2>
                <button onClick = {this.handleIncrement}>+</button>
            </div>
        )
    }
}
export default Counterclass;