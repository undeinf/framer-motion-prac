import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Anim from './Anim';
import CenterMe from "./CenterMe";


// framer motion version
// "framer-motion": "^3.9.1",
// "framer-motion": "^1.8.4",

function App() {
  return (<Router>
    <Route
      render={({ location }) => (
        // <AnimatePresence initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route
            exact
            path='/'
            render={() => <Anim />}
          />
          <Route
            exact
            path='/center-me'
            render={() => <CenterMe />}
          />
        </Switch>
        // </AnimatePresence>
      )}
    />
  </Router>)
}

export default App;
