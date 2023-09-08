import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import "./LevelExpBar.scss";

const LevelExpBar = ({ xpProzent }) => {
    const mainDiv = {
        width: "150px",
    };

    const updateReadPages = async (userId, newPages) =>{
        const user = await getUserById(userId);
        user.readPages += newPages;
        await user.save();
    }    

    return (
        <div className="expLevel" style={mainDiv}>
            <ProgressBar
                completed={xpProzent}
                bgColor="red"
                animateOnRender={false}
                isLabelVisible={true}
            />
        </div>
    );
};

export default LevelExpBar;
