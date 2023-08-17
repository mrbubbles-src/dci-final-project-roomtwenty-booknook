import React from "react";
import Herosection from "../../components/Herosection/Herosection";
import LandingpageRegisterAndLogin from "../../components/LandingpageRegisterAndLogin/LandingpageRegisterAndLogin";
import LandingpageSearchNotLoggedIn from "../../components/LandingpageSearchNotLoggedIn/LandingpageSearchNotLoggedIn";

const LandingPageNotLoggedInPage = () => {
    return (
        <>
            <Herosection />
            <LandingpageSearchNotLoggedIn />
            <LandingpageRegisterAndLogin />
        </>
    );
};

export default LandingPageNotLoggedInPage;
