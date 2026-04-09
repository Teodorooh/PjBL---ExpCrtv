const express = require("express");
const router = express.Router();

const { listarSkins, 
        buscarSkinPorId,
        criarSkin,
        atualizarSkin,
        deletarSkin
} = require("../controllers/skinController");

router.get("/skins", listarSkins);
router.get("/skins/:id", buscarSkinPorId);
router.post("/skins", criarSkin);
router.put("/skins/:id", atualizarSkin);
router.delete("/skins/:id", deletarSkin);

module.exports = router;
