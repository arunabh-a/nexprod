import express from 'express';
import { connectDB } from './config/db-config.js';
import dotenv from 'dotenv';
import productRoutes from './routes/product.routes.js';
import cors from 'cors';

dotenv.config();

const app = express();


app.use(express.json());
app.use(cors());

app.use("/api/products", productRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    connectDB();
    console.log("Server started at Render/:" + port);
});


