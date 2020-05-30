const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add API routes
app.use(routes);

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.use((req, res) =>
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
  );
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/MERN-EXAMPLE");
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
