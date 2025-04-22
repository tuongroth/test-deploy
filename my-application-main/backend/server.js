			
											
const express = require('express');					
const cors = require('cors');					
const mongoose = require('mongoose');					
					
const app = express();					
const port = 4000;					
					
// Connect to MongoDB directly here					
const connectDB = async () => {					
try {					
await mongoose.connect('mongodb+srv://fullstackproject:234567@cluster0.xhmpjrp.mongodb.net/food-del', {					
useNewUrlParser: true,					
useUnifiedTopology: true					
});					
console.log("MongoDB Connected");					
} catch (error) {					
console.error("MongoDB Connection Failed:", error);					
process.exit(1);					
}					
};					
					
connectDB();					
					
// middleware					
app.use(express.json());					
app.use(cors());					
					
// API route					
app.get("/", (req, res) => {					
res.send("API Working");					
});					
					
// Start server					
app.listen(port, () => {					
console.log(`Server Started on http://localhost:${port}`);					
});					
					