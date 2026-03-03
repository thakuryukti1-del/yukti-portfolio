export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-xl font-bold tracking-wide cursor-pointer hover:opacity-80 transition">
          Yukti<span className="text-slate-600">.dev</span>
        </h1>

        <div className="flex gap-8 text-gray-600 text-sm font-medium">

          {["about", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="relative group hover:text-slate-800 transition"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-slate-800 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

        </div>
      </div>
    </nav>
  );
}