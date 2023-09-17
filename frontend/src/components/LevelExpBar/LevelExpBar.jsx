import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import "./LevelExpBar.scss";
import "../UserStatistic/userstatistic.scss";

const LevelExpBar = ({ xpProzent }) => {
    return (
        <div className="expLevel">
            <ProgressBar
                bgColor="#fcd8be"
                baseBgColor="#554945"
                className="wrapper"
                labelAlignment="center"
                barContainerClassName="container"
                //completedClassName="barCompleted"
                labelClassName="label"
                completed={xpProzent}
                animateOnRender={true}
                isLabelVisible={true}
            />
        </div>
    );
};

export default LevelExpBar;
