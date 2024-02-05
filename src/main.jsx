import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import ErrorPage from './components/pages/Error.jsx'
import About from './components/pages/About.jsx'
import Portfolio from './components/pages/Portfolio.jsx'
import Contact from './components/pages/Contact.jsx'
import Resume from './components/pages/Resume.jsx'




const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: 'Portfolio',
        element: <Portfolio />,
      },
      {
        path: 'AboutMe',
        element: <About />,
      },
      {
        path: 'Contact',
        element: <Contact />,
      },
      {
        path: 'Resume',
        element: <Resume />,
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
