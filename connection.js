var mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://annalilly238:abelnova238@cluster0.f6whpuo.mongodb.net/studentapp?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });
