import React from 'react';
import Header from './common/header';
import { GlobalStyle } from './style.js';
import { Iconfont } from './static/iconfont/iconfont.js';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Iconfont />
      <Header />
    </div>
  );
}

export default App;
