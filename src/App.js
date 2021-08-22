import React from 'react'
import Categories from './components/Categories';
import Products from './components/Products';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
     <div>
       <Header/>
    <Categories/>
    <Products/>
    <Footer/>
  </div>
 );

}

export default App;
