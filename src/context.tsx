
// import React, {type ReactNode} from 'react'
// import { createContext, useContext } from 'react'

// interface ShopContextType {
//     backendUrl : string
// }

// export const ShopContext = createContext<ShopContextType | undefined>(undefined)

// interface ShopContextProviderProps {
//     children:ReactNode
// }

// const ShopContextProvider:React.FC <ShopContextProviderProps> = (props)=> {
//      const backendUrl = "https://mentorshipapp-1.onrender.com"

//         const Value : ShopContextType = {
//             backendUrl
//         }
//     return (
//         <ShopContext.Provider value={Value}>
//             {props.children}
//         </ShopContext.Provider>

       
//     )
       


// }

// export const useShopContext = ()=> {
//      return useContext(ShopContext)
// }

// export default ShopContextProvider

import React, { createContext, useContext, ReactNode } from 'react';

interface ShopContextType {
  backendUrl: string;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

interface ShopContextProviderProps {
  children: ReactNode;
}

const ShopContextProvider: React.FC<ShopContextProviderProps> = ({ children }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

  const value: ShopContextType = {
    backendUrl,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export const useShopContext = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShopContext must be used within a ShopContextProvider');
  }
  return context;
};

export default ShopContextProvider;
