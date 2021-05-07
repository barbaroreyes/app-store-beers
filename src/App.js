import React,{useState,useEffect} from 'react'
import NamesList from './components/Form/nameslist'
import './App.css';
import {Switch,Route} from 'react-router-dom'
import Beers from './components/Cards/Cards';
import  Nav  from './components/Nav/nav';
import Home from './components/Home/home';
import Footer from './components/footer/footer'
import Cart from './components/Cart/cart';
import Clock from './components/clock/clock'



function App() {

  
const [cart , setCart] = useState([]);


const  addToCart = name => 
setCart([...cart,name])

const handledelete = (pos) => {
setCart(cart
.filter((name, index) => 
index !== pos)) 

 }
 const handleDeleteAll =()=> {
   setCart(0)
 }

return (
    <div className="App">
      <header>
        <Nav cart={cart} />
          <div>
          <Clock/>
          </div>
        </header>
      <Switch>
       <Route exact path="/">
         <Home/>
       </Route>
         <Route path="/beers">
         <Beers   addToCart={ addToCart}/>
         </Route>
         <Route path='/cart'>
         <Cart 
         cart={cart}
         handledelete ={ handledelete }
          />
         </Route>
         <Route path='/namelist'>
            <NamesList cart={cart} handleDeleteAll={ handleDeleteAll}/>
         </Route>
        </Switch>
     <Footer/>
   </div>
  );
}

export default App;
