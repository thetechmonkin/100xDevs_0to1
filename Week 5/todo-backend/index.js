const { createToDoSchema, updateToDoSchema } = require("./types");
const { todo } = require("./db");

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;

app.post("/todo", async (req, res) => {
  // const todo = createToDoSchema.safeParse({
  //     title: req.body.title,
  //     description: req.body.description,
  // })

  // Another way

  const createPayLoad = req.body;
  const parsedPayload = createToDoSchema.safeParse(createPayLoad);

  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "Invalid Input",
    });
    return;
  }

  await todo.create({
    title: createPayLoad.title,
    description: createPayLoad.description,
    completed: false,
  });
  res.status(200).json({
    msg: "Todo Created",
  });
});

app.get("/todo", async (req, res) => {
  const todos = await todo.find({}); // Returns a promise if we not use await then todo will be updated before the promise is resolved

  res.status(200).json({
    todos,
  });
});

app.put("/completed", async (req, res) => {
  const updatedPayload = req.body;
  const parsedPayload = updateToDoSchema.safeParse(updatedPayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "Invalid Input",
    });
    return;
  }

  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );

  res.status(200).json({
    msg: "Todo Updated",
  });
});

app.delete("/todo", (req, res) => {});

app.listen(PORT, () => console.log("Server is up"));
