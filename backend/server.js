import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import sequelize from "./config/database.js";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

sequelize.sync().then(() => {
  console.log("Database connected");
}).catch((error) => {
  console.log("Database connection error:", error)
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server on port: ${PORT}`);
});
