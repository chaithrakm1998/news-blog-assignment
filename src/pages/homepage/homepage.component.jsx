import React from 'react';
//link jsx with css
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';
import header from '../../components/content-item/content-item.component';
// initializing component homepage
const HomePage =() => (
    <div  className=" homepage">
        
        <Directory/>
        
    </div>
)
export default HomePage;