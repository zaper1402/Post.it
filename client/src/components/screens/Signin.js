import React from 'react'
import {Link} from 'react-router-dom'

const Signin = () => {
    return (
        <div className="mycard">
            <div className="card auth-card input-field">
                <h2>Post.it</h2>
                <input type="text" placeholder="email" />
                <input type="text" placeholder="password" />
                <button className="btn waves-effect waves-light #4fc3f7 light-blue lighten-2" >
                    Login
                </button>
                <h5>
                    <Link to='/signup'>Dont have an account?</Link>
                </h5>
            </div>
            
        </div>
    )
}

export default Signin