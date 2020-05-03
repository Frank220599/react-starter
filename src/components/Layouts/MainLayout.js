import React from 'react';
import Header from "../Main/Header/Header";
import Footer from "../Main/Footer";

const MainLayout = (Component) => {
    return () => {
        return (
            <div className={"body"}>
                <Header/>
                <Component/>
                <Footer/>
            </div>
        );
    };
};

export default MainLayout;