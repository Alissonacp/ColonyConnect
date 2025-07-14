import { BrowserRouter, Route, Routes } from "react-router-dom";

import CadUserPage from './pages/CadUserPage';
import LoginPage from './pages/LoginPage';
import MenuPage from './pages/MenuPage';
import HomePage from './pages/HomePage';
import ApiariosPage from './pages/ApiariosPage';
import CadApiarioPage from "./pages/CadApiarioPage";
import ApiarioInfoPage from './pages/ApiarioInfoPage';
import ColmeiasPage from './pages/ColmeiasPage';
import ProducaoPage from './pages/ProducaoPage';
import InspecaoPage from './pages/InspecaoPage';
import LembretesPage from "./pages/LembretesPage";
import SobrePage from "./pages/SobrePage";
import AjudaPage from "./pages/AjudaPage";
import UserPage from "./pages/UserPage";
import CadInspecaoPage from "./pages/CadInspecaoPage";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />}> </Route>
                <Route path="/caduserpage" element={<CadUserPage />}> </Route>
                <Route path="/menupage" element={<MenuPage />}> </Route>
                <Route path="/homepage" element={<HomePage />}> </Route>
                <Route path="/apiariospage" element={<ApiariosPage />}> </Route>
                <Route path="/colmeiaspage" element={<ColmeiasPage />}> </Route>
                <Route path="/producaopage" element={<ProducaoPage />}> </Route>
                <Route path="/inspecaopage" element={<InspecaoPage />}> </Route>
                <Route path="/lembretespage" element={<LembretesPage />}> </Route>
                <Route path="/sobrepage" element={<SobrePage />}> </Route>
                <Route path="/ajudapage" element={<AjudaPage />}> </Route>
                <Route path="/userpage" element={<UserPage />}> </Route>
                <Route path="/cadapiariopage" element={<CadApiarioPage />}> </Route>
                <Route path="/cadinspecaopage" element={<CadInspecaoPage />}> </Route>

                <Route path="/apiarioinfopage/:id" element={<ApiarioInfoPage />}> </Route>
               
            </Routes>
        </BrowserRouter>
    )
}