import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import  './bootstraptheme.min.css' ;
import MyNav from './app/MyNav';
import { Outlet } from 'react-router-dom';
import MyHome from './app/MyHome';
import MyFooter from './app/MyFooter';



function App() {
  return (
    <div className="App" >
     <MyNav/>
     
      <Outlet/>
      <MyFooter/>
    </div>
  );
}

export default App;
