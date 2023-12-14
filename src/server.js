const express = require('express');
const app = express();
const PORT = 3000;

function startServer() {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

// Verificar se a porta está em uso
app.listen(PORT, (err) => {
  if (err) {
    console.error(`Port ${PORT} is already in use. Trying another port...`);
    PORT = 3001; // Escolha outra porta se a atual estiver em uso
    startServer();
  } else {
    startServer();
  }
});
