import React,{ useState } from "react";

const P4 = function (props) {
    const [view,setView] = useState(true)
    const viewHandler = () => {
        setView(!view)
    }
    return (
        <div>
            <h1>State</h1>
            <section>
                {
                    view ?(
                       <div>
                        <h1>Login</h1>
                        <form action="">
                            <div>
                                <label htmlFor="user">Username</label>
                                <input type="text" name="user" id="user" required />
                            </div>
                            <div>
                                <label htmlFor="pass">Password</label>
                                <input type="password" name="pass" id="pass" required />
                            </div>
                            <div>
                                <button type="submit">Login</button>
                            </div>
                        </form>
                        <p>
                            New user? <button onClick={viewHandler}>Register</button>
                        </p>
                       </div>
                        ) :
                 (
                    <div>
                        <h1>Register</h1>
                        <form  action="">
                        <div>
                                <label htmlFor="user">Username</label>
                                <input type="text" name="user" id="user" required />
                            </div>
                            <div>
                                <label htmlFor="pass">Password</label>
                                <input type="password" name="pass" id="pass" required />
                            </div>
                            <div>
                                <label htmlFor="cpass">confirm Password</label>
                                <input type="password" name="cpass" id="cpass" required />
                            </div>
                            <div>
                                <button type="submit">Login</button>
                            </div>
                        </form>
                        <p>
                            already registered user <button onClick ={viewHandler} >login</button>
                            </p>
                            </div>
                )
                }
            </section>
        </div>
    )
}
export default P4