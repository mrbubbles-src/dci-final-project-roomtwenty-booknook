import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import "./singleBookDetails.scss";

const SingleBookDetails = () => {
    const { id } = useParams();
    const [isSingleBookLoading, setIsSingleBookLoading] = useState(true);
    const [singleBookData, setSingleBookData] = useState({});
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                `http://localhost:3000/books/singlebook/${id}`
            );
            const data = await response.json();
            setSingleBookData(data);
            setIsSingleBookLoading(false);
        }
        fetchData();
    }, []);
    if (isSingleBookLoading) {
        return <LoadingSpinner />;
    }

    return (
        <>
            <h2>{singleBookData.volumeInfo.title}</h2>
            {/* <h1>test</h1> */}
        </>
    );
};

export default SingleBookDetails;
