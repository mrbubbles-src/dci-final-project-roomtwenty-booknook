import React, { useContext } from "react";
import { BookNookContext } from "../../context/BookNookProvider";
import LandingPageNotLoggedInPage from "../../pages/LandingPageNotLoggedInPage/LandingPageNotLoggedInPage";
import UserProfile from "../../pages/UserProfile/UserProfile";

function LandingpageChanger() {
    const { isLoggedIn } = useContext(BookNookContext);

    if (isLoggedIn) {
        return <UserProfile />;
    } else {
        return <LandingPageNotLoggedInPage />;
    }
}

export default LandingpageChanger;
