import express from "express"
import { config } from 'dotenv';
import logger from './middlewares/logger.js';

config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger)

app.use(express.static('./public'))


app.use((req, res) => {
    res.status(404).json({ msg: "Route not found." });
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});