import { useContext, useState } from "react";
import "./fileupload.scss";
import { BookNookContext } from "../../context/BookNookProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
const FileUpload = () => {
    const backEndUrl = import.meta.env.VITE_BACKEND_URL;
    const [selectedFile, setSelectedFile] = useState(null);
    const [inputKey, setInputKey] = useState(Date.now());
    const { token, setProfileImageUploadPreview, profileImageUploadPreview } =
        useContext(BookNookContext);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
        setProfileImageUploadPreview({
            preview: URL.createObjectURL(e.target.files[0]),
            raw: e.target.files[0],
            button: true,
        });
    };

    const handleUpload = async () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append("file", selectedFile);

            try {
                const response = await fetch(`${backEndUrl}/users/upload`, {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    body: formData,
                });
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
                setProfileImageUploadPreview((prevState) => ({
                    ...prevState,
                    button: false,
                }));
            }
        }
    };

    return (
        <>
            <input
                id="upload-button"
                type="file"
                key={inputKey}
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleFileChange}
            />
            {profileImageUploadPreview.button ? (
                <button id="upload-image" onClick={handleUpload}>
                    {<FontAwesomeIcon icon={faArrowUpFromBracket} />}
                </button>
            ) : (
                ""
            )}
        </>
    );
};

export default FileUpload;
