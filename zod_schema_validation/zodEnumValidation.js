const { z } = require("zod");

const userProfileSchema = z.object({
  username: z.string().trim(),

  role: z.enum(["admin", "user"], {
    error_map: () => ({
      message: "Role only can be 'admin' or  'user'",
    }),
  }),
});

//----Test 1 -----
const correctInputInput = userProfileSchema.safeParse({
  username: "fatima_dev",
  role: "admin",
});
console.log("Test 1 Success:", correctInput.success);

//----Test 2----
const faultyInput = userProfileSchema.safeParse({
  username: "unknown_user",
  role: "super-admin",
});
console.log("Test 2 Success:", faultyInput.success);

if (!faultyInput.success) {
  console.log(faultyInput.error.format());
}
