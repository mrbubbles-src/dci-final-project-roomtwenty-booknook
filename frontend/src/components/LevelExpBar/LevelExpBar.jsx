import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import "./LevelExpBar.scss";

const LevelExpBar = ({ xpProzent }) => {
    const mainDiv = {
        width: "180px",
    };

    return (
        <div className="expLevel" style={mainDiv}>
            <ProgressBar
                completed={xpProzent}
                bgColor="#fcd8be"
                baseBgColor="#554945"
                borderRadius="20px"
                labelAlignment="center"
                labelSize="1.4rem"
                labelColor="#37323e"
                height="3rem"
                className="progressBar"
                animateOnRender={true}
                isLabelVisible={true}
            />
        </div>
    );
};

export default LevelExpBar;
