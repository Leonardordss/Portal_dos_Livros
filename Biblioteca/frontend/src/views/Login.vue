<template>
    <div>
      <header>
        <div class="logo">
            <img :src="require('@/assets/logo.jpg')" alt="Logo" />
          <h1>Portal dos Livros</h1>
        </div>
        <nav>
          <ul>
            <li><router-link to="/">Início</router-link></li>
            <li><router-link to="/catalogo">Catálogo</router-link></li>
            <li><router-link to="/login">Usuários</router-link></li>
            <li><a href="#">Relatórios</a></li>
          </ul>
        </nav>
      </header>
  
      <main>
        <section class="login-form">
          <h2>Cadastro de Usuário</h2>
          <form @submit.prevent="cadastrarUsuario">
            <input
              type="text"
              id="nome"
              v-model="nome"
              placeholder="Nome"
              required
            />
            <input
              type="password"
              id="senha"
              v-model="senha"
              placeholder="Senha"
              required
            />
            <button type="submit">Cadastrar</button>
          </form>
          <!-- Feedback após o cadastro -->
          <p v-if="usuarioCadastrado" class="feedback">Cadastro realizado com sucesso!</p>
        </section>
  
        <section class="lista-livros" id="lista-livros">
          <button @click="sair">Sair</button>
        </section>
      </main>
  
      <footer>
        <div class="footer-container">
          <div class="footer-section">
            <h3>Sobre</h3>
            <p>Portal dos Livros é seu sistema de gerenciamento de biblioteca confiável.</p>
          </div>
          <div class="footer-section">
            <h3>Links Rápidos</h3>
            <ul>
              <li><router-link to="/">Início</router-link></li>
              <li><router-link to="/catalogo">Catálogo</router-link></li>
              <li><router-link to="/login">Usuários</router-link></li>
              <li><a href="#">Relatórios</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>Contato</h3>
            <p>Email: contato@portaldoslivros.com</p>
            <p>Telefone: (11) 1234-5678</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 Portal dos Livros. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserLogin',
    data() {
      return {
        nome: '',
        senha: '',
        usuarioCadastrado: false,
      };
    },
    methods: {
      cadastrarUsuario() {
        // Implemente a lógica de cadastro do usuário aqui
        console.log('Usuário cadastrado:', this.nome);
        this.usuarioCadastrado = true;
      },
      sair() {
        // Lógica para sair (navegar para a página de login)
        this.$router.push('/login');
      },
    },
  };
  </script>
  
  <style scoped>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f8ff;
    color: #333;
  }
  
  header {
    background-color: #1e90ff;
    color: white;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo img {
    width: 120px;
  }
  
  .logo h1 {
    display: inline;
    font-size: 24px;
  }
  
  nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  
  nav ul li {
    margin-left: 20px;
  }
  
  nav ul li a {
    color: white;
    text-decoration: none;
    font-size: 18px;
  }
  
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh; /* Ajuste para centralizar o conteúdo na tela */
  }
  
  .login-form {
    width: 100%;
    max-width: 400px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #fff;
  }
  
  h2 {
    text-align: center;
    color: #1e90ff;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  input {
    padding: 10px;
    font-size: 16px;
    border: 2px solid #1e90ff;
    border-radius: 5px;
    outline: none;
  }
  
  input:focus {
    border-color: #4682b4;
  }
  
  button {
    padding: 10px;
    background-color: #1e90ff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #4682b4;
  }
  
  .feedback {
    margin-top: 10px;
    text-align: center;
    color: green;
  }
  
  footer {
    background-color: #1e90ff;
    color: white;
    padding: 20px;
  }
  
  .footer-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }
  
  .footer-section {
    width: 30%;
    min-width: 200px;
  }
  
  .footer-section h3 {
    margin-bottom: 15px;
  }
  
  .footer-section ul {
    list-style-type: none;
    padding: 0;
  }
  
  .footer-section ul li {
    margin-bottom: 10px;
  }
  
  .footer-section ul li a {
    color: white;
    text-decoration: none;
  }
  
  .footer-bottom {
    text-align: center;
    border-top: 1px solid white;
    padding-top: 15px;
  }
  
  .footer-bottom p {
    margin: 0;
  }
  </style>
  