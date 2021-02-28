import React from 'react';
import './menu-item.styles.scss';
//for single value
const MenuItem =({title,imageUrl}) => (
    <div style={{
        backgroundImage: `url(${imageUrl})`
    }} 
        className="menu-item">
    <div className="content">
        <h1 className="title">{title}</h1>
        
        <span className="subtitle">See More</span>
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