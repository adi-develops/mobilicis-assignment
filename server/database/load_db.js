import { readFile } from "fs";
import User from "./user_model.js";

const load_db = async () => {
  const users = await User.find();

  if (!users.length) {
    readFile("./database/sample_data.json", "utf8", (err, data) => {
      if (!err) {
        const userData = JSON.parse(data);
        User.insertMany(userData)
          .then(() => {
            console.log("Successfully saved default items to DB");
          })
          .catch((err) => {
            console.log("Error inserting data: ", err.message);
          });

        User.updateMany({}, [
          {
            $set: {
              "income": {
                $toDouble: {
                  $replaceOne: { input: "$income", find: {$literal: "$"}, replacement: "" },
                },
              },
              "phone_price": { $toInt: "$phone_price" },
            },
          },
        ])
          .then((result) => {
            console.log(`Updated ${result.modifiedCount} documents`);
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        console.log("Error reading file: ", err.message);
      }
    });
  }
};

export default load_db;
