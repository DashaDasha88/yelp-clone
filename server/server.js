require("dotenv").config();
const express = require("express");
const app = express(); //express instance

//Middleware
app.use(express.json());

//GET ALL RESTAURANTS
app.get("/api/v1/restaurants", (req, res) => {
  console.log("route handler ran");
  res.status(200).json({
    status: "success",
    data: {
      restaurant: ["chipotle", "saigon lotus"],
    },
  });
});

//GET A RESTAURANT
app.get("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params);

  res.status(200).json({
    status: "success",
    data: {
      restaurant: ["chipotle", "saigon lotus"],
    }

  });
});

//CREATE A RESTAURANT
app.post("/api/v1/restaurants", (req, res) => {
  console.log(req.body);

  res.status(201).json({
    status: "success",
    data: {
      restaurant: ["chipotle", "saigon lotus"],
    }
  });
});

//UPDATE A RESTAURANT
app.put("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);

  res.status(200).json({
    status: "success",
    data: {
      restaurant: ["chipotle", "saigon lotus"],
    }
  });
});

//DELETE A RESTAURANT
app.delete("/api/v1/restaurants", (req, res) => {
  res.status(204).json({
    status: "success"
  });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
})
