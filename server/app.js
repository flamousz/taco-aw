if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
}

const express = require("express");
const errorHandler = require("./middlewares/errorHandler");
const router = require("./routes");
const app = express();
const port = process.env.PORT || 3009;

const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", router);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
