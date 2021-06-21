import Cursor from "@components/Cursor";
import Nav from "@components/Nav";
import React from "react";

const Layout: React.FC = ({ children }: any) => {
    return (
        <div className="relative overflow-x-hidden bg-lightPrimary dark:bg-darkPrimary">
            <Nav />
            <Cursor />
            {children}
        </div>
    );
};
export default Layout;
