import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import Router from "./router/Router.js";
import DarkModeContextProvider from './context/DarkMode.js';
createRoot(document.getElementById('root')!).render(
  <DarkModeContextProvider>
    <RouterProvider router={Router} />
  </DarkModeContextProvider>
)
