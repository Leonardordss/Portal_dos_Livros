<template>
  <div>
    <!-- Cabeçalho -->
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

    <!-- Conteúdo principal -->
    <main>
      <section class="cadastro-form">
        <h2>Cadastro de Usuário</h2>
        <form @submit.prevent="cadastrarUsuario">
          <label for="username">Usuário:</label>
          <input
            type="text"
            id="username"
            v-model="username"
            placeholder="Digite seu usuário"
            required
          />

          <label for="password">Senha:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Digite sua senha"
            required
          />

          <button type="submit">Cadastrar</button>
        </form>
      </section>

      <section class="opcoes">
        <button @click="voltarLogin">Voltar para Login</button>
      </section>
    </main>

    <!-- Rodapé -->
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
  name: "CadastroUsuario",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async cadastrarUsuario() {
      if (this.username && this.password) {
        try {
          const resposta = await fetch('http://localhost:5000/api/cadastro', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: this.username,
              password: this.password,
            }),
          });

          const dados = await resposta.json();

          if (resposta.ok) {
            alert("Usuário cadastrado com sucesso!");
            this.$router.push('/login'); // Redireciona para login
          } else {
            alert(dados.message || 'Erro ao cadastrar. Tente novamente!');
          }
        } catch (erro) {
          console.error('Erro ao cadastrar usuário:', erro);
          alert('Erro ao cadastrar. Tente novamente.');
        }
      } else {
        alert('Por favor, preencha todos os campos!');
      }
    },
    voltarLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
}

header {
  background-color: #2c3e50;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header .logo {
  display: flex;
  align-items: center;
}

header .logo img {
  width: 120px;
  margin-right: 90px;
}

header nav ul {
  list-style-type: none;
  display: flex;
  gap: 20px;
}

header nav ul li {
  display: inline;
}

header nav ul li a {
  color: white;
  text-decoration: none;
  font-size: 18px;
}

main {
  margin-top: 20px;
}

.cadastro-form {
  max-width: 400px;
  margin: 0 auto;
}

.cadastro-form form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.cadastro-form label {
  font-weight: bold;
}

.cadastro-form input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.cadastro-form button {
  padding: 10px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.cadastro-form button:hover {
  background-color: #2980b9;
}

.opcoes {
  text-align: center;
  margin-top: 20px;
}

footer {
  background-color: #2c3e50;
  color: white;
  padding: 20px;
}

footer .footer-container {
  display: flex;
  justify-content: space-between;
}

footer .footer-section h3 {
  margin-top: 0;
}

footer .footer-bottom {
  text-align: center;
  margin-top: 20px;
}

footer a {
  color: white;
  text-decoration: none;
}

footer a:hover {
  text-decoration: underline;
}
</style>
