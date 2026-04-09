import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { criarSkin } from "../services/api";

function CreateSkin() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        nomeSkin: "",
        arma: "",
        raridade: "",
        preco: "",
        colecao: ""
    });

    const [erro, setErro] = useState("");

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        const resposta = await criarSkin(formData);

        if (resposta.erro) {
            setErro(resposta.erro);
            return;
        }

        navigate("/skins");
        } catch (error) {
        setErro("Erro ao cadastrar skin.");
        }
    };

    return (
        <div
        style={{
            minHeight: "100vh",
            background:
            "linear-gradient(180deg, #0b1020 0%, #111827 40%, #030712 100%)",
            color: "white",
            padding: "40px 30px",
        }}
        >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <div style={{ marginBottom: "28px" }}>
            <h1
                style={{
                fontSize: "42px",
                marginBottom: "8px",
                }}
            >
                CADASTRAR SKIN
            </h1>
            </div>

            <div style={{ marginBottom: "20px" }}>
            <Link to="/skins" style={botaoSecundario}>
                Voltar para Inventário
            </Link>
            </div>

            {erro && (
            <p
                style={{
                color: "#f87171",
                marginBottom: "20px",
                backgroundColor: "rgba(239,68,68,0.08)",
                border: "1px solid rgba(239,68,68,0.25)",
                padding: "12px 14px",
                borderRadius: "10px",
                }}
            >
                {erro}
            </p>
            )}

            <form
            onSubmit={handleSubmit}
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                background: "linear-gradient(180deg, #1e293b 0%, #111827 100%)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
                padding: "28px",
                borderRadius: "16px",
            }}
            >
            <input
                type="text"
                name="nomeSkin"
                placeholder="Nome da Skin"
                value={formData.nomeSkin}
                onChange={handleChange}
                style={inputStyle}
            />

            <input
                type="text"
                name="arma"
                placeholder="Arma"
                value={formData.arma}
                onChange={handleChange}
                style={inputStyle}
            />

            <input
                type="text"
                name="raridade"
                placeholder="Raridade"
                value={formData.raridade}
                onChange={handleChange}
                style={inputStyle}
            />

            <input
                type="number"
                step="0.01"
                name="preco"
                placeholder="Preço"
                value={formData.preco}
                onChange={handleChange}
                style={inputStyle}
            />

            <input
                type="text"
                name="colecao"
                placeholder="Coleção"
                value={formData.colecao}
                onChange={handleChange}
                style={inputStyle}
            />

            <button type="submit" style={botaoPrimario}>
                Cadastrar
            </button>
            </form>
        </div>
        </div>
    );
    }

    const inputStyle = {
    padding: "14px 16px",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.08)",
    backgroundColor: "#374151",
    color: "white",
    outline: "none",
    fontSize: "16px",
    };

    const botaoBase = {
    padding: "12px 18px",
    borderRadius: "10px",
    color: "white",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-block",
    };

    const botaoPrimario = {
    ...botaoBase,
    background: "linear-gradient(90deg, #2563eb 0%, #1d4ed8 100%)",
    };

    const botaoSecundario = {
    ...botaoBase,
    background: "linear-gradient(90deg, #334155 0%, #475569 100%)",
    };

export default CreateSkin;
