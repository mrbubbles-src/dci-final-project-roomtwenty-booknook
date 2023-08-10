import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import MenuBar from "../components/MenuBar/MenuBar";
import Footer from "../components/Footer/Footer";

const SharedLayout = () => {
    return (
        <>
            <Navbar /> // transparenter hintergrund; farbig ab Desktop größe
            <main className="main-container">
                <Outlet />
            </main>
            <MenuBar /> // ausgeschaltet ab Desktop größe
            <Footer />
        </>
    );
};

export default SharedLayout;
