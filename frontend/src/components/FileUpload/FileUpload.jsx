import { useContext, useState } from "react";
import { BookNookContext } from "../../context/BookNookProvider";

const FileUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [inputKey, setInputKey] = useState(Date.now());
    const { token } = useContext(BookNookContext);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append("file", selectedFile);

            try {
                const response = await fetch(
                    "http://localhost:3000/users/upload",
                    {
                        method: "POST",
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                        body: formData,
                    }
                );
                if (response.ok) {
                    console.log("Datei erfolgreich hochgeladen!");
                } else {
                    console.log("Fehler beim Upload...?!");
                }
            } catch (error) {
                console.error("Fehler beim Upload...:", error);
            } finally {
                // Reset the selected file state and input element
                setSelectedFile(null);
                setInputKey(Date.now());
            }
        }
    };

    return (
        <>
            <input
                type="file"
                key={inputKey}
                accept="image/*"
                onChange={handleFileChange}
            />
            <button onClick={handleUpload}>Upload</button>
        </>
    );
};

export default FileUpload;
