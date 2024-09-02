import React , {Component } from 'react'

class P5 extends Component {
    constructor (props) {
        super(props)
        this.state = {
            x:10,
            y:20,
            title: "welcome to string",
            color :["red" , "blue" , "green","yellow"],
            user : {
                name: 'bhuvana',
                email: 'bhuvana@gmail.com'
            }
        }
        
       
    }
    render() {
        return (
            <div>
                <h1>
                    states in class component
                </h1>
                <h3> x = {this.state.x}</h3>
                <h3> y= {this.state.y}</h3>
                <hr/>
                <h3>product = {this.state.x * this.state.y}</h3>
                <h3> {this.state.title}</h3>
                <h3> colors = {this.state.color}</h3>
                <h3>{this.state.user.name}</h3>
                <hr/>



                
            </div>
        )
    }

}export default P5