export default function Header({ data }) {
  const avialableBooks = data.length;

  return (
    <header className="space-y-4 bg-[rgba(0,0,0,0.5)] p-4 text-center text-slate-50">
      <h1 className=" text-4xl font-semibold ">Welcome to the library</h1>
      <p className="text-sm">Check currently avialable books</p>
      <p>{`Books: ${avialableBooks}`}</p>
    </header>
  );
}
