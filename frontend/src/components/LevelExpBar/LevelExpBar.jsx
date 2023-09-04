import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import "./LevelExpBar.scss";

const LevelExpBar = () => {
    const mainDiv = {
        width: "150px",
    };

    return (
        <div className="expLevel" style={mainDiv}>
            <ProgressBar
                completed={90}
                bgColor="red"
                animateOnRender={false}
                isLabelVisible={true}
            />
        </div>
    );
};

export default LevelExpBar;
