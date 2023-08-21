import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleBookDetails = () => {
    const { id } = useParams();
    const [singleBookData, setSingleBookData] = useState({});
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                `http://localhost:3000/books/singlebook/${id}`
            );
            const data = await response.json();
            setSingleBookData(data);
        }
    }, []);

    return (
        <div>
            <h1>{id}</h1>
        </div>
    );
};

export default SingleBookDetails;
