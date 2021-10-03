import React, {Fragment} from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import "./App.css";
import Home from './screens/Home';

const App = () => {
  return (
    <Fragment>
      <Header />
      <section className="container-fluid">
        <Home />
      </section>
      <Footer />
    </Fragment>
  )
}

export default App
