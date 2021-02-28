import React from 'react';
//link jsx with css
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';

// initializing component homepage
const HomePage =() => (
    <div  className=" homepage">
        <Directory/>
    </div>
)
export default HomePage;