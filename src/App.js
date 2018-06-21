import React, { Component } from 'react';
import Navbar from './component/navbar';
import Results from './component/pages/results';
import Page from './component/pages/page2';
import { BrowserRouter as Router, Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
          <div>
            <Navbar/>
            <Route exact path='/' component={Results} />
            <Route exact path='/page' component={Page} />
        </div>
      </Router>
    );
  }
}

export default App;
