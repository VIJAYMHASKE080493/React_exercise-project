import { useState } from 'react'
// import React from 'react';
import './App.css'
import Counter from './components/Counter'
import UserCard from "./components/UserCard";
import TodoList from './components/Todo';
import ProductCard from './components/Productcard';
import Profile from './components/Profile';
import TemperatureConverter from './components/TemperatureConverter';
import ParentComponent from './components/ParentComponent';
import LoginForm from './components/LoginForm';
import Timer from './components/Timer';
import Counter2 from './components/Counter2';


function App() {
  return (
    <div>
      {/* <Counter /> */}
      {/* <h1>Welcome to React State Management</h1> */}
      {/* <TodoList /> */}
      {/* <UserCard /> */}
      {/* <h1>Product List</h1> */}
      {/* <h1>Temperature Converter</h1>
      <TemperatureConverter /> */}
      {/* <h1>Sum of Two Numbers</h1>
      <ParentComponent /> */}
      {/* <ProductCard
        name="Laptop" 
        price={49999}
        description="High-performance laptop for all your work needs."
      /> */}
      {/* <h1>User Profiles</h1>
      <Profile username="Vijay" />
      <Profile /> Will show "Guest" by default */}
      {/* <LoginForm /> */}
      <Counter2 />
      <Timer />


    </div>
  );
}

export default App;
