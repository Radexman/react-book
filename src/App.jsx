import { useState } from "react";
import Header from "./components/Header";
import BookDescription from "./components/BookDescription";
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
      <BookDescription bookData={data} />
      <Footer />
    </>
  );
}
