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

    <section class="search-bar">
      <input type="text" placeholder="Pesquisar livros..." v-model="searchQuery" />
      <button @click="searchBooks">Pesquisar</button>
    </section>

    <main>
      <section class="notifications">
        <h2>Notificações</h2>
        <p>Nenhuma nova notificação.</p>
      </section>

      <section class="featured-books">
        <h2>Livros em Destaque</h2>
        <div v-for="book in featuredBooks" :key="book.id" class="book">
          <img :src="require(`@/assets/${book.image}`)" :alt="book.title" />
          <p>{{ book.title }}</p>
        </div>
      </section>

      <section class="stats">
        <h2>Estatísticas</h2>
        <p>Livros cadastrados: {{ stats.books }}</p>
        <p>Usuários ativos: {{ stats.users }}</p>
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
  name: "HomePage",
  data() {
    return {
      searchQuery: '',
      featuredBooks: [
        { id: 1, title: 'É assim que começa', image: 'livro1.jpg' },
        { id: 2, title: 'O homem mais rico da Babilônia', image: 'livro2.jpg' },
      ],
      stats: {
        books: 1500,
        users: 500,
      },
    };
  },
  methods: {
    searchBooks() {
      console.log('Pesquisar livros:', this.searchQuery);
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

header .logo h1 {
  list-style-type: none;
  display: flex;
  gap: 20px;
}

header nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

header nav ul li {
  margin-left: 20px;
}

header nav ul li a {
  color: white;
  text-decoration: none;
  font-size: 18px;
}

.search-bar {
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: #f0f8ff;
}

.search-bar input {
  width: 60%;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #2c3e50;
  border-radius: 5px;
}

.search-bar button {
  padding: 10px 20px;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
}

main {
  padding: 20px;
}

.notifications, .featured-books, .stats {
  margin-bottom: 20px;
}

.notifications h2, .featured-books h2, .stats h2 {
  color: #1e90ff;
}

.featured-books .book {
  display: inline-block;
  width: 45%;
  text-align: center;
  margin-right: 5%;
}

.featured-books .book img {
  width: 25%;
  border: 2px solid #2c3e50;
  border-radius: 5px;
}

footer {
  background-color: #2c3e50;
  color: white;
  padding: 20px;
}

footer .footer-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

footer .footer-section {
  width: 30%;
  min-width: 200px;
}

footer .footer-section h3 {
  margin-bottom: 15px;
}

footer .footer-section ul {
  list-style-type: none;
  padding: 0;
}

footer .footer-section ul li {
  margin-bottom: 10px;
}

footer .footer-section ul li a {
  color: white;
  text-decoration: none;
}

footer .footer-bottom {
  text-align: center;
  border-top: 1px solid white;
  padding-top: 15px;
}

footer .footer-bottom p {
  margin: 0;
}
</style>
