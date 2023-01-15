const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    ticketID: {
        type: String,
        required: true,
        unique: true,
      },

    ticketStatus:{
        type:String,
        required:true,
        default:"unseen",
    },

    ticketType:{
        type:String,
        required:true,
    },

    ticketText:{
        type:String,
    },

    courseID: {
        type: String,
        required: true,
    }

})

const Ticket = mongoose.model('Ticket', ticketSchema);
module.exports = Ticket;