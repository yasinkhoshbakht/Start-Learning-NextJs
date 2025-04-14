import Link from "next/link";
function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 min-h-screen flex flex-col">
      <nav className="w-full h-16 bg-gray-800 flex items-center justify-center shadow-lg sticky top-0 z-50">
        <ul className="flex space-x-10 text-lg font-medium">
          <li className="hover:text-cyan-400 cursor-pointer transition duration-300">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-cyan-400 cursor-pointer transition duration-300">
            <Link href="/blogs">Blogs</Link>
          </li>
          <li className="hover:text-cyan-400 cursor-pointer transition duration-300">
            <Link href="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
      <main className="flex-grow flex flex-col items-center justify-center text-center px-6 space-y-8">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 animate-fade">
          Welcome to Your Stunning Page
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
          Dive into a modern design with sleek animations, gradient themes, and
          interactive elements. Let your creativity shine with TailwindCSS!
        </p>
        <div className="flex space-x-6">
          <button className="px-8 py-3 bg-cyan-500 rounded-md text-white font-semibold hover:bg-cyan-600 transition duration-300 shadow-lg">
            Get Started
          </button>
          <button className="px-8 py-3 bg-gray-700 rounded-md text-gray-300 font-semibold hover:bg-gray-600 transition duration-300 shadow-lg">
            Learn More
          </button>
        </div>
      </main>
      <footer className="w-full h-16 bg-gray-800 flex justify-center items-center text-gray-400">
        &copy; 2025 Wolf Company - Crafted with ❤️ and TailwindCSS
      </footer>
    </div>
  );
}

export default Home;
