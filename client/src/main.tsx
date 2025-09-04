import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, createRoutesFromElements,RouterProvider, createBrowserRouter  } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import HomePage from './pages/HomePage.tsx'
import LoginPage from './pages/LoginPage.tsx'
import Register from './pages/Register.tsx'
import Contact from './pages/Contact.tsx'
import AboutPage from './pages/AboutPage.tsx'
import Dashboard from './pages/Dashboard.tsx'
 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
      <Route index element={<HomePage/>}/> 
      <Route path='login' element={<LoginPage/>}/>
      <Route path ='signup' element={<Register/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='about' element={<AboutPage/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
