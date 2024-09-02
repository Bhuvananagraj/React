import React, {Component}from "react";
import "./p7.css"
class P7 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity:0
        }
    }
    incrementHandler(val) {
        this.setState({
            quantity: this.state.quantity + val
        })
    }
    decrementHandler(val) {
        this.setState({
            quantity: this.state.quantity - val
        })
    }
    render() {
        return(
            <div>
                <div className="box"></div>
                <h1>E-commerece</h1>
                <h2>quantity= {this.state.quantity}</h2>
                <br /> <br />
               
                <button className= "inc" onClick={()=> this.incrementHandler(1)}>+</button>
                <button className = "dec"onClick={()=> this.decrementHandler(1)}>-</button>
               </div>

           
        )
    }
}export default P7
