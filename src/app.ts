import express from 'express';

const app = express();
const port = 8080;

app.get('/health', (req, res) => {
    res.sendStatus(200);
})

app.listen(port, ()=>{
    console.log(`servidor rodando na porta ${port}`)
})