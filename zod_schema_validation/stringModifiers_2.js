const { z } = require("zod");

const registerationSchema = z.object({
  email: z
    .string()
    .trim()
    .email({ message: "Email format is wrong. Enter correct email!" }),

  password: z
    .string()
    .trim()
    .min(6, { message: "Password must have minimum 6 characters." })
    .max(15, { message: "Password must have maximum 15 characters." }),

  bio: z
    .string()
    .trim()
    .min(10, { message: "Bio must have minimum 10 characters." })
    .max(200, { message: "Bio cannot be greater than 200 charcters length" }),
});

// ----- TEST 1 ------
const cleanInput = registerationSchema.safeParse({
  email: "test@gmail.com",
  password: "test12345",
  bio: "Hello my name is Fatima Ghafoor. I am a developer",
});

console.log("Test 1 Success:", cleanInput.success);

// ----- Test 2 ------
const faultyInput = registerationSchema.safeParse({
  email: "testgmail.com",
  password: "test",
  bio: "Hello!",
});

console.log("Test 2 Success:", faultyInput.success);

if (!faultyInput.success) {
  console.log(faultyInput.error.format());
}
