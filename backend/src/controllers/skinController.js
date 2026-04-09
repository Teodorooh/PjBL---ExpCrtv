const conexao = require("../config/db");

// GET /skins
const listarSkins = (req, res) => {
    const sql = "SELECT idskins AS idSkin, nomeSkin,arma,raridade,preco,colecao FROM skins";

    conexao.query(sql, (erro, resultados) => {
        if (erro) {
            console.error("Erro ao buscar skins:", erro);
            return res.status(500).json({ erro: "Erro ao buscar skins." });
        }

        res.status(200).json(resultados);
    });
};

// GET /skins/:id
const buscarSkinPorId = (req, res) => {
    const { id } = req.params;
    const sql = "SELECT idskins AS idSkin, nomeSkin,arma,raridade,preco,colecao FROM skins WHERE idSkins = ?";

    conexao.query(sql, [id], (erro, resultados) => {
        if (erro) {
            console.error("Erro ao buscar skin por ID:", erro);
            return res.status(500).json({ erro: "Erro ao buscar skin." });
        }

        if (resultados.length === 0) {
            return res.status(404).json({ erro: "Skin não encontrada." });
    }

    res.status(200).json(resultados[0]);
    });
};

// POST /skins
const criarSkin = (req, res) => {
    const { nomeSkin, arma, raridade, preco, colecao } = req.body;

    if (!nomeSkin || !arma || !raridade || !preco || !colecao) {
        return res.status(400).json({ erro: "Todos os campos são obrigatórios." });
    }
    if (isNaN(preco) || Number(preco) <= 0) {
        return res.status(400).json({ erro: "O preço deve ser um número maior que zero." });
    }

    const sql = `
        INSERT INTO skins (nomeSkin, arma, raridade, preco, colecao)
        VALUES (?, ?, ?, ?, ?)
    `;

    conexao.query(sql, [nomeSkin, arma, raridade, preco, colecao], (erro, resultado) => {
        if (erro) {
            console.error("Erro ao criar skin:", erro);
            return res.status(500).json({ erro: "Erro ao criar skin." });
        }

        res.status(201).json({
            mensagem: "Skin cadastrada com sucesso.",
            idInserido: resultado.insertId
        });
    });
};

// PUT /skins/:id
const atualizarSkin = (req, res) => {
    const { id } = req.params;
    const { nomeSkin, arma, raridade, preco, colecao } = req.body;

    if (!nomeSkin || !arma || !raridade || !preco || !colecao) {
        return res.status(400).json({ erro: "Todos os campos são obrigatórios." });
    }

    if (isNaN(preco) || Number(preco) <= 0) {
        return res.status(400).json({ erro: "O preço deve ser um número maior que zero." });
    }

    const sql = `
        UPDATE skins
        SET nomeSkin = ?, arma = ?, raridade = ?, preco = ?, colecao = ?
        WHERE idSkins = ?
    `;

    conexao.query(sql, [nomeSkin, arma, raridade, preco, colecao, id], (erro, resultado) => {
        if (erro) {
            console.error("Erro ao atualizar skin:", erro);
            return res.status(500).json({ erro: "Erro ao atualizar skin." });
        }

        if (resultado.affectedRows === 0) {
            return res.status(404).json({ erro: "Skin não encontrada para atualização." });
        }

        res.status(200).json({ mensagem: "Skin atualizada com sucesso." });
    });
};

// DELETE /skins/:id
const deletarSkin = (req, res) => {
    const { id } = req.params;
    const sql = "DELETE FROM skins WHERE idSkins = ?";

    conexao.query(sql, [id], (erro, resultado) => {
        if (erro) {
            console.error("Erro ao deletar skin:", erro);
            return res.status(500).json({ erro: "Erro ao deletar skin." });
        }

        if (resultado.affectedRows === 0) {
            return res.status(404).json({ erro: "Skin não encontrada para exclusão." });
        }

        res.status(200).json({ mensagem: "Skin deletada com sucesso." });
    });
};

module.exports = {
listarSkins,
buscarSkinPorId,
criarSkin,
atualizarSkin,
deletarSkin
};
