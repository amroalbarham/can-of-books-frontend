import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import Login from './login';
import { withAuth0 } from '@auth0/auth0-react';


// import { useAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Profile from './component/Profile';
import axios from 'axios';

class App extends React.Component {


  render() {
    console.log('app', this.props)
    return(
      <>
        <Router>
          <IsLoadingAndError>
            <Header />

              <Switch>
                <Route exact path="/">
                  {!this.props.auth0.isAuthenticated &&
                  <Login/>
                  }
                  {/* <Profile/> */}
                </Route>
                <Route exact path="/profile">
                  <Profile/>
                  </Route>
              </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
