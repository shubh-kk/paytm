const express = require("express");
const cors = require("cors");
// const parser = require("")

const app = express() ;
app.use(cors()) ;
app.use(express.json());

const mainRouter = require("./routes/index")


app.use("/api/v1", mainRouter) ;

app.listen(3000, () => {
    console.log("Server is running on port 3000");
}).on('error', (err) => {
    console.error("Failed to start server:", err);
});
