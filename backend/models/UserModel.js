const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    income: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Income",
      },
    ],
    expense: [
      {
        type: mongoose.Schema.Types.ObjectId, //Indicates that each entry in the 
        // array refers to an object ID from another MongoDB collection
        ref: "Expense",
      },
    ],
    avatar: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },

  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
