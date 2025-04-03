# 🚀 Projeto CRUD de Usuários com React e Node.js

Este projeto é uma aplicação web completa desenvolvida do zero, utilizando **React** no Front-end e **Node.js com Express** no Back-end. O sistema permite realizar um CRUD (**Create, Read, Delete**) de usuários, integrando uma API RESTful com uma interface simples e funcional.

---

## 🛠 Tecnologias Utilizadas

### **Front-end**:
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Axios](https://axios-http.com/)
- React Hooks (**useState, useRef**)

### **Back-end**:
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [SQLite](https://www.sqlite.org/)
- [CORS](https://www.npmjs.com/package/cors) (para requisições cross-origin)

---

## 📌 Funcionalidades Implementadas

✅ Cadastro de usuários (Create)  
✅ Listagem de usuários (Read)  
✅ Exclusão de usuários (Delete)  
✅ API integrada ao Front-end  
✅ Atualização automática da lista ao carregar a página  
✅ Tratamento de erro **CORS** ao conectar Front-end com Back-end  

---

## 📂 Estrutura do Projeto

```
📦 projetoCadastro
 ├── 📂 frontEnd  # Interface React
 │   ├── src/
 │   │   ├── components/
 │   │   ├── pages/
 │   │   ├── services/
 │   │   ├── App.jsx
 │   │   ├── main.jsx
 │   │   ├── styles.css
 │   ├── package.json
 │   ├── vite.config.js
 │   ├── index.html
 │
 ├── 📂 backEnd  # API Node.js com Express
 │   ├── prisma/
 │   ├── src/
 │   │   ├── controllers/
 │   │   ├── routes/
 │   │   ├── server.js
 │   │   ├── database.js
 │   ├── package.json
 │   ├── .env
 │
 ├── README.md  # Documentação
```

---

## 🚀 Como Rodar o Projeto

### **1️⃣ Clonar o Repositório**
```sh
git clone https://github.com/viniciuscribeiro/cadastro_usuario.git
cd MeuProjetoCRUD
```

### **2️⃣ Configurar o Back-end**
```sh
cd backEnd
npm install  # Instala as dependências
npx prisma migrate dev  # Criar o banco de dados SQLite
npm start  # Inicia o servidor na porta 3000
```

### **3️⃣ Configurar o Front-end**
```sh
cd ../frontEnd
npm install  # Instala as dependências
npm run dev  # Inicia o Vite na porta 5173
```

### **4️⃣ Acessar a Aplicação**

- **Front-end:** http://localhost:5173  
- **Back-end:** http://localhost:3000  

---

## 📖 Aprendizado e Conceitos Aplicados

Durante este projeto, foram abordados os seguintes conceitos:

- Criação do esqueleto do **React** com componentes organizados.
- Uso de **React Hooks** (**useState, useRef**).
- Integração do **Front-end** com API via **fetch e axios**.
- Resolução do erro **CORS** no **Express**.
- Criação de **API RESTful** com **Node.js e Express**.
- Uso do **Prisma ORM** para manipulação do banco de dados **SQLite**.
- Gerenciamento de rotas no **Express** (**GET, POST, DELETE**).

---

## 📌 Contato

Caso tenha dúvidas ou sugestões, entre em contato:

💼 **LinkedIn:** [Perfil](https://www.linkedin.com/in/viniciuscordeiroribeiro/)  
💻 **GitHub:** [Repositório](https://github.com/viniciuscribeiro)  
📧 **E-mail:** viniciuscordeiroribeiro@gmail.com  

🚀 **Projeto desenvolvido por Vinicius Cordeiro Ribeiro.**


