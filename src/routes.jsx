import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CadUserPage from "./pages/CadUserPage";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <CadUserPage /> }> </Route>

            </Routes>
        </BrowserRouter>
    )
}