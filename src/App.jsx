import { useState } from "react";
import Header from "./components/Header";
import Book from "./components/Book";
import Footer from "./components/Footer";

export default function App() {
  const [data, setData] = useState([
    {
      title: "Hobbit",
      author: "J.R.R Tolkien",
      pages: "455",
    },
  ]);

  return (
    <>
      <Header />
      <Book bookData={data} />
      <Footer />
    </>
  );
}
