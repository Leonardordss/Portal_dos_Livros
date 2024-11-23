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
      <section class="livros">
        <h2>Catálogo de Livros</h2>
        
        <!-- Formulário de criação de livro -->
        <form @submit.prevent="adicionarLivro">
          <input
            type="text"
            v-model="livro.titulo"
            placeholder="Título do Livro"
            required
          />
          <input
            type="text"
            v-model="livro.autor"
            placeholder="Autor"
            required
          />
          <input
            type="text"
            v-model="livro.isbn"
            placeholder="ISBN"
            required
          />
          <button type="submit">Adicionar Livro</button>
        </form>

        <!-- Lista de livros -->
        <ul>
          <li v-for="livro in livros" :key="livro.id">
            <span>{{ livro.titulo }} - {{ livro.autor }}</span>
            <button @click="editarLivro(livro)">Editar</button>
            <button @click="removerLivro(livro.id)">Remover</button>
          </li>
        </ul>
      </section>

      <section class="logout">
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
  name: "CatalogoLivros",
  data() {
    return {
      livros: [],
      livro: {
        id: null,
        titulo: "",
        autor: "",
        isbn: "",
      },
    };
  },
  methods: {
    // Simulação de dados
    adicionarLivro() {
      // Lógica para adicionar livro
      if (this.livro.titulo && this.livro.autor && this.livro.isbn) {
        const novoLivro = { ...this.livro, id: Date.now() }; // ID único
        this.livros.push(novoLivro); // Adicionar o livro na lista
        this.livro = { id: null, titulo: "", autor: "", isbn: "" }; // Resetar formulário
        alert("Livro adicionado com sucesso!");
      } else {
        alert("Por favor, preencha todos os campos!");
      }
    },
    editarLivro(livro) {
      // Preencher o formulário com os dados do livro selecionado para edição
      this.livro = { ...livro };
    },
    removerLivro(id) {
      // Remover livro da lista
      this.livros = this.livros.filter(livro => livro.id !== id);
      alert("Livro removido com sucesso!");
    },
    sair() {
      // Lógica para redirecionar para a página de login
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
/* Mesmos estilos */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f0f8ff;
  color: #333;
}

header {
  background-color: #2c3e50;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo img {
  width: 120px;
  margin-right: 90px;
}

.logo h1 {
  display: inline;
  font-size: 24px;
  gap: 20px;
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

/* Estilos do formulário */
.livros form {
  width: 300px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input,
button {
  padding: 10px;
  font-size: 16px;
}

button {
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

button:hover {
  background-color: #45a049;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 20px;
}

ul li {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

footer {
  background-color: #2c3e50;
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
