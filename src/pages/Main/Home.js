import React from 'react';

import HomeSection from "../../sections/Main/Home"

const Home = () => {
    return (
        <>
            <HomeSection.NewItemsSlider/>
            <HomeSection.NewItemsTab/>
            <HomeSection.ExpectedPremiere/>
            <HomeSection.OurPartners/>
        </>
    );
};



export default Home;