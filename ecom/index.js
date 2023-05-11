const express = require("express");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const authRouter = require("./routes/admin/auth");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ["39fh03u4fh3"],
  })
);
app.use(authRouter);


app.listen(3000, () => {
  console.log("Listening");
});
