const express = require("express");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const authRouter = require("./routes/admin/auth");
const productsRouter = require('./routes/admin/products');

const app = express();
//built-in express mw to serve static files (images, CSS,JS) from the public dir upon request
app.use(express.static("public"));

//mw applied on all post reqs. When the req obj receives data they get automatically parsed
// from buffer to key-val object
//<Buffer 65 6d 61 69 6c 3d 61 73... -> email=asdad&passwo... -> {email: ..., password:...}
//works with urlencoded forms - doenst work with multipart forms
app.use(bodyParser.urlencoded({ extended: true }));

//mw to store info on cookies (sign up/in/out functionality)
app.use(
  cookieSession({
    keys: ["39fh03u4fh3"],
  })
);
app.use(authRouter);
app.use(productsRouter);

app.listen(3000, () => {
  console.log("Listening");
});
