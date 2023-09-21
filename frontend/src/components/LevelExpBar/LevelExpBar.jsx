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
                completed={xpProzent}
                width="95%"
                // height="3rem"
            />
        </div>
    );
};

export default LevelExpBar;
