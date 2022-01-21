import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import  Button from './Button';
import "./Navbar.css"


function Navbar() {
    const [click,setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMnu = () => setClick(!false);
    const [button, setButton] = useState(true);
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }else {
            setButton(true)
        }
    }
    window.addEventListener('resize', showButton);
    useEffect(() =>{
    showButton()
}, [])
    return (
        <>
         <nav className='navbar'>
             <div className='navbar-container'>
 <Link to="/" className="navbar-logo" onClick={closeMobileMnu}>
  <i class="far fa-phone-square"></i> ML Company 
 </Link>
 <div className='menu-icon' onClick={handleClick}>
     <i className={click ? 'fas fa-times': 'fas fa-bars'}/>
 </div>
 <ul className={click ? "nav-menu active":"nav-menu" }>
<li className='menu-item'>
    <Link to={"/home"} className='menu-link' onClick={closeMobileMnu}> 
    Home 
    </Link>
</li>
<li className='menu-item'>
    <Link to={"/services"} className='menu-link' onClick={closeMobileMnu}> 
    Services 
    </Link>
</li>
<li className='menu-item'>
    <Link to={"/products"} className='menu-link' onClick={closeMobileMnu}> 
    Products 
    </Link>
</li>
<li className='menu-item'>
    <Link to={"/sign-up"} className='menu-links-mobile' onClick={closeMobileMnu}> 
   Sign Up
    </Link>
</li>
 </ul>
 {button && <Button buttonStyle="btn--outline">Sing Up</Button>}
             </div>
         </nav>
        </>
    )
}

export default Navbar
