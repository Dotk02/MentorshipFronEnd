// //import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'
// import { BrowserRouter } from 'react-router-dom'
// import ShopContextProvider from './context.tsx'
// import Login from "./pages/auth/Login"; // u jst change this

// createRoot(document.getElementById('root')!).render(
//     <BrowserRouter>
//     <ShopContextProvider>

//         <App />

//     </ShopContextProvider>

//     </BrowserRouter>
  
// )

import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import ShopContextProvider from './context.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </BrowserRouter>
);
