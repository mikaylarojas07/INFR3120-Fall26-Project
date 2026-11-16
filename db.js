const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://deanpilieci:mongo111@cluster0.o3pemvu.mongodb.net/INFR3120-Fall26-Project?retryWrites=true&w=majority"
);

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.log("MongoDB Error:", err);
});