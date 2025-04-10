import express from 'express'
import MovieRouter from './routers/movies.router.js';
import UserRouter from './routers/users.router.js';

const app = express();

app.use(express.json())
app.use(MovieRouter)
app.use(UserRouter)
export default app