import React from "react";
import Herosection from "../../components/Herosection/Herosection";
import LandingpageRegisterAndLogin from "../../components/LandingpageRegisterAndLogin/LandingpageRegisterAndLogin";
import SearchForm from "../../components/SearchForm/SearchForm";


const LandingPageNotLoggedInPage = () => {
    return (
        <>
            <Herosection />
            <SearchForm
                title={"Probier unsere Büchersuche doch schon einmal aus"}
                formClassName={"searchbar-form"}
                searchBarId={"searchbar"}
                searchSubmitId={"search-submit"}
                amountShown={[0, 3]}
            />
            <LandingpageRegisterAndLogin />
        </>
    );
};

export default LandingPageNotLoggedInPage;
