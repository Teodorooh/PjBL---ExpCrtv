import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { buscarSkinPorId } from "../services/api";

function SkinDetails() {
    const { id } = useParams();
    const [skin, setSkin] = useState(null);
    const [erro, setErro] = useState("");

    useEffect(() => {
        const carregarDetalhes = async () => {
        try {
            const dados = await buscarSkinPorId(id);

            if (dados.erro) {
            setErro(dados.erro);
            return;
            }

            setSkin(dados);
        } catch (error) {
            setErro("Erro ao carregar detalhes da skin.");
        }
        };

        carregarDetalhes();
    }, [id]);

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
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div style={{ marginBottom: "28px" }}>
            <h1
                style={{
                fontSize: "42px",
                marginBottom: "8px",
                }}
            >
                DETALHES DA SKIN
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

            {skin && (
            <div
                style={{
                background: "linear-gradient(180deg, #1e293b 0%, #111827 100%)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
                borderRadius: "16px",
                padding: "28px",
                }}
            >
                <h2
                style={{
                    fontSize: "36px",
                    marginBottom: "20px",
                }}
                >
                {skin.nomeSkin}
                </h2>

                <p style={textoInfo}>
                <strong>Arma:</strong> {skin.arma}
                </p>

                <p style={textoInfo}>
                <strong>Raridade:</strong> {skin.raridade}
                </p>

                <p style={textoPreco}>
                R$ {Number(skin.preco).toFixed(2)}
                </p>

                <p style={textoInfo}>
                <strong>Coleção:</strong> {skin.colecao}
                </p>
            </div>
            )}
        </div>
        </div>
    );
    }

    const textoInfo = {
    color: "#cbd5e1",
    marginBottom: "10px",
    fontSize: "18px",
    };

    const textoPreco = {
    color: "#85f397",
    marginBottom: "14px",
    marginTop: "14px",
    fontWeight: "bold",
    fontSize: "22px",
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

    const botaoSecundario = {
    ...botaoBase,
    background: "linear-gradient(90deg, #334155 0%, #475569 100%)",
    };

export default SkinDetails;