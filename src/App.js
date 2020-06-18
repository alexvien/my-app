import React from 'react';
import {
  HashRouter,
  Route
} from 'react-router-dom';

// App components
import Home from './components/Home';
import Finance from './components/Finance';
import Header from './components/Header';
import Footer from './components/Footer';


class App extends React.Component {
  render() {
  
    return (
      <HashRouter>
        <Header />
        <div className="site-wrapper">
          <Route exact path='/' component={Home} />
          <Route exact path='/finance' component={Finance} />
        </div>
        <Footer />
      </HashRouter>
    );
  }
}

export default App;
