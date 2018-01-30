import React, { Component } from 'react';
import { Switch,Route,BrowserRouter} from "react-router-dom";
import Login from './container/Authentication';
import Home from "./container/homepage";
import AddOffer from "./container/userPage";
import AddRestaurant from "./container/Addrestaurant";
import AddMenu from "./pages/AddOffers";
import createBrowserHistory from 'history/createBrowserHistory';



class Routes extends Component {
  render() {
    const history = createBrowserHistory();
    return (
     <BrowserRouter history={history}>
     <Switch>
       <Route  exact path="/" component={Home}/>
       <Route path="/login" component={Login}/>
       <Route path="/addoffer" component={AddOffer}/>
       <Route path="/addrestaurant" component={AddRestaurant}/>
       <Route path="/addmenu" component={AddMenu}/>
       <Route path="/editrestaurant" component={AddRestaurant}/>
       
        
       
     </Switch>
     </BrowserRouter>
    );
  }
}

export default Routes;
