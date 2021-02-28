import React from 'react';
import News_Data from './news.data.js'
//embedding collection preview to shop component
import ContentPreview from '../../components/content-preview/content-preview.component'

//class component as we need to deal with data/state
class NewsPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            content:News_Data
        }
    }
  
    render(){
        const {content} = this.state;
        return (<div className="news-page">
                {
                    content.map(({id, ...otherContentProps}) => (
                        <ContentPreview key={id} {...otherContentProps}/>
                    ))
                }
            </div>
            )
    }
}

export default NewsPage;