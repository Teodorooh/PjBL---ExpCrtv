const express = require("express");
const cors = require("cors");
const conexao = require("./src/config/db");
const skinRoutes = require("./src/routes/skinRoutes");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use("/", skinRoutes);

app.get("/", (req, res) => { res.send("API do Teodoro Market funcionando!");
});

app.listen(PORT, () => { console.log(`Servidor rodando na porta ${PORT}`);
});

