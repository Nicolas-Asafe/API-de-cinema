import express from 'express'
import MovieRouter from './routers/movies.router.js';
import UserRouter from './routers/users.router.js';
import ComboRouter from './routers/combos.router.js';

const app = express();

app.use(express.json())
app.use(MovieRouter)
app.use(UserRouter)
app.use(ComboRouter)


app.listen(3000,()=>{
    console.log("Server is running in port https://localhost:3000")
})

export default app