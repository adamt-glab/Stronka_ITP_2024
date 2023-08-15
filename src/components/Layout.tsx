import React, { ReactNode } from "react";
import Navigation from "./Navigation";
import TextPage from "./TextPage";
import TitlePage from "./TitlePage";

interface IProps {
    children?: ReactNode
}

const Layout: React.FC<IProps> = ({ children }) => {
    return (
        <>
            <Navigation />
            <main>
                <TitlePage />
                <TextPage />
            </main>
        </>
    )
}
export default Layout;