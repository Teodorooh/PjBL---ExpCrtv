import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listarSkins } from "../services/api";
import SkinCard from "../components/SkinCard";

import fuelImg from "../assets/fuel.png";
import bloodsportImg from "../assets/bloodsport.png";
import empressImg from "../assets/empress.png";
import coilImg from "../assets/coil.png";
import emperorImg from "../assets/emperor.png";
import beastImg from "../assets/beast.png";
import roseImg from "../assets/rose.png";
import discoImg from "../assets/disco.png";
import wElementalImg from "../assets/wElemental.png";
import traitorImg from "../assets/traitor.png";
import codeRedImg from "../assets/codeRed.png";
import omegaImg from "../assets/omega.png";
import butTigerImg from "../assets/butTiger.png";

function Home() {
  const [skins, setSkins] = useState([]);
  const [erro, setErro] = useState("");

  const embaralhar = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    const carregarHome = async () => {
      try {
        const dados = await listarSkins();

        if (dados.erro) {
          setErro(dados.erro);
          return;
        }

        const aleatorias = embaralhar(dados).slice(0, 5);
        setSkins(aleatorias);
      } catch (error) {
        setErro("Erro ao carregar as skins da home.");
      }
    };

    carregarHome();
  }, []);

  const obterImagem = (skin) => {
    const imagens = {
      "Fuel Injector": fuelImg,
      "Bloodsport": bloodsportImg,
      "The Empress": empressImg,
      "Golden Coil": coilImg,
      "The Emperor": emperorImg,
      "Hyper Beast": beastImg,
      "Rose Iron": roseImg,
      "Disco Tech": discoImg,
      "Water Elemental": wElementalImg,
      "The Traitor": traitorImg,
      "Code Red": codeRedImg,
      "Omega": omegaImg,
      "Tiger Tooth": butTigerImg
    };
    
    return imagens[skin.nomeSkin];
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #1f2a44 0%, #0b1020 35%, #05070d 100%)",
        color: "white",
        padding: "30px",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "56px",
                fontWeight: "bold",
                letterSpacing: "1px",
                marginBottom: "8px",
              }}
            >
              TEO MARKET
            </h1>
            <p style={{ color: "#94a3b8", marginTop: "14px", position: "fixed", right: "50px", bottom: "20px" }}>
              Desenvolvido por Eduardo Teodoro Moreira de Souza
            </p>
          </div>

          <Link
            to="/skins"
            style={{
              background: "linear-gradient(90deg, #2563eb 0%, #1d4ed8 100%)",
              padding: "12px 18px",
              borderRadius: "10px",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Exibir Inventário
          </Link>
        </div>

        {erro && <p style={{ color: "#f87171", marginBottom: "20px" }}>{erro}</p>}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginTop: "200px"
          }}
        >
          {skins.map((skin) => (
            <SkinCard
              key={skin.idSkin}
              skin={skin}
              imagem={obterImagem(skin)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
