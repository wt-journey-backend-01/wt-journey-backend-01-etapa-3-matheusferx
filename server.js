require('dotenv').config();
const express = require('express');
const app = express();

const agentesRouter = require('./routes/agentesRoutes');
const casosRouter = require('./routes/casosRoutes');

const PORT = process.env.PORT || 3000;

app.use(express.json());

// Usar rotas
app.use(agentesRouter);
app.use(casosRouter);

// Handler de erro global simples (opcional)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ status: 500, message: 'Erro interno' });
});

app.listen(PORT, () => {
  console.log(`Servidor do Departamento de Polícia rodando em http://localhost:${PORT}`);
});