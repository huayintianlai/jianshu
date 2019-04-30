import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'
import { GlobalStyle } from './style.js';
import { Iconfont } from './static/iconfont/iconfont.js';
import store from './store';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <GlobalStyle />
          <Iconfont />
          <Header />
          <BrowserRouter>
            <div>
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail' exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
