import React,{useContext} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {UserContext} from '../App'



const NavBar = () => {
    const {state,dispatch} = useContext(UserContext)
    const history = useHistory()
    const renderList = ()=>{
        if(state){
            return [
                <li><Link to="/profile">Profile</Link></li>,
                <li><Link to="/create">Create Post</Link></li>,
                <li><Link to="/myfollowingposts">My following Posts</Link></li>,
                <li>
                    <button className="btn #c62828 red darken-3" 
                    onClick={()=>{
                        localStorage.clear()
                        dispatch({"type":"CLEAR"})
                        history.push('/signin')
                    }}
                    >
                        Logout
                    </button>
                </li>,
                <li>
                <a class="dark-toggle" 
                onClick={()=>{
                }}
                >
                <i class="material-icons left">brightness_4</i></a>
                </li>
                
                
            ]
        }else{
            return [
                <li><Link to="/signin">Sign in</Link></li>,
                <li><Link to="/signup">Signup</Link></li>,
                <li>
                    <a class="dark-toggle" onclick="localStorage.setItem('mode', (localStorage.getItem('mode') || 'dark') === 'dark' ? 'light' : 'dark'); localStorage.getItem('mode') === 'dark' ? document.querySelector('body').classList.add('dark') : document.querySelector('body').classList.remove('dark')" title="Dark/light"><i class="material-icons left">brightness_4</i>
                    Toggle Dark Mode</a>
                </li>
            ]
        }
    }


    return (
        <nav>
            <div className="nav-wrapper white">
                <Link to={state?"/":"/signin"} className="brand-logo left">Post.it</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {renderList()}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;