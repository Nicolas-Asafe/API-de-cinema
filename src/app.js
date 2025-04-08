import express from 'express'
import MovieRouter from './routers/filmes.router.js';
const app = express();

app.use(express.json())
app.use(MovieRouter)

export default app