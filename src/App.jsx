import { useState } from 'react'
// import React from 'react';
import './App.css'
import Counter from './components/Counter'
import UserCard from "./components/UserCard";
import TodoList from './components/Todo';
import ProductCard from './components/Productcard';
import Profile from './components/Profile';


function App() {
  return (
    <div>
      {/* <Counter /> */}
      {/* <h1>Welcome to React State Management</h1> */}
      {/* <TodoList /> */}
      {/* <UserCard /> */}
      {/* <h1>Product List</h1> */}
      {/* <ProductCard
        name="Laptop" 
        price={49999}
        description="High-performance laptop for all your work needs."
      /> */}
      {/* <h1>User Profiles</h1>
      <Profile username="Vijay" />
      <Profile /> Will show "Guest" by default */}
    </div>
  );
}

export default App;
