import { FaTimes } from "react-icons/fa";

export default function BookDesciption({ book }) {
  return (
    <div className="book-card">
      <h2 className="text-3xl">{book.title}</h2>
      <p className="text-2xl">{book.author}</p>
      <p className="xl">{`Pages: ${book.pages}`}</p>
      <button title="Delete Book" className="delete-btn group">
        <FaTimes className="group-hover:text-slate-50" />
      </button>
    </div>
  );
}
