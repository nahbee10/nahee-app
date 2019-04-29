import React, { Component , Fragment} from 'react';
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from 'react-router-dom';
import './App.css';

import createClass from 'create-react-class';

var App = createClass({
    render: function () {
    return (
      <Router>
        <div id="app" className="App">
          <Fragment>
              <Switch>
              <Route exact path="/" exact render={() => (

                  <div>
                  <p style={{width:"60%", padding: "14px"}}>Nahee Kim is an artist and a web developer exploring programmability of human sexual behavior.
She writes code poems, builds websites and draws illustrations regarding body images bound up with sexuality and power dynamics and communication protocols in sexual relationship. 
She studies and teaches at Hunter College, studied at School for Poetic Computation, is a member of Soft Surplus and was a member of Eobchae. She is based in New York and Seoul.</p>
                  </div>

                )} />
              <Route exact path="/shellhouse" exact render={() => (

                  <div>
                  <img src="babycounter.png" style={{width:"100%"}} />
                  </div>

                )} />
                </Switch>
              </Fragment>
            </div>
          </Router>

        )}
})

export default App;
