import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import Router from './router/Router.js';
import DarkModeContextProvider from './context/DarkMode.js';
import { store } from "./hooks/store/store.js"
import { Provider } from 'react-redux';
createRoot(document.getElementById('root')!).render(
  <DarkModeContextProvider >
    <Provider store={store}>
      <RouterProvider router={Router} />
    </Provider>
  </DarkModeContextProvider>
)
