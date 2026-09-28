const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let books = [
  { id: 1, title: "The Alchemist", genre: "Fiction" },
  { id: 2, title: "Sapiens", genre: "History" },
];

app.use((req, res, next) => {
  console.log(`[Log]: ${req.method} request recieved on ${req.url}`);
  next();
});

const getBooksController = (req, res) => {
  const requestedGenre = req.query.genre;

  if (requestedGenre) {
    const filteredBooks = books.filter(
      (book) => book.genre.toLowerCase() === requestedGenre.toLowerCase(),
    );
    return res.status(200).json(filteredBooks);
  }
  res.status(200).json(books);
};

app.get("/books", getBooksController);

const createBookController = (req, res) => {
  const { title, genre } = req.body;

  if (!title || !title.trim() || !genre || !genre.trim()) {
    return res
      .status(400)
      .json({ error: "Title and genre both are compulsory!" });
  }

  const newBook = {
    id: Date.now(),
    title: title,
    genre: genre,
  };
  books.push(newBook);

  res.status(201).json(newBook);
};

app.post("/books", createBookController);

const getBookIdController = (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find((b) => b.id === bookId);

  if (!book) {
    return res.status(404).json({ error: "Book nahi mili!" });
  }
  res.status(200).json(book);
};

app.get("/books/:id", getBookIdController);

app.listen(port, () => {
  console.log("Server running on port 3000");
});
