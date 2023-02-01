const express = require("express");
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const connectDb = require("./config/connectDb");
const post = require("./routes/post");

dotenv.config();
connectDb();

app.use(cors());
app.use(express.json());
app.use(process.env.Post_URL, post);

const port = process.env.PORT || 3030;
app.listen(port, () => console.log(`active on ${port}`));
