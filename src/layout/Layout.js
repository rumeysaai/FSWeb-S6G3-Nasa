import React from "react";
import NavMenu from "../components/NavMenu.js";
import ContentPage from "../views/ContentPage";
import "./Layout.css";

const Layout = (props) => {


    return (
        <div className="main-container">
            <div className="header">
            </div>
            <div className="body">
                <div className="nav-bar">
                    <NavMenu />
                </div>
                <div className="page-content">
                    <ContentPage />
                </div>
            </div>
            <div className="footer">
            
            </div>
        </div>

    );
};

export default Layout;