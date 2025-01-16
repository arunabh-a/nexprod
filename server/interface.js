import express from 'express';
import { connectDB } from './config/db-config.js';
import dotenv from 'dotenv';
import productRoutes from './routes/product.routes.js';


dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/products", productRoutes);

const port = process.env.PORT;

app.listen(port, () => {
    connectDB();
    console.log("Server started at http://localhost:" + port);
});


