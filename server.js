const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para analizar cuerpos JSON
app.use(express.json());

// Endpoint para recibir los datos
app.post('/api/receiveData', (req, res) => {
    const strength = req.body.strength;
    console.log('Recibido:', strength);
    res.send('Datos recibidos correctamente');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});