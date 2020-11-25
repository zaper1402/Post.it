import React,{useState,useEffect} from 'react'
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'

const Signup = () => {
    const history = useHistory()
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const [image,setImage]  =useState("")
    const [url,setUrl]  =useState("")
    useEffect(()=>{
        if(url){
            uploadFeilds()
        }
    },[url])

    const uploadPic = ()=>{
        const data = new FormData() 
        data.append("file",image)
        data.append("upload_preset","Post.it")
        data.append("cloud_name","ashircld")
        fetch("https://api.cloudinary.com/v1_1/ashircld/image/upload",{
            method:"post",
            body:data
        })
        .then(res=> res.json())
        .then(data=>{
            setUrl(data.url)
            console.log(data.url);
        }).catch(err=>{
            console.log(err);
        })
        
    }

    const uploadFeilds = ()=>{
        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
            return  M.toast({html: "Invalid Email", classes:"#ef5350 red lighten-1"})
         }   
 
         fetch("/signup",{
             method:"post",
             headers:{
                 "Content-Type":"application/json"
             },
             body: JSON.stringify({
                 name,
                 email,
                 password,
                 pic:url
             })
         }).then(res=>res.json())
         .then(data=>{
            if(data.error){
                 M.toast({html: data.error, classes:"#ef5350 red lighten-1"})
            }else{
                 M.toast({html: data.message, classes:"#8bc34a light-green"})
                 history.push('/signin')
            }
         }).catch(err=>{
             console.log(err);
         })
    }


    const PostData = ()=>{
        if(image){
            uploadPic()
        }else{
            uploadFeilds()
        }  
    }

    return (
        <div className="mycard">
            <div className="card auth-card input-field">
                <h2>Post.it</h2>
                <input type="text" placeholder="name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
                <input type="text" placeholder="email" 
                value={email} 
                onChange={(e)=>setEmail(e.target.value)}
                />
                <input type="password" placeholder="password" 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                <div className="file-field input-field">
                    <div className="btn">
                        <span>Upload pic</span>
                        <input type="file" onChange={(e)=> setImage(e.target.files[0])}/>
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text"/>
                    </div>
                </div>
                <button className="btn waves-effect waves-light #4fc3f7 light-blue lighten-2" 
                onClick={()=>PostData()}
                >
                    SignUp
                </button>
                <h5>
                    <Link to='/signin'>Already have an account?</Link>
                </h5>
            </div>
            
        </div>
    )
}

export default Signup