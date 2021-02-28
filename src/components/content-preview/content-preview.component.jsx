import React from 'react';
import './content-preview.styles.scss';

const ContentPreview =({title,items}) => (
    <div ClassName="content-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div ClassName = 'Preview'>
            {
                items.map((item) => (
                    <div key={item.id}>{item.name}</div>
                ))
            }
            
            
             </div>
    </div>



);
export default ContentPreview;