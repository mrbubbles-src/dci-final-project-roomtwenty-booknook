import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

import "../UserStatistic/userstatistic.scss";

const LevelExpBar = ({ xpProzent }) => {
    return (
        <div className="expbar">
            <ProgressBar
                animateOnRender={true}
                isLabelVisible={false}
                bgColor="#02c1c2"
                baseBgColor="#f0eedc"
                // className="wrapper"
                // labelAlignment="center"
                // barContainerClassName="container"
                //completedClassName="barCompleted"
                // labelClassName="label"
                completed={xpProzent}
                width="95%"
                margin="0.5rem"
            />
        </div>
    );
};

export default LevelExpBar;
