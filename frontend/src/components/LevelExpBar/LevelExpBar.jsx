import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import "./LevelExpBar.scss";

const LevelExpBar = ({ xpProzent }) => {
    return (
        <div className="expLevel">
            <ProgressBar
                completed={xpProzent}
                bgColor="#fcd8be"
                baseBgColor="#554945"
                borderRadius="20px"
                labelAlignment="center"
                labelSize="2.8rem"
                labelColor="#37323e"
                height="5rem"
                className="progressBar"
                animateOnRender={true}
                isLabelVisible={true}
            />
        </div>
    );
};

export default LevelExpBar;
