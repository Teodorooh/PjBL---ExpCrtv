const API_URL = "http://localhost:3001/skins";

export const listarSkins = async () => {
    const resposta = await fetch(API_URL);
    return await resposta.json();
};

export const buscarSkinPorId = async (id) => {
    const resposta = await fetch(`${API_URL}/${id}`);
    return await resposta.json();
};

export const criarSkin = async (dados) => {
    const resposta = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    });

    return await resposta.json();
};

export const atualizarSkin = async (id, dados) => {
    const resposta = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    });

    return await resposta.json();
};

export const deletarSkin = async (id) => {
    const resposta = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    return await resposta.json();
};
