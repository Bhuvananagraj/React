import React, { useState } from 'react'
//state is a internal variable of component (private)
//state is property of component
//to create a state variable in functional components - hooks (hooks only for functional component)(use prefix)
// name of the state and handler is not visible
//every states handler_method - has prefix set
function P1(props) {
    //const [state,handler_method]=useState(initial_value)
    const [x,setX]= useState(10)
    const [user,setUser] = useState("bhuvana nagaraj")
    const [isAdmin,setIsAdmin] = useState("true")
    const [colors,setColors] = useState(['red','green','yellow'])
    const [course,setCourse] = useState({
        title: "mern",
        duration : "3month"
    })
    return(
        <div>
            <h1>States in Functional Component</h1>
            <h2>num = {x} </h2>
            <h2>{user}</h2>
            <h2>{isAdmin ? "say true" : "say false"}</h2>
            <h2>title = {course.title}</h2>
            <h2>duration = {course.duration}</h2>
          <hr />
          <div>
            {
                colors.map((item,index)=>{
                    return (
                        <p key= {index}>
                            {item}
                        </p>
                    )

                })
            }
          </div>
        </div>

    )
}
export default P1