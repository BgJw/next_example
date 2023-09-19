import React from "react";
import Navbar from "../../components/Navbar";


interface LayoutProps {
    children: React.ReactNode,
}

const MainLayout = ({children}: LayoutProps) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default MainLayout;