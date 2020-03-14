import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Comp1 from './Componentes/Comp1/Comp1'
import Comp2 from './Componentes/Comp2/Comp2'
import CompError from './Componentes/CompError/CompError'
import Layout from './layout'
import Login from './Componentes/Login/Login'


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/home' component={Comp1}></Route>
          <Route exact path='/home/news' component={Comp2}></Route>
          <Route path="/404" component={CompError} />
          <Route path="/login" component={Login}></Route>
          <Redirect from="*" to="/404" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
