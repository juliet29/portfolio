import React from 'react';
import Nav from './components/nav';
import Home from './pages/home';
import About from './pages/about';
import Portfolio from './pages/portfolio';

class App extends React.Component {

    render() {
      return (
          <div>
               <Nav />
               <Home />
               <About />
               <Portfolio />
          </div>
      );
     
    }
}

export default App;