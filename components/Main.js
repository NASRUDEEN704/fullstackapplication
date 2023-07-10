import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link,BrowserRouter as Router,Routes,RouterPath} from 'react-router-dom';
import Login from './Login';
import '../style/Main.css';
import Nav from './nav';
function Navi() {
    return ( <>
    {/* <Router> */}
    <Nav/>
    
        <div className='alig'>
            {/* <img src='https://w0.peakpx.com/wallpaper/250/831/HD-wallpaper-rolls-royce-rolls-royce-luxary-car-car-white-car-royal-car-thumbnail.jpg'/> */}
        </div>
    <div className='tot'>
    {/* <div className='img'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFH42xPvaD30MhQeOhjk0xkTg4tHw4f8Q0_ct49T7AxA&s'/>   
    </div> */}
          <div className='nav'>
            <div className='div'>
                <Link to='/FindById' className='ele'>Search Profile</Link>
            </div>
            <div className='div'>
                <Link to='/Login' className='ele'>SignIn</Link>
            </div>
            <div className='div'>
                <Link to='/Delete' className='ele'>Delete User</Link>
            </div>
            <div className='div'>
                <Link to='/Update' className='ele'>Update Profile</Link>
            </div>
            {/* <div className='ele'>
                <Link to='/Find' className='ele'>Find User</Link>
            </div> */}
          </div>
          </div>
    {/* </Router> */}
    </> );
}

export default Navi;