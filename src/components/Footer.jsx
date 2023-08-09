export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="absolute bottom-0 w-full bg-[rgba(0,0,0,0.4)] p-4 text-center text-slate-50">
      <p className="text-sm">{`Best library ${year}`}</p>
    </footer>
  );
}
