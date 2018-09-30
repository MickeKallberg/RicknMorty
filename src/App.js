import React, { Component } from 'react';
import Characters from './components/characters/Chars';
import Footer from './components/Footer';
import Episodes from './Episodes';
import './App.css';

var style = {
  paddingTop: "50px",

  display: "flex"
}

const main = {
  maxWidth: "65%",
}

const aside = {
  maxWidth: "35%",
  paddingTop: "77px",
  marginLeft: "50px"
}

const wrapper = {
    margin: "0 auto",
    maxWidth: "960px",
}

class App extends Component {

 
  render() {
    return (
      <div style={wrapper}>
        <div style={style}>
          <main style={main}>
            <Characters />
          </main>
          <aside style={aside}>
            <Episodes />
          </aside>
        </div>
        <Footer />    
      </div>
    );
  }
}

export default App;
