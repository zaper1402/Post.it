import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'

const Signin = () => {
    const history = useHistory()
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")

    const PostData = ()=>{
        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
           return  M.toast({html: "Invalid Email", classes:"#ef5350 red lighten-1"})
        }   

        fetch("/signin",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data);
           if(data.error){
                M.toast({html: data.error, classes:"#ef5350 red lighten-1"})
           }else{
                M.toast({html:"Welcome!", classes:"#8bc34a light-green"})
                history.push('/')
           }
        }).catch(err=>{
            console.log(err);
        })
    }



    return (
        <div className="mycard">
            <div className="card auth-card input-field">
                <h2>Post.it</h2>
                <input type="text" placeholder="email" 
                value={email} 
                onChange={(e)=>setEmail(e.target.value)}
                />
                <input type="text" placeholder="password" 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                <button className="btn waves-effect waves-light #4fc3f7 light-blue lighten-2"
                onClick={()=>PostData()}
                >
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