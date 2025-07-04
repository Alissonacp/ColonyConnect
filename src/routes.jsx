import { BrowserRouter, Route, Routes } from "react-router-dom";

import CadUserPage from './pages/CadUserPage';
import LoginPage from './pages/LoginPage'
import MenuPage from './pages/MenuPage'
import HomePage from './pages/HomePage'
import ApiariosPage from './pages/ApiariosPage'
import ColmeiasPage from './pages/ColmeiasPage'
import ProducaoPage from "./pages/ProducaoPage";
import InspecaoPage from "./pages/InspecaoPage";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/caduserpage"  element={ <CadUserPage  /> }> </Route>
                <Route path="/"             element={ <LoginPage    /> }> </Route>
                <Route path="/menupage"     element={ <MenuPage     /> }> </Route>
                <Route path="/homepage"     element={ <HomePage     /> }> </Route>
                <Route path="/apiariospage" element={ <ApiariosPage /> }> </Route>
                <Route path="/colmeiaspage" element={ <ColmeiasPage /> }> </Route>
                <Route path="/producaopage" element={ <ProducaoPage /> }> </Route>
                <Route path="/inspecaopage" element={ <InspecaoPage /> }> </Route>
            </Routes>
        </BrowserRouter>
    )
}