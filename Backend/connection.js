const mongoose = require("mongoose");
mongoose
  .connect(
   'mongodb+srv://athiraa7012:<ATHIRA2004>@cluster0.t2zjr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  , {dbName:"examBlog"})
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });

  module.exports = mongoose;
