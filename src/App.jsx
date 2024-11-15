import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home';
import Service from './components/Service';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';


const router=createBrowserRouter([
  {
    path:"/",
    element:<Navbar></Navbar>,

    children:[
      {
        path:"/",
        element:<Home></Home>
      },

      {
        path:"/service",
        element:<Service></Service>
      },

      {
        path:"/about",
        element:<About></About>
      },

      {
        path:"/resume",
        element:<Resume></Resume>
      },

      {
        path:"/portfolio",
        element:<Portfolio></Portfolio>
      },

      {
        path:"/blog",
        element:<Blog></Blog>
      },

      {
        path:"/contact",
        element:<Contact></Contact>
      }
    ]
  }
]);

export default function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}
