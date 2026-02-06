export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-white/70 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="font-semibold text-lg tracking-wide">
          Yukti.dev
        </h1>

        <div className="space-x-8 text-gray-600">
          <a href="#about" className="hover:text-black">About</a>
          <a href="#projects" className="hover:text-black">Projects</a>
          <a href="#contact" className="hover:text-black">Contact</a>
        </div>

      </div>
    </nav>
  );
}
