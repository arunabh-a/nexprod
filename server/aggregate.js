import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const mongoURI = process.env.MONGO_URI;


// Define a Product Schema
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  brand: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
}, { timestamps: true });

// Create a Product Model
const Product = mongoose.model('Product', productSchema);
// Connect to MongoDB
mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB');
    aggregateProductData()
  })
  .catch(err => console.error('Failed to connect to MongoDB:', err));

async function aggregateProductData() {
  try {
    const aggregationResult = await Product.aggregate([
      {
        $group: {
          _id: "$brand",                  
          averagePrice: { $avg: "$price" }, 
          productCount: { $sum: 1 }         
        }
      },
      {
        
        $match: {
          productCount: { $gte: 2 }
        }
      },
      {
        // Sort by average price in descending order
        $sort: { averagePrice: -1 }
      }
    ]);

    // Print the aggregation result
    console.log('Aggregation Result:', aggregationResult);
  } catch (err) {
    console.error('Error during aggregation:', err);
  }
}

