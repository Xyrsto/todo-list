const express = require("express");
const mongoose = require("mongoose");
const Task = require("./taskModel.cjs");
const cors = require("cors");
const app = express();

const uri =
  "mongodb+srv://admin:admin@cluster0.ujeva17.mongodb.net/TodoListTasks?retryWrites=true&w=majority";

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

mongoose
  .connect(uri)
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log(err);
  });


app.post("/addTask", async (req, res) => {
    try{
        const task = await Task.create(req.body)
        console.log('Color create: ', task)
        res.status(200).json({
            status: 'success',
            data: task
        })
    }catch(err){
        console.log(err)
    }
})