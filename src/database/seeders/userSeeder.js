import bcrypt from "bcrypt";
import "dotenv/config";
import mongoose from "mongoose";
import User from "../entities/users/user.model.js";

const userSeeder = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {});

    const users = [
      {
        first_name: "Tim",
        last_name: "Spaan",
        email: "tim@tim.com",
        password: bcrypt.hashSync(
          "password01",
          parseInt(process.env.SALT_ROUNDS)
        ),
        role: "super_admin",
      },
      {
        first_name: "Mandy",
        last_name: "Spaan",
        email: "mandy@mandy.com",
        password: bcrypt.hashSync(
          "password02",
          parseInt(process.env.SALT_ROUNDS)
        ),
        role: "super_admin",
      },
      {
        first_name: "Nikoleta",
        last_name: "Freidenfulde",
        email: "lulu@lulu.com",
        password: bcrypt.hashSync(
          "password03",
          parseInt(process.env.SALT_ROUNDS)
        ),
        role: "user",
      },
      {
        first_name: "José",
        last_name: "KnoWay",
        email: "knoway@knoway.com",
        password: bcrypt.hashSync(
          "password04",
          parseInt(process.env.SALT_ROUNDS)
        ),
        role: "user",
      },
      {
        first_name: "Mattia",
        last_name: "Rico",
        email: "rico@rico.com",
        password: bcrypt.hashSync(
          "password05",
          parseInt(process.env.SALT_ROUNDS)
        ),
        role: "user",
      },
    ];
    await User.insertMany(users);

    console.log("User seeder successfully");
  } catch (error) {
    console.log("Error user seeder", error.message);
  } finally {
    await mongoose.connection.close();
  }
};

userSeeder();
