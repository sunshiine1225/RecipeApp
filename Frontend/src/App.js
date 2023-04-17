import React from 'react';
import AddRecipe from './AddRecipe';
import './App.css';
import Home from './home';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import ViewRecipe from './ViewRecipe';
import UpdateRecipe from './UpdateRecipe';

function App() {
  return (

    <div className="App">
          
          <header className="App-header">
      </header>
    <BrowserRouter>
    <Routes>
    
    
      <Route exact  path="/" element ={<Home/>}>
      
      </Route>
      <Route exact path = '/addrecipe' element={<AddRecipe/>}>
      </Route>
      <Route exact path = '/viewRecipe/:id' element={<ViewRecipe/>}>
</Route>
<Route exact path = '/updateRecipe/:id' element={<UpdateRecipe/>}>
</Route>
    </Routes>
    </BrowserRouter>
  </div>
);

}

export default App;
