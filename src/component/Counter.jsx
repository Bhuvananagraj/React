import React, {Component} from 'react'
import ReactDOM from 'react-dom'
class Counter extends Component {
    constructor(props){
        super(props)
        //initial state
        console.log(`initialize the state and props`)
        this.state = {
            view : false
        }

    }
    //increment handler
    incVal() {
        ReactDOM.render(
            <React.StrictMode>
                <Counter num = {this.props.num + 1}/>
            </React.StrictMode>,
            document.getElementById("renderHere")
        )
    }
    // mount methods
    componentDidMount() {
        console.log(`component did Mount called`)
    }
    //update stage 
    shouldComponentUpdate(nP,nS,nC) {
        console.log(`should component update or not`)
        console.log(`newProps =`,nP)
        console.log(`newState =`, nS)
        return true
    }
    //unmount methods
    componentWillUnmount() {
        console.log(`component unmounted successfully`)
    }
    render() {
        console.log(`component rendered`)
        return (
            <div className='container'>
                <div className='title'>
                <h1>Counter</h1>
                </div>
                <h1>Number = {this.props.num }</h1>
                <div className='title'>
                    {
                        this.props.view ?<h1>Welcome to React Lifecycle </h1>:
                        <h1>Need More Counts</h1>
                    }
                </div>
                <div className='title'>
                    <button className='btn success' onClick={this.incVal.bind(this)}>
                        Add + 1
                    </button>
                </div>

            </div>
        )
    }

}
//default props
Counter.defaultProps = {
    num: 0
}
export default Counter
