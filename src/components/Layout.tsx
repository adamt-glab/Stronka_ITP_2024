import React, { ReactNode } from "react";
import Navigation from "./Navigation";
import TextPage from "./TextPage";
import TitlePage from "./TitlePage";
import Map from "./Map";

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
                <Map />
            </main>
        </>
    )
}
export default Layout;