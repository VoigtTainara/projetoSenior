const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Configurações do banco de dados
const config = {
  user: 'DESKTOP-HFH9UKC\Dell',
  password: '',
  server: 'localhost',
  database: 'sistema',
  options: {
    trustServerCertificate: true,
  },
};

//    a tabela criada no banco:
//    CREATE TABLE Compra (
//    Id INT PRIMARY KEY IDENTITY(1,1),
//    NomeSolicitante NVARCHAR(255),
//    DescricaoItem NVARCHAR(MAX),
//    PrecoProduto NVARCHAR(10)
//    AcaoAprovacao NVARCHAR(10),
//    Observacao NVARCHAR(MAX)
//    );
app.post('/solicitacao', async (req, res) => {
  try {
    await sql.connect(config);
    const result = await sql.query(`
      INSERT INTO Compra (NomeSolicitante, DescricaoItem, PrecoProduto)
      VALUES ('${req.body.nome}', '${req.body.descricao}', ${req.body.preco})
    `);
    
    res.status(201).json({ message: 'Solicitação registrada com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao processar a solicitação' });
  } finally {
    await sql.close();
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});