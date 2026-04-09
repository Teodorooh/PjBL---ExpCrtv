import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listarSkins, deletarSkin } from "../services/api";

function SkinsList() {
    const [skins, setSkins] = useState([]);
    const [mensagem, setMensagem] = useState("");
    const [erro, setErro] = useState("");

    const carregarSkins = async () => {
        try {
        const dados = await listarSkins();
        setSkins(dados);
        setErro("");
        } catch (error) {
        console.error(error);
        setErro("Erro ao carregar skins.");
        }
    };

    useEffect(() => {
        carregarSkins();
    }, []);

    const handleDelete = async (id) => {
        const confirmar = window.confirm("Tem certeza que deseja excluir esta skin?");
        if (!confirmar) return;

        try {
        const resposta = await deletarSkin(id);

        if (resposta.erro) {
            setErro(resposta.erro);
            return;
        }

        setMensagem(resposta.mensagem || "Skin deletada com sucesso.");
        setErro("");
        carregarSkins();
        } catch (error) {
        console.error(error);
        setErro("Erro ao deletar skin.");
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
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "30px",
                flexWrap: "wrap",
                gap: "16px",
            }}
            >
            <div>
                <h1
                style={{
                    fontSize: "42px",
                    marginBottom: "8px",
                }}
                >
                INVENTÁRIO
                </h1>
                <p style={{ color: "#94a3b8" }}>
                Gerencie todas as skins cadastradas
                </p>
            </div>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link to="/" style={botaoSecundario}>
                Voltar para Home
                </Link>

                <Link to="/skins/novo" style={botaoPrimario}>
                Cadastrar Nova Skin
                </Link>
            </div>
            </div>

            {mensagem && (
            <p
                style={{
                color: "#4ade80",
                marginBottom: "20px",
                backgroundColor: "rgba(34,197,94,0.08)",
                border: "1px solid rgba(34,197,94,0.25)",
                padding: "12px 14px",
                borderRadius: "10px",
                }}
            >
                {mensagem}
            </p>
            )}

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

            <div
            style={{
                display: "grid",
                gap: "18px",
            }}
            >
            {skins.length > 0 ? (
                skins.map((skin) => (
                <div
                    key={skin.idSkin}
                    style={{
                    background: "linear-gradient(180deg, #1e293b 0%, #111827 100%)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "14px",
                    padding: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "20px",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
                    flexWrap: "wrap",
                    }}
                >
                    <div>
                    <h2
                        style={{
                        fontSize: "28px",
                        marginBottom: "12px",
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
                    <p style={textoInfoPreco}>
                        R$ {Number(skin.preco).toFixed(2)}
                    </p>
                    <p style={textoInfo}>
                        <strong>Coleção:</strong> {skin.colecao}
                    </p>
                    </div>

                    <div
                    style={{
                        display: "flex",
                        gap: "10px",
                        flexWrap: "wrap",
                    }}
                    >
                    <Link to={`/skins/${skin.idSkin}`} style={botaoDetalhes}>
                        Detalhes
                    </Link>

                    <Link to={`/skins/editar/${skin.idSkin}`} style={botaoEditar}>
                        Editar
                    </Link>

                    <button
                        onClick={() => handleDelete(skin.idSkin)}
                        style={botaoExcluir}
                    >
                        Excluir
                    </button>
                    </div>
                </div>
                ))
            ) : (
                <div
                style={{
                    backgroundColor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "12px",
                    padding: "24px",
                    color: "#cbd5e1",
                }}
                >
                Nenhuma skin cadastrada.
                </div>
            )}
            </div>
        </div>
        </div>
    );
    }

    const textoInfo = {
    color: "#cbd5e1",
    marginBottom: "6px",
    fontSize: "16px",
    };

    const textoInfoPreco = {
    color: "#85f397",
    marginBottom: "8px",
    marginTop: "8px",
    fontWeight: "bold",
    fontSize: "18px",
    };

    const botaoBase = {
    padding: "10px 16px",
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

    const botaoDetalhes = {
    ...botaoBase,
    background: "linear-gradient(90deg, #0f7631 0%, #14b8a6 100%)",
    };

    const botaoEditar = {
    ...botaoBase,
    background: "linear-gradient(90deg, #1d1c1c 0%, #7a7978 100%)",
    };

    const botaoExcluir = {
    ...botaoBase,
    background: "linear-gradient(90deg, #bb3d3d 0%, #ef4444 100%)",
    };

export default SkinsList;