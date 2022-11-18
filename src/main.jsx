import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Layout from './components/layout/Layout'
import Home from './pages/home/Home'
import Services from './pages/service/Services'
import Tuyendung from './pages/tuyendung/Tuyendung'
import About from './pages/about/About'
import Clientsprofit from './pages/clients-profit/Clientsprofit'
const routes = createRoutesFromElements(
  <Route element={<Layout/>}>
     <Route path='/' element={<Home />}/>
      <Route path='*' element={<div>Page not found</div>}/>
      <Route path='/dichvu' element={<Services/>}></Route>
      <Route path='/tuyendung' element={<Tuyendung/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path='/product/:id'></Route>
      <Route path='/clientsprofit' element={<Clientsprofit/>}></Route>
  </Route>
)
const router = createBrowserRouter(routes)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
)
