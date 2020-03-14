import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Comp1 from "./Componentes/Comp1/Comp1";
import Comp2 from "./Componentes/Comp2/Comp2";
import CompError from "./Componentes/CompError/CompError";
import Galery from "./Componentes/galery/galery";
import RickGalery from './Componentes/RickPage/Rick'
import Layout from "./layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/home" component={Comp1}></Route>
          <Route exact path="/home/news" component={Comp2}></Route>
          <Route exact path="/home/galery" component={Galery}></Route>
          <Route exact path="/home/galery/rickandmorty" component={RickGalery}></Route>
          <Route path="/404" component={CompError} />
          <Redirect from="*" to="/404" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
