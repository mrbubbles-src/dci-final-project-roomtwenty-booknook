import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import "./LevelExpBar.scss";

const LevelExpBar = ({ xpProzent }) => {
    const mainDiv = {
        width: "150px",
    };

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

// export default LevelExpBar;
