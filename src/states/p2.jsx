import React,{ useState } from "react";

function P2(props) {
    const [num,setNum] = useState(0)
    const numHandler = function() {
        setNum(num+10)
       
    }
    function P2(props) {
        const [num,setNum] = useState(0)
        const numHandler = function() {
            setNum(num+10)
           
        }
    }
    return (
        <div>
            <h1>State in functional component</h1>
            <h2>num = {num} </h2>
            <button onClick={numHandler}>Add +10 </button>
            <br /> <hr />
            <button onClick={numHandler}>Add +50 </button>
            <br /> <hr />
            <button onClick={numHandler}>Add +100 </button>
            <br /> <hr />
            <button onClick={numHandler}>Add +150 </button>
        </div>
    )
}
export default P2