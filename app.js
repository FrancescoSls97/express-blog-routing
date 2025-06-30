const express = require("express");
const app = express();
const port = 3000;
const postsrouter = require("./routers/posts");

app.use(express.static("imgs"));
app.use("/api/posts", postsrouter);
app.get("/", (req, res) => {
  res.send("Welcome to my blog");
});

app.listen(port, () => {
  console.log("Listening to server");
});
