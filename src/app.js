import express from "express";
import TasksRoutes from "./routes/tasks.routes";
import morgan from "morgan";
import cors from "cors";

const app = express();

//settings
app.set("port", process.env.PORT || 3000);

//middlewares
const corsOptions = { origin: "http://localhost:3000" };
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my application" });
});

app.use("/api/tasks", TasksRoutes);

export default app;
