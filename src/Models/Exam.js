const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const examSchema = new Schema({
    examID: {
        type: String,
        required: true,
        unique: true,
      },

   exerciseID: [
    {
      type: Number,
    },
  ],
});

const instructor = mongoose.model("exam", examSchema);
module.exports = instructor;
