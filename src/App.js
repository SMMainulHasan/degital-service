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
import Orders from './components/Dashboard/Orders/Orders';
import Review from './components/Dashboard/Review/Review';
import AddService from './components/AdminDashboard/AddSevice/AddService';
import AddAdmin from './components/AdminDashboard/AddAdmin/AddAdmin';
import OrderListForAdmin from './components/AdminDashboard/OrderListForAdmin/OrderListForAdmin';

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
          <PrivateRoute path="/orders">
            <Orders></Orders>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute path="/dash-right-side/:id">
            <OrderCheckout></OrderCheckout>
          </PrivateRoute>
          <PrivateRoute path="/add-service">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/add-admin">
            <AddAdmin></AddAdmin>
          </PrivateRoute>
          <PrivateRoute path="/order-list">
            <OrderListForAdmin></OrderListForAdmin>
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
