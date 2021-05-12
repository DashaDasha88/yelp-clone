require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express(); //express instance

//Middleware
app.use(cors());
app.use(express.json());

//GET ALL RESTAURANTS
app.get("/api/v1/restaurants", async (req, res) => {

  try {
    const results = await db.query("SELECT * FROM restaurants");

    res.status(200).json({
      status: "success",
      result: results.rows.length,
      data: {
        restaurant: results.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }

});

//GET A RESTAURANT
app.get("/api/v1/restaurants/:id", async (req, res) => {

  try {
    const results = await db.query("SELECT * FROM restaurants where id = $1", [req.params.id]);

    res.status(200).json({
      status: "success",
      result: results.rows.length,
      data: {
        restaurant: results.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }

});

//CREATE A RESTAURANT
app.post("/api/v1/restaurants", async (req, res) => {
  console.log(req.body);

  try {
    const results = await db.query (
      "INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3) returning *",
      [req.body.name, req.body.location, req.body.price_range]
    );
    res.status(201).json({
      status: "success",
      
    })

  } catch (err) {
    console.log(err);
  }

});

//UPDATE A RESTAURANT
app.put("/api/v1/restaurants/:id", async (req, res) => {
  console.log(req.body);

  try {
    const results = await db.query (
      "UPDATE restaurants SET name = $1, location = $2, price_range = $3 where id = $4 returning *",
      [req.body.name, req.body.location, req.body.price_range, req.params.id]
    );
    res.status(201).json({
      status: "success",  
      data: {
        restaurant: results.rows[0],
      },
    });

  } catch (err) {
    console.log(err);
  }
});

//DELETE A RESTAURANT
app.delete("/api/v1/restaurants", async (req, res) => {
  console.log(req.body);

  try {
    const results = await db.query (
      "DELETE FROM restaurants where id = $1",
      [req.params.id]
    );
    res.status(201).json({
      status: "success",
    });

  } catch (err) {
    console.log(err);
  }

});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});
