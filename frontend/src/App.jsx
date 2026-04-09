import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SkinsList from "./pages/SkinsList";
import SkinDetails from "./pages/SkinDetails";
import CreateSkin from "./pages/CreateSkin";
import EditSkin from "./pages/EditSkin";

function App() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skins" element={<SkinsList />} />
            <Route path="/skins/:id" element={<SkinDetails />} />
            <Route path="/skins/novo" element={<CreateSkin />} />
            <Route path="/skins/editar/:id" element={<EditSkin />} />
        </Routes>
    </BrowserRouter>
    );
}

export default App;
