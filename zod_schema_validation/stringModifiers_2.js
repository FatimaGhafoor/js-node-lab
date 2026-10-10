const { z, email } = require("zod");

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
});

// ----- TEST 1 ------
const cleanInput = registerationSchema.safeParse({
  email: "test@gmail.com",
  password: "test12345",
});

console.log("Test 1 Success:", cleanInput.success);

// ----- Test 2 ------
const faultyInput = registerationSchema.safeParse({
  email: "testgmail.com",
  password: "test",
});

console.log("Test 2 Success:", faultyInput.success);

if (!faultyInput.success) {
  console.log(faultyInput.error.format());
}
