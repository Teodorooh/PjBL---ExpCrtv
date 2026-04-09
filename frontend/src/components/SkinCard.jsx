import { Link } from "react-router-dom";

function SkinCard({ skin, imagem }) {
    return (
        <div
        style={{
            width: "220px",
            background: "linear-gradient(180deg, #12131a 0%, #1b1d29 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "14px",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow = "0 14px 35px rgba(0,0,0,0.45)";
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.35)";
        }}
        >
        <div
            style={{
            height: "140px",
            backgroundColor: "#0f172a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            }}
        >
            <img
            src={imagem}
            alt={skin.nomeSkin}
            style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
            }}
            />
        </div>

        <div style={{ padding: "14px" }}>
            <h3
            style={{
                fontSize: "20px",
                marginBottom: "10px",
                color: "white",
            }}
            >
            {skin.nomeSkin}
            </h3>

            <p style={{ color: "#cbd5e1", marginBottom: "4px" }}>
            <strong>Arma:</strong> {skin.arma}
            </p>

            <p style={{ color: "#cbd5e1", marginBottom: "4px" }}>
            <strong>Raridade:</strong> {skin.raridade}
            </p>

            <p style={{ color: "#85f397", marginBottom: "12px", fontWeight: "bold" }}>
            R$ {Number(skin.preco).toFixed(2)}
            </p>

            <Link
            to={`/skins/${skin.idSkin}`}
            style={{
                display: "block",
                textAlign: "center",
                background: "linear-gradient(90deg, #5d13e7 0%, #f50bf5 100%)",
                color: "white",
                padding: "10px",
                borderRadius: "8px",
                fontWeight: "bold",
            }}
            >
            Detalhes
            </Link>
        </div>
        </div>
    );
}

export default SkinCard;

