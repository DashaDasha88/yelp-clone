require("dotenv").config();
const express = require("express");
const app = express(); //express instance

//Middleware
app.use((req, res, next) => {
  console.log("middleware");
  next();
});

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
})

//CREATE A RESTAURANT
app.post("/api/v1/restaurants", (req, res) => {
  console.log(req);
})

//UPDATE A RESTAURANT

//DELETE A RESTAURANT

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});