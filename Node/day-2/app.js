import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import express from 'express'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()

app.get('/users', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(3000)