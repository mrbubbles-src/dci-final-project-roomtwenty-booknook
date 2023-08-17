import React from "react";
import Herosection from "../../components/Herosection/Herosection";
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
            />
        </>
    );
};

export default LandingPageNotLoggedInPage;
