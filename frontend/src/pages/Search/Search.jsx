import React from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import "./search.scss";
const Search = () => {
    return (
        <>
            <SearchForm
                title={"Suche"}
                formClassName={"searchbar-form search-page"}
                searchBarId={"searchbar"}
                searchSubmitId={"search-submit"}
                amountShown={[0]}
            />
        </>
    );
};

export default Search;
