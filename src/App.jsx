import { useState } from "react";
import Header from "./components/Header";
import BookDescription from "./components/BookDescription";
import Footer from "./components/Footer";
import books from "./data/books";

export default function App() {
  const [entries, setData] = useState(books);

  return (
    <>
      <Header data={entries} />
      <main className="flex flex-col flex-wrap items-center justify-center gap-6 p-8 md:flex-row">
        {entries.map((book, i) => (
          <BookDescription key={i} book={book} />
        ))}
      </main>
      <Footer />
    </>
  );
}
