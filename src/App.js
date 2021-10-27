import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";
import Product from "./components/pages/Products";
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch> 
        <Route path="/" component={Home} exact />
        <Route path="/services" component= {Services}  />
        <Route path="/products" component={Product} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
