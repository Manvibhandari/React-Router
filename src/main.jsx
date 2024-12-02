import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './assets/components/Home/Home.jsx'
import About from './assets/components/About/About.jsx'
import Contact from './assets/components/Contact/Contact.jsx'
import Github from './assets/components/Github/Github.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home />
      },

      {
        path: "about",
        element: <About />
      },

      {
        path: "contact",
        element: <Contact />  
      },

      {
        path: "github",
        element: <Github />
      }

   
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  < RouterProvider router={router} />
  </StrictMode>,
)
