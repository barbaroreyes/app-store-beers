import React,{useState} from 'react'
import NamesList from './components/Form/nameslist'
import './App.css';
import {Switch,Route} from 'react-router-dom'
import Beers from './components/Cards/Cards';
import  Nav  from './components/Nav/nav';
import Home from './components/Home/home';
import Footer from './components/footer/footer'
import Cart from './components/Cart/cart';



function App() {
  
const [cart , setCart] = useState([]);
const  addToCart = name => 
setCart([...cart,name])

const handledelete = (pos) => {
setCart(cart
.filter((name, index) => 
index !== pos)) 

 }
 const deleteAll = ()=>{
   setCart(cart)
   console.log('delete')
 }

return (
    <div className="App">
      <header>
        <Nav cart={cart}/>
          <div>
          
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
         deleteAll= {deleteAll}
          />
         </Route>
         <Route path='/namelist'>
            <NamesList cart={cart}/>
         </Route>
        </Switch>
     <Footer/>
   </div>
  );
}

export default App;
