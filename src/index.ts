import express, { Application } from "express";

const app: Application = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res, next) => {
  const { ip } = req;

  res.status(200).json({
    ip,
    message: "hello word",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server live at http://localhost:${PORT}`);
});
