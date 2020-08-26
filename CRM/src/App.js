import React, { Component, Fragment } from 'react';
import { Redirect, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HTTPURL } from './common/global_constant';

// import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/css/rotating-card.css'

import { Provider } from './common/context';

import Login from "./pages/login/login";
import SignUp from "./pages/signup/signup";
import ForgotPassword from "./pages/forgot_password/forgot_password";
import Dashboard from './pages/dashboard/dashboard';
import ChangePassword from './pages/change_password/ChangePassword';
import CreateTicket from './pages/create_ticket/create_ticket';
import CreateProduct from './pages/createproduct/createproduct';
import ProductDetails from './pages/product_details/product_details';
import ViewProduct from './pages/viewproduct/viewproduct';
import CreateClient from './pages/create_client/CreateClient';
import CreateUser from './pages/create_user/CreateUser';
import Profile from './pages/profile/Profile';
import TicketList from './pages/ticket_list/TicketList';
import ViewClient from './pages/view_client/ViewClient';
import ListClient from './pages/list_client/ListClient'

import Nav from './common/components/Nav';
import Sidebar from './common/components/Sidebar';
import NotFound from './common/components/NotFound';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true ,
      users: [],
      profile: []
    }
  }
  loginUser = (data) => {
    let form = new FormData(data);

    const headers = new Headers();
    headers.append('API-KEY','97899c-7d0420-1273f0-901d29-84e2f8');
     fetch(HTTPURL + 'user/login', {
        method: 'POST',
        body: form,
        headers: headers
    })
    .then(response => response.json())
    .then(json => {
      console.log(json);
      // Get user data from the database
      this.state.profile.push(json.data)
      console.log(this.state.profile[0], json.data, "profile")
      return json;
    });
;
    this.setState({ loggedIn: true })
    console.log('Yuppie i logged ', data);
    return { status: true, message: 'Login successful' };
  }

  signupUser = (data) => {
    const headers = new Headers();
    headers.append('API-KEY','97899c-7d0420-1273f0-901d29-84e2f8');
    let form = new FormData(data);
    return fetch(HTTPURL + 'user/register', {
        method: 'POST',
        body: form,
        headers: headers

    })
    .then(response => response.json())
    .then(json => {
      console.log(json);
      return json;
    });
    
    // console.log('Registered Successfully ', username, email, password);
  }

  forgotPassword = (data) => {
    const headers = new Headers();
    headers.append('API-KEY','97899c-7d0420-1273f0-901d29-84e2f8');
    let form = new FormData(data);
    return fetch(HTTPURL + 'user/forgotpassword', {
        method: 'POST',
        body: form,
        headers: headers
    })
    .then(response => response.json())
    .then(json => {
      console.log(json);
      return json;
    });
  }

  getProfileDetails = () => {
    console.log(this.state.profile, "PD")
  }

  changePassword = (data) => {
    const headers = new Headers();
    headers.append('API-KEY','97899c-7d0420-1273f0-901d29-84e2f8');
    let form = new FormData(data);
    return fetch(HTTPURL + 'user/updatepassword', {
        method: 'POST',
        body: form,
        headers: headers
    })
    .then(response => response.json())
    .then(json => {
      console.log(json);
      return json;
    });
  }

  createClient = (data) => {
    const headers = new Headers();
    headers.append('API-KEY','97899c-7d0420-1273f0-901d29-84e2f8');
    let form = new FormData(data);
    return fetch(HTTPURL + 'company/add', {
        method: 'POST',
        body: form,
        headers: headers
    })
    .then(response => response.json())
    .then(json => {
      console.log(json);
      return json;
    });
  }

  createTicket = (data) => {
    const headers = new Headers();
    headers.append('API-KEY','97899c-7d0420-1273f0-901d29-84e2f8');
    let form = new FormData(data);
    return fetch(HTTPURL + 'ticket/add', {
        method: 'POST',
        body: form,
        headers: headers
    })
    .then(response => response.json())
    .then(json => {
      console.log(json);
      return json;
    });
  }

  createProduct = (data) => {
    const headers = new Headers();
    headers.append('API-KEY','97899c-7d0420-1273f0-901d29-84e2f8');
    let form = new FormData(data);
    return fetch(HTTPURL + 'product/add', {
        method: 'POST',
        body: form,
        headers: headers
    })
    .then(response => response.json())
    .then(json => {
      console.log(json);
      return json;
    });
  }


  logoutUser = () => this.setState({ loggedIn: false });

  getContext = () => {
    return {
       ...this.state, 
       login: this.loginUser, 
       logout: this.logoutUser, 
       signup: this.signupUser, 
       forgotpassword: this.forgotPassword,
       changepassword: this.changePassword,
       createclient: this.createClient,
       createticket: this.createTicket,
       createproduct: this.createProduct,
       profiledetails: this.getProfileDetails
    }
  };


  render() {

    return (

      <Provider value={this.getContext()}>
        <div className="home">
          <Fragment>
            <Router>
              <Nav />
              <div className="App" id="wrapper">
                {this.state.loggedIn && <Sidebar />}
                <div className="content">
                  <Switch>
                    {<Route path="/createproduct" component={CreateProduct} />}
                    {<Route path="/viewproduct" component={ViewProduct} />}
                    {<Route path="/productdetails" component={ProductDetails} />}
                    {<Route path="/createticket" component={CreateTicket} />}
                    {<Route path="/forgotpassword" component={ForgotPassword} />}
                    {<Route path="/signup" component={SignUp} />}
                    {<Route path="/login" component={Login} />}
                    {!this.state.loggedIn && <Route path="/" component={Login} />}
                    {!this.state.loggedIn && <Redirect from="/dashboard" to="/login" />}
                    {this.state.loggedIn && <Route exact path="/dashboard" component={Dashboard} />}
                    {this.state.loggedIn && <Route path="/createclient" component={CreateClient} />}
                    {this.state.loggedIn && <Route path="/creatuser" component={CreateUser} />}
                    {this.state.loggedIn && <Route path="/profile" component={Profile} />}
                    {this.state.loggedIn && <Route path="/ticketlist" component={TicketList} />}
                    {this.state.loggedIn && <Route path="/viewclient" component={ViewClient} />}
                    {this.state.loggedIn && <Route path="/listclient" component={ListClient} />}
                    {this.state.loggedIn && <Route path="/changepassword" component={ChangePassword} />}
                    <Route component={NotFound} />
                  </Switch>
                </div>
              </div>
            </Router>
          </Fragment>
        </div>
      </Provider>
    )
  };

  
}

export default App;