// import
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const product = require("./data");

// express
const app = express();
const port = process.env.PORT || 3000;

// built in middleware
app.use(express.static("public"));

// ejs
app.set("view engine", "ejs");

// layouts (middleware)
app.use(expressLayouts);

// routing
app.get("/", (req, res) => {
  res.render("welcome", {
    layout: "welcome",
  });
});

app.get("/home", (req, res) => {
  res.render("home", {
    layout: "layouts/main-layout",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    layout: "layouts/main-layout",
  });
});

app.get("/shop", (req, res) => {
  res.render("shop", {
    product,
    layout: "layouts/main-layout",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    layout: "layouts/main-layout",
  });
});

// server
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
