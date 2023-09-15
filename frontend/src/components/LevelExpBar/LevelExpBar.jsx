import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const LevelExpBar = ({ xpProzent }) => {
    return (
        <div className="expLevel">
            <ProgressBar
                className="progressBar"
                completed={xpProzent}
                bgColor="#fcd8be"
                baseBgColor="#554945"
                borderRadius="20px"
                labelAlignment="center"
                labelSize="1.3rem"
                labelColor="#37323e"
                height="3rem"
                animateOnRender={true}
                isLabelVisible={true}
            />
        </div>
    );
};

export default LevelExpBar;
