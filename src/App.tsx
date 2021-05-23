import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import DashPage from './pages/Lesson';

const App = () => {
  return (
    <Switch>
      <Route exact path="/kanas" component={DashPage} />
      <Route exact path="/" component={HomePage} />
    </Switch>
  );
};

export default App;
