import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

// import ContentFrame from './ContentFrame';
import Login from './components/Login';
import ContentFrame from './ContentFrame';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/oss' component={ContentFrame} />
        <Route path='/' exact component={ContentFrame} />
      </Switch>
    );
  }
}

export default App;
