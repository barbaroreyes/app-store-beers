import React from 'react'
import NamesList from './components/Form/nameslist'
import './App.css';
import {Switch,Route} from 'react-router-dom'
import Cards from './components/Cards/Cards';
import  Nav  from './components/Nav/nav';
import Home from './components/Home/home';



function App() {


  return (
    <div className="App">
      <header><Nav/></header>
      <Switch>
       <Route exact path="/">
         <Home/>
       </Route>
         <Route path="/beers">
         <Cards/>
         </Route>
         <Route path='/namelist'>
            <NamesList/>
         </Route>
      </Switch>
  
       
     </div>
  );
}

export default App;
