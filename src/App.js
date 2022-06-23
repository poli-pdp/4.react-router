import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CabanasPage from "./pages/CabanasPage";
import CasasPage from "./pages/CasasPage";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import IslasPage from "./pages/IslasPage";
import NotFoundPage from "./pages/NotFoundPage";
import UsuarioPage from "./pages/UsuarioPage";
import UsuariosPage from "./pages/UsuariosPage";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/casas" element={<CasasPage />} />
        <Route path="/dashboard/*" element={<DashboardPage />}>
          <Route path="welcome" element={<p>welcome</p>} />
        </Route>
        <Route path="/islas" element={<IslasPage />} />
        <Route path="/cabanas" element={<CabanasPage />} />
        <Route path="/usuarios" element={<UsuariosPage />} />
        <Route path="/usuario/:id" element={<UsuarioPage />} />
        <Route path="/users" element={<Navigate to="/usuarios" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
