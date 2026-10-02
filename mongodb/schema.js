// Schema defines the structure and rules of Mongoose documents.
const companyScehma = new mongoose.schema({
  name: String,
  email: String,
  role: String,
});

//Schema defines the structure. Model provides the interface to work with MongoDB data using that structure.
const User = mongoose.model("User", userSchema);

//Schema defines. Model interacts. Document stores actual data.
const user = User.create({
  name: "Fatima Ghafoor",
  email: "fatima@gmail.com",
  role: "Frontend Developer",
});
