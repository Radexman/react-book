import { useState } from "react";
import Header from "./components/Header";
import BookDescription from "./components/BookDescription";
import Footer from "./components/Footer";
import books from "./data/books";

export default function App() {
  const [entries, setData] = useState(books);

  return (
    <>
      <Header />
      {entries.map((book, i) => (
        <BookDescription key={i} book={book} />
      ))}
      <Footer />
    </>
  );
}
