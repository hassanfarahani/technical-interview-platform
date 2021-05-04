let mongoose = require("mongoose");

let Interview = new mongoose.Schema(
  {
    owner: {
      type: mongoose.ObjectId,
      required: true,
      ref: "users",
    },
    guest: {
      type: mongoose.ObjectId,
      ref: "users",
    },
    date: {
      type: Date,
      required: true,
    },
    theme: {
      type: String,
    },
    questions: {
      type: [mongoose.ObjectId],
    },
    isFinished: {
      type: Boolean,
      default: false,
    },
    difficulty: {
      type: Number,
      enum: [0, 1, 2],
      required: true,
    },
    participants: {
      type: Array,
    },
  },
  {
    collection: "interviews",
  }
);

module.exports = mongoose.model("Interview", Interview);
