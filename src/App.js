/*
javaScript functions that return jsx
simple and easier 
don't need to manage state or lifecycle methods
*/
import About from "./components/About";
import AddNewItem from "./components/AddNewItem";
import Contact from './components/Contact';
import DisplayAllItem from './components/DisplayAllItems';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import UpdateItem from './components/UpdateItem';
import {Routes , Route } from 'react-router-dom';

function App(){
  return (
    <>
    <Navbar/>




    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/updateItem/:id" element={<UpdateItem/>}/>
      <Route path="/add-new-item" element={<AddNewItem/>}/>
      <Route path="/displayAllItem" element={<DisplayAllItem/>}/>
      

    </Routes>

    <Contact/>
    <Footer/>
   
    </>
  )
}

export default App;