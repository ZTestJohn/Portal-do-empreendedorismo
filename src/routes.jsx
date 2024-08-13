import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Article from "./pages/Article";
import NotFound from "./pages/NotFound";
import Questions from "./pages/Questions";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> } ></Route>
                <Route path="/questions" element={ <Questions /> } ></Route>
                <Route path="/article/:id" element={ <Article /> } ></Route>
                <Route path="*" element={ <NotFound /> } ></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;