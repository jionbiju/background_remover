import 'dotenv/config';
import express from 'express';
import cors from 'cors';

//App config
const PORT = process.env.PORT || 4000;  
const app = express();

//Intialize middleware
app.use(express.json());
app.use(cors());

//API Route
app.get('/', (req,res) => res.send("API working.."));

app.listen(PORT, () => console.log("Server is running on port "+PORT));