import React from "react";
import SearchForm from "../../components/SearchForm/SearchForm";

const Search = () => {
    return (
        <>
            <SearchForm
                title={"Suche"}
                formClassName={"searchbar-form"}
                searchBarId={"searchbar"}
                searchSubmitId={"search-submit"}
                amountShown={[0]}
            />
        </>
    );
};

export default Search;
