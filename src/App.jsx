import React from "react";
import  './index.css';
import {BrowserRouter as Router ,Switch ,Route} from 'react-router-dom'
import Navabar from "./common/Navbar/Navabar";
import Landing from "./Commponent/landing";
import Banner from "./component1/Banner";
import Gift from "./component2/Gift";
import About from "./component3/About";
import Bp from "./component4/Bp";
import Wee from "./component5/Wee";
import Promo from "./component6/Promo";
import Footer from './common/Footer/Footer';
import Contact from "./component5/Contact/Contact";
const App = () => {

    return (
       <>
       <Router>
          <Navabar/>
          <Switch>
            <Route path='/' exact component={Landing}></Route>
            <Route path='/about' exact component={About}></Route>
            <Route path='/sign' exact component={Banner}></Route>
            <Route path='/printing' exact component={Bp}></Route>
            <Route path='/wedding' exact component={Wee}></Route>
            <Route path='/promotion' exact component={Promo}></Route>
            <Route path='/gift' exact component={Gift}></Route>
            <Route path='/contact' exact component={Contact}></Route>
          </Switch>
          <Footer/>
       </Router>
       </>
    )
}


export default App;




