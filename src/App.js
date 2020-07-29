import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import Post from './components/Post'
import NewPost from './components/NewPost'

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route exact path='/about' component={ About } />
            <Route exact path='/newpost' component={ NewPost } />
            <Route exact path='/contact' component={ Contact } />
            <Route exact path='/:post_id' component={ Post } />
          </Switch>

        </div>     
      </BrowserRouter>
    );
  }
}

export default App;
