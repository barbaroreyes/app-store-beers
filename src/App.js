import React,{useState} from 'react'
import NamesList from './components/Form/nameslist'
import './App.css';
import {Switch,Route} from 'react-router-dom'
import Cards from './components/Cards/Cards';
import  Nav  from './components/Nav/nav';
import Home from './components/Home/home';
import Footer from './components/footer/footer'
import Cart from './components/Cart/cart';


function App() {
  
  const [cart , setCart] = useState([])

const  addToCart = name => 
setCart([...cart,name])


 const handledelete = (pos) => {

   const updatedCart = cart.filter((name, index) => index !== pos)
    setCart(updatedCart)

 }
  
  



return (
    <div className="App">
      <header><Nav/></header>
      <Switch>
       <Route exact path="/">
         <Home/>
       </Route>
         <Route path="/beers">
         <Cards   addToCart={ addToCart}/>
         </Route>
         <Route path='/cart'>
         <Cart 
         cart= {cart}
         handledelete ={ handledelete }
          />
         </Route>
         <Route path='/namelist'>
            <NamesList/>
         </Route>
        </Switch>
    <Footer/>
       
     </div>
  );
}

export default App;
