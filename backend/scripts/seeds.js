const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
var mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI);

require("../models/User");
require("../models/Item");
require("../models/Comment");
var Item = mongoose.model("Item");
var Comment = mongoose.model("Comment");
var User = mongoose.model("User");

const ItemData = require("../data/item.json");
const CommentData = require("../data/comment.json");
const UserData = require("../data/user.json");

async function InsertData() {
  ItemData.forEach(async (item) => {
    item.seller = item.seller.$oid;
    const oldItem = await Item.find({ title: item.title });
    if (!oldItem.length) {
      var newItem = new Item(item);
      await newItem.save();
    } else {
      console.log(item.slug);
    }
  });

  UserData.forEach(async (user) => {
    const oldUser = await User.find({ username: user.username });
    if (!oldUser.length) {
      var user = new User(user);
      await user.save();
    } else {
      console.log(user.username);
    }
  });

  CommentData.forEach(async (comment) => {
    comment.item = comment.item.$oid;
    comment.seller = comment.seller.$oid;
    var newComment = new Comment(comment);
    const oldComment = await Comment.find({ _id: newComment.id });
    if (!oldComment.length) {
      await newComment.save();
    } else {
      console.log(comment.body);
    }
  });
}

process.on("SIGINT", cleanup);
process.on("SIGTERM", cleanup);

async function cleanup() {
  await Item.deleteMany({}, () => console.log("Data Cleared Item"));
  await Comment.deleteMany({}, () => console.log("Data Cleared Comment"));
  await User.deleteMany({}, () => console.log("Data Cleared User"));
  await mongoose.connection.close();
}

async function main() {
  InsertData().then(() => {
    console.debug('Data Inserted. Cleaning Now.');
    cleanup();
  });
}

<<<<<<< HEAD
main();
=======
cleanup();
>>>>>>> e8a04474331c3279b567b58dba1a051ba30401b1
