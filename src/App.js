import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import "./App.css";
import Home from './screens/Home';
import ProductScreen from './screens/ProductScreen';
import Signin from './screens/Signin';
import Signup from './screens/Signup';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <section className="container">
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Signin" component={Signin} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/Product/:id" component={ProductScreen} />
        </Switch>
      </section>
      <Footer />
    </Router>
  )
}

export default App
