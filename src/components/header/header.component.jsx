import React from 'react';
import {Link} from 'react-router-dom' //used for routing to the pages
import './header.styles.scss'


//functional component (as there is no data/state that is to be changed)

const Header = () => (
    <div className = "header" >
       
        <div className="options">
      
            <Link className="option" to="/">TRENDING </Link>
            <Link className="option" to="/">ARCHIVE </Link>  
            <Link className="option" to="/">CONTACT </Link> 
            
        </div>
    </div>
    
)

export default Header;