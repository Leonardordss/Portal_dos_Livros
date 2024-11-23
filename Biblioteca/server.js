require('dotenv').config();  // Carregar variáveis de ambiente
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const authController = require('./src/controllers/authController'); // Controlador de autenticação
const cors = require('cors');  // Para permitir requisições de origens diferentes

app.use(express.json());  // Middleware para processar JSON no corpo da requisição
app.use(cors());  // Habilita CORS

// Conectar ao MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conectado ao MongoDB');
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Erro ao conectar ao MongoDB', error);
    process.exit(1);  // Encerra o processo caso não consiga conectar ao banco
  });

// Rota para cadastro
app.post('/cadastro', authController.register);  // Chama a função 'register' do authController

