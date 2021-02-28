import React from 'react';
import './content-item.styles.scss';

//functional component

const ContentItem = ({id,author,content,Url,publishedAt,imageUrl}) => (
    <div className="content-item">
        <div className="image"
        style={{
            backgroundImage:`url(${imageUrl})`
            
        }}>
            <div className="content-footer">
                <span className='author'>{author}</span>
                <span className='publishedAt'>{publishedAt}</span>
                <span className='content'>{content}</span>
            
                </div>
          </div>
    </div>
)

export default ContentItem;