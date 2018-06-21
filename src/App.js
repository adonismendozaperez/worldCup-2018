import React, { Component } from 'react';
import Navbar from './component/navbar';
import Results from './component/pages/results';
import TodayMaches from './component/pages/TodayMaches';
import { BrowserRouter as Router, Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <Navbar/>
            <Route exact path='/' component={Results} />
            <Route exact path='/TodayMaches' component={TodayMaches} />
        </div>
      </Router>
    );
  }
}

export default App;
