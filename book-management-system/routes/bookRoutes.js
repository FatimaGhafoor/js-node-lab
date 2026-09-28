const express = require("express");
const router = express.Router();
const bookController = require("../controller/bookController");

router.get("/", bookController.getBooks);
router.post("/", bookController.createBook);
router.get("/:id", bookController.getBookById);

module.exports = router;
