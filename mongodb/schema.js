// Schema defines the structure and rules of Mongoose documents.
const companyScehma = new mongoose.schema({
  name: String,
  email: String,
  role: String,
});
