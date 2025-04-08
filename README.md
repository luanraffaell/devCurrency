# 💰 devConcurrency

**devConcurrency** é uma aplicação web que lista as principais criptomoedas, exibindo seu valor de mercado, variação nas últimas 24 horas e símbolo. O objetivo é fornecer uma visualização simples e intuitiva dessas informações em tempo real.

## 🚀 Tecnologias utilizadas

### 📦 Frontend
- [ReactJS](https://reactjs.org/)
- [React Router DOM](https://reactrouter.com/)

### 🔧 Backend
- [Spring Boot](https://spring.io/projects/spring-boot)
- `RestTemplate` para consumo da API externa

## 🔗 API de dados

Os dados são obtidos a partir da [Coinlib API](https://coinlib.io/apidocs), que fornece informações sobre criptomoedas.  
Como a Coinlib **não permite requisições diretas do frontend**, foi implementada uma **API intermediária com Spring Boot**, que realiza o consumo e expõe os dados para o React via REST.

---

## 🧩 Funcionalidades

- ✅ Listagem das principais criptomoedas
- ✅ Exibição do **valor de mercado**
- ✅ Exibição da **variação nas últimas 24 horas**
- ✅ Exibição do **símbolo (symbol)** da moeda
- ✅ Consumo de API externa com tratamento de CORS
- ✅ Navegação entre rotas com `react-router-dom`

---

## 🛠️ Como rodar o projeto localmente

### 🔽 Clone o repositório

```bash
git clone[ https://github.com/seu-usuario/devConcurrency.git](https://github.com/luanraffaell/devCurrency.git)
cd devCurrency
```
📌 Backend (Spring Boot)
1. Acesse a pasta do backend:
```bash
cd spring
```
2. Abra o projeto em sua IDE de preferência
3. Insira sua API key da Coinlib no `application.properties`
> API_KEY=${COINLIB_API_KEY}
4. Insira a URL do seu frontend no mesmo arquivo:
> URL_ORIGIN=http://localhost:5173

💻 Frontend (React)
1. Acesse a pasta do frontend:
```bash
cd CRIPTO
npm install
```
2. Rode o seguinte comando:
```bash
yarn dev
```

Sua aplicação estará disponivel no endereço `http://localhost:5173/`

🖼️ Exemplo da interface:
![DevCurrency](https://github.com/user-attachments/assets/d75069ea-a4c8-4027-b002-589ee84087ab)

📌 Observações
A API da Coinlib possui limite de uso gratuito.

O backend foi necessário pois a Coinlib não permite requisições diretas do navegador, exigindo que os dados sejam consumidos no backend e repassados para o frontend.

