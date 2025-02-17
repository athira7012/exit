import mongoose from './connection.js'; 


const schema = new mongoose.Schema({
  title:  String,
  content:  String,
  img_url: String,
});

export const BlogModel = mongoose.model("Blog", schema);
