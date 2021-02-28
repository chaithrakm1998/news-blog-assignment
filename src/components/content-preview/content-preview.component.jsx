import React from 'react';

import ContentItem from '../content-item/content-item.component';

import './content-preview.styles.scss';

const ContentPreview = ({ title, items }) => (
  <div className='content-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    
   
  </div>
);

export default ContentPreview;