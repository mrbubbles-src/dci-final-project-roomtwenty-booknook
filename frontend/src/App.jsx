import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookNookProvider from "./context/BookNookProvider";
import "./scss/App.scss";
import SharedLayout from "./pages/SharedLayout";
import LandingPageNotLoggedInPage from "./pages/LandingPageNotLoggedInPage/LandingPageNotLoggedInPage";
import NotFound from "./pages/NotFound/NotFound";
import ScrollToTop from "./helpers/ScrollToTop";
import Datenschutz from "./pages/Datenschutz/Datenschutz";
import Impressum from "./pages/Impressum/Impressum";

function App() {
    return (
        <BookNookProvider>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<SharedLayout />}>
                        {/* die jeweiligen pages routes hier zwische rein */}
                        <Route index element={<LandingPageNotLoggedInPage />} />
                        <Route path="Datenschutz" element={<Datenschutz />} />
                        <Route path="Impressum" element={<Impressum />} />
                        {/* die jeweiligen pages routes hier zwische rein */}
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </BookNookProvider>
    );
}

export default App;
