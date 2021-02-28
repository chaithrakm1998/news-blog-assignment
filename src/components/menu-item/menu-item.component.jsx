import React from 'react';
import './menu-item.styles.scss';
import 'react-router-dom';
import { Link } from 'react-router-dom';
//for single value
const MenuItem =({title,imageUrl}) => (
    <div style={{
        backgroundImage: `url(${imageUrl})`
    }} 
        className="menu-item">
            
    <div className="content">
        <h1 className="title">{title}</h1>
        <Link className = 'subtitle' to ='/news'>see more</Link>
       
    </div>
</div>
)
/* for many values
const MenuItem =({props}) => (
    <div className="menu-item">
    <div className="content">
        <h1 className="title">{props.title}</h1>
        <span className="subtitle">See More</span>
    </div>
</div>
*/
export default MenuItem;