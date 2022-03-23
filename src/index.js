import app from "./app";
import "./database";

app.listen(app.get("port"), (req, res) => {
  console.log("Server on PORT: ", app.get("port"));
});
