import React from "react";
import "./LandingpageRegisterAndLogin.scss";

const LandingpageRegisterAndLogin = () => {
    return (
        <div className="text-container">
            <p className="text intro">
                Wenn Du alle unsere Features nutzen möchtest registriere dich
                doch bei uns und lefe eigene Bücherlisten an, vernetze dich mit
                gleichgesinnten und vieles mehr!
            </p>

            <p className="text register">
                Zum registrierungsformular geht es <a href="/#">hier entlang</a>
            </p>
            <p className="text login">
                Bist du bereits registriert? Dann log dich <a href="/#">hier</a>{" "}
                ein
            </p>
        </div>
    );
};

export default LandingpageRegisterAndLogin;
