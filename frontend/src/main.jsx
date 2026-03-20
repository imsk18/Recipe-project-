import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'

import './index.css'
import App from './App.jsx'
import RecipeContextProvider from './context/RecipeContext.jsx'


createRoot(document.getElementById('root')).render(
 <RecipeContextProvider>
     <BrowserRouter>
   <App />
   <ToastContainer/>
  </BrowserRouter>
 </RecipeContextProvider>
  

  
 
)
