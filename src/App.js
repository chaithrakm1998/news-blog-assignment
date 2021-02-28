import logo from './logo.svg';
import './App.css';
//get homepage to main
import HomePage from './pages/homepage/homepage.component';
import {Route} from 'react-router-dom';
import NewsPage from './pages/news/news.component';


function App() {
  return (
    <div >
      <Route exact path="/" component={HomePage}/>
      <Route path="/news" component={NewsPage}/>

    </div>
  );
}

export default App;
