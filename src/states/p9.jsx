import React,{useState} from "react";
import "./p8.css"

function P9() {
    const [quantity,setquantity] = useState(1)

    const incrementHandler = function() {
        setquantity(quantity+1)
       
    }
    
    const decrementHandler = function() {
        if(quantity <=1){
            setquantity(1)
        }else{
            setquantity(quantity-1) 
        }
       
    }
    
    return (
        <div>
           <h1>E-commerece</h1>
            <div className="box">
                <span onClick={decrementHandler.bind(this)} className="btn dec">-</span>
                <span className="quantity">{this.state.quantity}</span>
                <span onClick={()=> incrementHandler()} className="btn inc">+</span>
            </div>
               
        </div>
    )
}
export default P9