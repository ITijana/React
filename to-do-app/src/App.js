import React from 'react';
import './components/style.css'
import Header from './components/Header/Header';
import List from './components/List/List';

const App = () => {

  return (
    <div>
      <div className="App">
        <Header />
      </div>
      <div className='App'>
        <List/>
      </div>
    </div>
  );
}

export default App;
