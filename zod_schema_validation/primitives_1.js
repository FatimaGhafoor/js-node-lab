const { z } = require("zod");

const nameSchema = z.string();
const ageSchema = z.number();
const isActiveSchema = z.boolean();

// --- TEST CASE 1: Correct Data (Pass) ---
const testname = nameSchema.safeParse("Fatima Gahfoor");
const testAge = ageSchema.safeParse(26);
const testIsActive = isActiveSchema.safeParse(true);

console.log(testname.success);
console.log(testAge);
console.log(testIsActive);

// --- TEST CASE 2: Wrong Data (Fail) ---
const wrongName = nameSchema.safeParse(404);
const wrongAge = ageSchema.safeParse("twenty");

console.log(wrongName.success);
console.log(wrongAge);
