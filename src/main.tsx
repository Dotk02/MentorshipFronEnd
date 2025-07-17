

// import { createRoot } from 'react-dom/client';
// import './index.css';
// import App from './App.tsx';
// import { BrowserRouter } from 'react-router-dom';
// import ShopContextProvider from './context.tsx';

// createRoot(document.getElementById('root')!).render(
//   <BrowserRouter>
//     <ShopContextProvider>
//       <App/>
//     </ShopContextProvider>
//   </BrowserRouter>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import ShopContextProvider from './pages/context.tsx'; // ✅ Make sure the path is correct

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

