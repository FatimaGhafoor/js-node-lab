let books = [
  { id: 1, title: "The Alchemist", genre: "Fiction" },
  { id: 2, title: "Sapiens", genre: "History" },
];

exports.getBooks = (req, res) => {
  const requestedGenre = req.query.genre;
  if (requestedGenre) {
    const filteredBooks = books.filter(
      (book) => book.genre.toLowerCase() === requestedGenre.toLowerCase(),
    );
    return res.status(200).json(filteredBooks);
  }
  res.status(200).json(books);
};

exports.createBook = (req, res) => {
  const { title, genre } = req.body;
  if (!title || !genre) {
    return res
      .status(400)
      .json({ error: "Title and genre both are compulsory!" });
  }
  const newBook = { id: Date.now(), title, genre };
  books.push(newBook);
  res.status(201).json(newBook);
};

exports.getBookById = (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find((b) => b.id === bookId);
  if (!book) {
    return res.status(404).json({ error: "Book not found!" });
  }
  res.status(200).json(book);
};
