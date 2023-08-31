import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookNookProvider from "./context/BookNookProvider";
import "./scss/App.scss";
import SharedLayout from "./pages/SharedLayout";

import NotFound from "./pages/NotFound/NotFound";
import ScrollToTop from "./helpers/ScrollToTop";

import Kontaktformular from "./pages/Kontaktformular/Kontaktformular";
import Datenschutz from "./pages/Datenschutz/Datenschutz";
import Impressum from "./pages/Impressum/Impressum";

import Search from "./pages/Search/Search";
import SingleBookDetails from "./pages/SingleBookDetails/SingleBookDetails";
import LandingpageChanger from "./components/LandingpageChanger/LandingpageChanger";

function App() {
    return (
        <BookNookProvider>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path='/' element={<SharedLayout />}>
                        {/* die jeweiligen pages routes hier zwische rein */}
                        <Route index element={<LandingpageChanger />} />
                        <Route
                            path='kontaktformular'
                            element={<Kontaktformular />}
                        />

                        <Route path='datenschutz' element={<Datenschutz />} />
                        <Route path='impressum' element={<Impressum />} />

                        <Route path='suche' element={<Search />} />
                        <Route
                            path='buch/:id'
                            element={<SingleBookDetails />}
                        />

                        {/* die jeweiligen pages routes hier zwische rein */}
                        <Route path='*' element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </BookNookProvider>
    );
}

export default App;
