const { z } = require("zod");

const userSchema = z.object({
  name: z.string(),
  age: z.number(),
  phoneNumber: z.string(),
});

const result = userSchema.safeParse({
  name: "Fatima",
  age: 23,
  phoneNumber: "0300-1234567",
});

if (!result.success) {
  console.log("Validation Failed:", result.error.format());
} else {
  console.log("Validation Successful!", result.data);
}
