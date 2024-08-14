import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Article from "./pages/Article";
import NotFound from "./pages/NotFound";
import Questions from "./pages/Questions";
import AboutUs from "./pages/AboutUs";
import MoreContent from "./pages/MoreContent";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> } ></Route>
                <Route path="*" element={ <NotFound /> } ></Route>
                <Route path="/article/:id" element={ <Article /> } ></Route>
                <Route path="/questions" element={ <Questions /> } ></Route>
                <Route path="/aboutUs" element={ <AboutUs /> } ></Route>
                <Route path="/moreContent" element={ <MoreContent /> } ></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;