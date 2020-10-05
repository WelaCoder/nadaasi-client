const express = require("express");
const app = express();
var fs = require("fs");

const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

// connectDB();
// app.get("/uploads/:file", (req, res) => {
//   res.sendFile(__dirname + "/client/public/uploads/" + req.params.file);
// });
app.use(function (req, res, next) {
  if (req.secure) {
    // request was via https, so do no special handling
    next();
  } else {
    // request was via http, so redirect to https
    res.redirect('https://' + req.headers.host + req.url);
  }
});
app.get("/payment", (req, res) => {
  fs.writeFile("mynewfile3.html", req.body.html, function (err) {
    if (err) throw err;
    console.log("Saved!");
  });

  return res.sendFile(__dirname + "/mynewfile3.html");
});
app.use(express.json({ extended: true }));
// app.use("/api/user", require("./routes/user"));
// app.use("/api/product", require("./routes/product"));
// app.use("/api/cart", require("./routes/cart"));
// app.use("/api/payment", require("./routes/payment"));
// app.use("/api/order", require("./routes/order"));
// app.use("/api/testimonial", require("./routes/testimonial"));
// app.use("/api/shipping", require("./routes/shipping"));
// app.use("/api/voucher", require("./routes/voucher"));
const root = require("path").join(__dirname, "client", "build");
app.use(express.static(root));
app.get("*", (req, res) => {
  res.sendFile("index.html", { root });
});
app.listen(PORT, () => {
  console.log(`Server is runing on port ${PORT}`);
});
