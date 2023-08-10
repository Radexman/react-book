export default function BookDesciption({ bookData }) {
  return (
    <div className="space-y-2 p-4 text-slate-50">
      <h1 className="text-3xl">{bookData[0].title}</h1>
      <h2 className="text-2xl">{bookData[0].author}</h2>
      <h3 className="xl">{bookData[0].pages}</h3>
    </div>
  );
}
