<template>
    <div>
      <h1>Cadastro de Usuário</h1>
      <form @submit.prevent="cadastrarUsuario">
        <input type="text" v-model="nome" placeholder="Nome" required />
        <input type="password" v-model="senha" placeholder="Senha" required />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        nome: '',
        senha: '',
      };
    },
    methods: {
      cadastrarUsuario() {
        console.log('Usuário cadastrado:', this.nome);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Seu estilo aqui */
  </style>
  