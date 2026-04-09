# 🛒 TEO MARKET

Sistema CRUD de skins inspirado no conceito de loja/market, desenvolvido com React no frontend, Node.js + Express no backend e MySQL como banco de dados.

---

## Tecnologias Utilizadas

### Frontend
- React (Vite)
- JavaScript
- Fetch API

### Backend
- Node.js
- Express
- MySQL2
- CORS

### Banco de Dados
- MySQL

---

##  Funcionalidades

O sistema permite o gerenciamento completo de skins:

-  Listagem de skins (Inventário)
-  Cadastro de novas skins
-  Edição de skins existentes
-  Exclusão de skins
-  Visualização detalhada de cada skin

---

##  Estrutura do Projeto
```
PjBL/
├── backend/
├── frontend/
├── PjBL_EduardoTeodoro.sql
├── .gitignore
└── README.md
```
---

##  Banco de Dados

- Nome do banco: `crud`
- Tabela: `skins`

### Campos da tabela:
- idSkin
- nomeSkin
- arma
- raridade
- preco
- colecao

---

##  Como Executar o Projeto

### 1. Banco de Dados

1. Abra o MySQL
2. Importe o arquivo: `PjBL_EduardoTeodoro.sql`
3. Certifique-se de que o banco criado se chama: crud

### 2. Backend

Abra o terminal e execute:

```bash
cd backend
npm install
npm start**
```
O backend será executado em: http://localhost:3001

### 3. Frontend

Em outro terminal:

```bash
cd frontend
npm install
npm run dev
```
A aplicação estará disponível em: http://localhost:5173

### 4. Configuração do Banco

Ajuste os dados de conexão no backend:

```
host: "localhost",
user: "root",
password: "SUA_SENHA",
database: "crud"
```

---

## Instalação

Após clonar o repositório: `PjBL---ExpCrtv-main`

```
npm install
```
Executar separadamente no backend e frontend

---

## Requisitos para Execução

1. Node.js instalado
2. MySQL instalado
3. Navegador atualizado


---


















