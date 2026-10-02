//Validation protects application's data quality by rejecting data that doesn't satisfy defined rules.

const userSchema = new mongoose.schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },

  email: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    required: true,
    enum: ["candidate", "company", "admin"],
  },

  age: {
    type: Number,
    min: 18,
    max: 100,
  },
});
