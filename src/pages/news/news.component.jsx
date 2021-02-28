import React from 'react';
import News_Data from'./news.data.js'
//embedding content preview to news Component
import  ContentPreview from'../../components/content-preview/content-preview.component';

//class component that we need to deal with data /state
class NewsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections:News_Data

        }

    }
    render () {
        const { collections } = this.state;
        return (<div className=" news-page">
                {
                  collections.map(({id,...othercollectionProps}) =>(
                    <ContentPreview key={id}{...othercollectionProps}/>
                  ))  
                  }
            </div>
        )
            }
    
}
export default NewsPage;