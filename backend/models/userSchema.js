const mongoose= require("mongoose")


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['admin', 'vendor', 'user'],
    required: true,
    // default:"user"
  },
  vendorname: {
    type: String,
    required: function() {
      return this.type === 'vendor';
    }
  },
  vendornumber: {
    type: Number,
    required: function() {
      return this.type === 'vendor';
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
const User= mongoose.model("user", userSchema)

module.exports= User








