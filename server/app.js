import express from "express";
import cors from "cors";
import Connection from "./database/db.js";
import load_db from "./database/load_db.js";
import User from "./database/user_model.js";

const app = express();
const port = 8000;
app.use(cors());
app.use(express.json({ extended: true }));

await Connection();
await load_db();

app.get("/users1", async (req, res) => {
  try {
    const users1 = await User.find({
      income: { $lt: 5 },
      car: { $in: ["BMW", "Mercedes-Benz"] },
    }).select("-_id -__v");
    console.log("Users1: ", users1.length);
    return res.status(200).json(users1);
  } catch (error) {
    return res.status(500).json(error.mesage);
  }
});

app.get("/users2", async (req, res) => {
  try {
    const users2 = await User.find({
      gender: { $eq: "Male" },
      phone_price: { $gt: 10000 },
    }).select("-_id -__v");
    console.log("Users2: ", users2.length);
    return res.status(200).json(users2);
  } catch (error) {
    return res.status(500).json(error.mesage);
  }
});

app.get("/users3", async (req, res) => {
  try {
    const users3 = await User.find({
      last_name: /^M/,
      $expr: { $gt: [{ $strLenCP: "$quote" }, 15] },
      $where: function () {
        return this.email.toLowerCase().includes(this.last_name.toLowerCase());
      },
    });
    console.log("Users3: ", users3.length);
    return res.status(200).json(users3);
  } catch (error) {
    return res.status(500).json(error.mesage);
  }
});

app.get("/users4", async (req, res) => {
  try {
    const users4 = await User.find({
      car: { $in: ["BMW", "Mercedes-Benz", "Audi"] },
      email: { $not: { $regex: /\d/ } },
    });
    console.log("Users4: ", users4.length);
    return res.status(200).json(users4);
  } catch (error) {
    return res.status(500).json(error.mesage);
  }
});

app.get("/users5", async (req, res) => {
  try {
    User.aggregate([
      {
        $group: {
          _id: "$city",
          count: { $sum: 1 },
        },
      },
      { $sort: { count: -1 } },
      { $limit: 10 },
    ]).then(async (cities) => {
      const cityIds = cities.map((city) => city._id);
      const users5 = await User.find({ city: { $in: cityIds } });
      console.log("Users5: ", users5.length);
      return res.status(200).json(users5);
    });
  } catch (error) {
    return res.status(500).json(error.mesage);
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
