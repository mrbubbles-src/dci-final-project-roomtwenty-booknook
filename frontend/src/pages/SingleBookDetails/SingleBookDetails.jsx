import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

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
            console.log(data, "sbd");
        }
        fetchData();
    }, []);
    if (isSingleBookLoading) {
        return <LoadingSpinner />;
    }

    return (
        <div>
            <h1>{singleBookData.volumeInfo.title}</h1>
            {/* <h1>test</h1> */}
        </div>
    );
};

export default SingleBookDetails;
