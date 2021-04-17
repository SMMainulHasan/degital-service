import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import { createContext, useState } from 'react';
import OrderCheckout from './components/Dashboard/OrderCheckout/OrderCheckout';

export const userContext = createContext();

function App() {
  const [user, setUser] = useState({ name: "", email: "", displayPic: "" });

  
  return (

    <userContext.Provider value={[user, setUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute path="/order-checkout/:id">
          <OrderCheckout></OrderCheckout>
        </PrivateRoute>
        <Route path="*">
          <PageNotFound></PageNotFound>
        </Route>
      </Switch>
    </Router>
    </userContext.Provider>
  );
}

export default App;
