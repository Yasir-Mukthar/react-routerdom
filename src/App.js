import React from 'react';
import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from 'react-router-dom';
import Home from './Home';
import About, {githubProfile} from './About';
import NavLayout from './NavLayout';
import "./App.css"
import Contact from './Contact';
import User from './User';
import Email from './Email';
import Phone from './Phone';

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path='/' element={<NavLayout/>}>
      <Route path="/" element={<Home/>} />
      <Route loader={githubProfile} path="about" element={<About/>} />
      <Route path="contact" element={<Contact/>} >
      <Route path='email' element={<Email/>} />
      <Route path='phone' element={<Phone/>} />

      </Route>
     <Route path='user/:userid' element={<User/>} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
