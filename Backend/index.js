const express = require("express");
const cors = require("cors");
const { BlogModel } = require("./model");

const app = express();
var PORT = 3001;
app.use(express.json());
app.use(cors());


app.get("/get", async (req, res) => {
  try {
    let data = await BlogModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

app.post("/post", async (req, res) => {
  try {
    let blog;

    if (req.body._id) {
      blog = await BlogModel.findByIdAndUpdate(
        req.body._id,
        {
          title: req.body.title,
          content: req.body.content,
          img_url: req.body.img_url,
        },
        { new: true }
      );
      if (!blog) {
        return res.status(404).send({ message: 'Blog not found' });
      }
    } else {
      blog = new BlogModel({
        title: req.body.title,
        content: req.body.content,
        img_url: req.body.img_url,
      });
      await blog.save();
    }

    res.status(201).send(blog);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Server error' });
  }
});

app.delete('/delete/:id', async (req, res) => {
  try {
    await BlogModel.deleteOne({ _id: req.params.id })
    res.status(200).send({ message: "deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Server error' });
  }
})




app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
