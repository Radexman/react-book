import PropTypes from "prop-types";
import { FaTimes as Xmark } from "react-icons/fa";

export default function BookDesciption({ book }) {
  return (
    <div className="book-card">
      <h2 className="text-3xl font-semibold">{book.title}</h2>
      <p className="text-2xl">{book.author}</p>
      <p className="xl">{`Pages: ${book.pages}`}</p>
      <button title="Delete Book" className="delete-btn group">
        <Xmark className="group-hover:text-slate-50" />
      </button>
    </div>
  );
}

BookDesciption.propTypes = {
  book: PropTypes.object.isRequired,
};

BookDesciption.defaultProp = {
  book: {
    title: "Book Title",
    author: "Book Author",
    pages: "Page number",
  },
};
