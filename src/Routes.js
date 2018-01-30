import React, { Component } from 'react';
import { Switch,Route,BrowserRouter} from "react-router-dom";
import Login from './container/Authentication';
import Home from "./container/homepage";
import userPage from "./container/userPage";
import AddRestaurant from "./container/Addrestaurant";
import AddOffers from "./pages/AddOffers";
import createBrowserHistory from 'history/createBrowserHistory';



class Routes extends Component {
  render() {
    const history = createBrowserHistory();
    return (
     <BrowserRouter history={history}>
     <Switch>
       <Route  exact path="/" component={Home}/>
       <Route path="/login" component={Login}/>
       <Route path="/userpage" component={userPage}/>
       <Route path="/addrestaurant" component={AddRestaurant}/>
       <Route path="/addoffer" component={AddOffers}/>
       <Route path="/editrestaurant" component={AddRestaurant}/>
       
        
       
     </Switch>
     </BrowserRouter>
    );
  }
}

export default Routes;
