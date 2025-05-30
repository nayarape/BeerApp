
# 🍺 Beer Catalog App

Aplicativo desenvolvido em **React Native com Expo** e backend em **Node.js + Express + MongoDB**, que permite cadastrar, visualizar e mapear cervejas favoritas, utilizando a câmera do dispositivo para tirar fotos das cervejas.

---

## 🚀 Funcionalidades

* 📸 Captura de imagem usando a câmera.
* 📝 Cadastro de cervejas com nome, descrição e foto.
* 🗺️ Visualização das cervejas no mapa, com localização.
* 🗂️ Listagem das cervejas cadastradas.
* 🔄 Dados armazenados em backend com Node.js e MongoDB.

---

## 📱 Tecnologias utilizadas

### Mobile (React Native + Expo)

* React Native
* Expo (Câmera, Localização, Image Picker)
* React Navigation
* React Native Paper (UI)
* Fetch API para consumo da API

### Backend (Node.js)

* Node.js
* Express
* Mongoose (MongoDB)
* Multer (Upload de imagens)
* CORS

---

## 🏗️ Instalação

### ⚙️ Backend

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd backend
```

2. Instale as dependências:

```bash
npm install
```

3. Execute o servidor:

```bash
node index.js
```

O backend ficará rodando em:

```
http://seu-ip-local:3000
```

> 💡 Lembre-se de configurar corretamente o IP local no app mobile.

---

### 📲 Mobile (React Native + Expo)

1. Instale as dependências:

```bash
cd mobile
npm install
```

2. Rode o projeto com o Expo:

```bash
npx expo start
```

3. Escaneie o QR Code com o aplicativo **Expo Go** no seu celular.

---

## ⚠️ Importante

* O backend precisa estar rodando na mesma rede Wi-Fi que o dispositivo físico que executa o app.
* No app mobile, altere a constante `API_URL` nos arquivos:

```javascript
const API_URL = 'http://SEU-IP-LOCAL:3000';
```

---

## 📂 Estrutura do Projeto

```
.
├── backend
│   ├── uploads/        # Imagens salvas
│   ├── index.js        # API Node.js
│   └── package.json
├── mobile
│   ├── App.js          # App principal
│   ├── screens/        # Telas (Home, Adicionar, Mapa)
│   ├── styles/         # Estilos globais
│   └── package.json
```

---

## ✨ Melhorias Futuras

* 🧭 Filtros por tipo de cerveja
* ⭐ Avaliação das cervejas
* ☁️ Deploy da API na nuvem
* 🔔 Notificações



