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
                bgColor="blue"
                baseBgColor="red"
                borderRadius="20px"
                height="13px"
                labelAlignment="center"
                labelSize="0.9rem"
                // completedClassName="exp-container"
                animateOnRender={false}
                isLabelVisible={true}
            />
        </div>
    );
};

export default LevelExpBar;
