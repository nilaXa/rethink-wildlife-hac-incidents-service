import app from "./app.mjs";
import "dotenv/config";

const PORT = parseInt(process.env.PORT) || 8888;

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
