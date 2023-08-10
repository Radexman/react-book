export default function BookDesciption({ book }) {
  return (
    <div className="space-y-2 p-4 text-slate-50">
      <h1 className="text-3xl">{book.title}</h1>
      <h2 className="text-2xl">{book.author}</h2>
      <h3 className="xl">{book.pages}</h3>
    </div>
  );
}
