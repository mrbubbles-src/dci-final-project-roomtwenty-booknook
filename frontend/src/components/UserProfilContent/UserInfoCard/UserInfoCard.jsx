import React, { useState } from "react";
// import { useUpdateEffect } from "react-use";
import "./UserInfoCard.scss";
// import LevelExpBar from "../../LevelExpBar/LevelExpBar";
import UserStatistic from "../../UserStatistic/UserStatistic";
// import { BookNookContext } from "../../../context/BookNookProvider";
// import { faHand } from "@fortawesome/free-solid-svg-icons";

const UserInfoCard = ({
    readingRank,
    alreadyRead,
    username,
    profileImage,
    readingChallengeCurrent,
    readingLevel,
}) => {
    // const { token } = useContext(BookNookContext);
    const alreadyReadList = alreadyRead || [];
    // const [userReadingRank, setReadingRank] = useState(readingRank);
    const [userLevel, setUserLevel] = useState(readingLevel);

    const [alreadyReadLength, setAlreadyReadLength] = useState(
        alreadyReadList.length
    );

    // Berechne xpProzent basierend auf bereits gelesenen Büchern
    // const xpProzent = (alreadyReadLength % 3) * 33.3;
    //level = math.floor(alreadyReadLength / 3)
    // useUpdateEffect(() => {
    //     // Zum Aktualisieren der Exp-Bar
    //     // experienceLevelBar(xpProzent);
    //     console.log("useUpdateEffect:", alreadyReadLength);
    //     // Wenn 3 Bücher gelesen wurden, erhöhe das Level
    //     if (alreadyReadLength % 3 === 0) {
    //         // bestimmt den Rank namen theoretisch
    //         // setReadingRank((prevRank) => prevRank + 1);
    //         //level aufstieg
    //         //setUserLevel(userLevel + 1);
    //         // experienceLevelBar(0);
    //     }
    // }, [alreadyReadLength]);

    // useEffect(() => {
    //     console.log("UseEffect:", userLevel);
    //     // console.log("READING-LEVEL:", readingLevel);
    //     async function handleUpdateReadingLevelFetch() {
    //         if (userLevel != readingLevel) {
    //             const body = {
    //                 readingLevel: userLevel,
    //             };
    //             try {
    //                 const response = await fetch(
    //                     "http://localhost:3000/users/updateUser",
    //                     {
    //                         method: "PUT",
    //                         headers: {
    //                             "Content-Type": "application/json",
    //                             Authorization: `Bearer ${token}`,
    //                         },
    //                         body: JSON.stringify(body),
    //                     }
    //                 );
    //                 const responsemsg = await response.json();
    //                 console.log(responsemsg);
    //             } catch (error) {
    //                 throw new Error(error);
    //             }
    //             //update mit fetch backend route ihalt object prop name userLevel
    //             //r4eadinglevcel:state name userLevel
    //             //findOneAnd update
    //             //useeffect wird beim wersten mal schon ausgeführt wenn ic das nicht will check ich mit if darum ob userlevel != readinglevel
    //         }
    //     }
    //     handleUpdateReadingLevelFetch();
    // }, [userLevel]);

    return (
        <UserStatistic
            username={username}
            profileImage={profileImage}
            readingChallengeCurrent={readingChallengeCurrent}
            userLevel={userLevel}
            alreadyReadLength={alreadyReadLength}
        />
    );
};

export default UserInfoCard;

// const UserInfoCard = ({ username, profileImage, readingChallengeCurrent }) => {
//     return (
//         <UserStatistic
//             username={username}
//             profileImage={profileImage}
//             readingChallengeCurrent={readingChallengeCurrent}
//         />
//     );
// };
// export default UserInfoCard;
