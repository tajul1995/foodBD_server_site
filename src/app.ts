import express from 'express'
import { toNodeHandler } from "better-auth/node";
import { auth } from './lib/auth';
import cors from 'cors'
import { ProviderRouter } from './modules/provider/provider.router';
import { categoryRouter } from './modules/category/cotegory.router';
import { mealRouter } from './modules/meal/meal.router';

const app= express()
app.use(cors({
    origin:process.env.APP_URL || "http://localhost:3000",
    credentials:true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}))

app.all("/api/auth/*splat", toNodeHandler(auth));
app.use(express.json())
app.use('/api/provider',ProviderRouter)
app.use('/api/category',categoryRouter)
app.use('/api/meals',mealRouter)
export default app