import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import App from '../App';
import AddMovie from './AddMovie';

export default function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Switch>

          <Route exact path="/" component={App} />
          <Route path="/addmovie" component={AddMovie} />

        </Switch>
      </BrowserRouter>
    </div>
  )
}
