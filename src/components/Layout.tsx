import React, { ReactNode } from "react";
import Navigation from "./Navigation";
import TextPage from "./TextPage";

interface IProps {
   children?: ReactNode
}

const Layout: React.FC<IProps> = ({children}) => {
   return (
       <>
           <Navigation />
           <main>
               {children}
           </main>
       </>
   )
}
export default Layout;