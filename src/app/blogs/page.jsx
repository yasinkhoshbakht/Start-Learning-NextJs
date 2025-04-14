import Link from "next/link";

function Blogs() {
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
      <div className="px-6 py-10 bg-gray-900 flex-grow">
        <h2 className="text-3xl font-bold text-center mb-6">
          Explore Our Blogs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-800 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-white">The Rise of AI</h3>
            <p className="text-gray-400 mt-2">
              Discover how AI is shaping the future of technology and our world.
            </p>
            <ul className="text-gray-400 mt-4 space-y-2">
              <li>📅 Published: March 2025</li>
              <li>👤 Author: Jane Doe</li>
              <li>💬 Comments: 12</li>
            </ul>
            <Link href="/blogs/rise-of-ai">
              <button className="mt-4 px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition">
                Read More
              </button>
            </Link>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-white">
              Sustainability in 2025
            </h3>
            <p className="text-gray-400 mt-2">
              Learn the latest sustainability trends for creating a better
              world.
            </p>
            <ul className="text-gray-400 mt-4 space-y-2">
              <li>📅 Published: February 2025</li>
              <li>👤 Author: John Smith</li>
              <li>💬 Comments: 8</li>
            </ul>
            <Link href="/blogs/sustainability-2025">
              <button className="mt-4 px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition">
                Read More
              </button>
            </Link>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-white">
              Crypto and the Future
            </h3>
            <p className="text-gray-400 mt-2">
              Uncover the impact of cryptocurrencies on the global economy.
            </p>
            <ul className="text-gray-400 mt-4 space-y-2">
              <li>📅 Published: January 2025</li>
              <li>👤 Author: Emily Johnson</li>
              <li>💬 Comments: 15</li>
            </ul>
            <Link href="/blogs/crypto-and-future">
              <button className="mt-4 px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition">
                Read More
              </button>
            </Link>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-white">
              The Future of Quantum Computing
            </h3>
            <p className="text-gray-400 mt-2">
              Explore the limitless possibilities of quantum computing and how
              it can revolutionize industries.
            </p>
            <ul className="text-gray-400 mt-4 space-y-2">
              <li>📅 Published: April 2025</li>
              <li>👤 Author: Alice Morgan</li>
              <li>💬 Comments: 10</li>
            </ul>
            <Link href="/blogs/future-of-quantum-computing">
              <button className="mt-4 px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition">
                Read More
              </button>
            </Link>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-white">
              Advancements in Renewable Energy
            </h3>
            <p className="text-gray-400 mt-2">
              Discover how new technologies are driving progress toward a
              sustainable energy future.
            </p>
            <ul className="text-gray-400 mt-4 space-y-2">
              <li>📅 Published: March 2025</li>
              <li>👤 Author: Robert Lee</li>
              <li>💬 Comments: 18</li>
            </ul>
            <Link href="/blogs/renewable-energy-advancements">
              <button className="mt-4 px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition">
                Read More
              </button>
            </Link>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-white">
              Artificial Intelligence in Healthcare
            </h3>
            <p className="text-gray-400 mt-2">
              Learn how AI is transforming diagnostics, treatments, and patient
              care across the globe.
            </p>
            <ul className="text-gray-400 mt-4 space-y-2">
              <li>📅 Published: February 2025</li>
              <li>👤 Author: Dr. Sarah Kim</li>
              <li>💬 Comments: 25</li>
            </ul>
            <Link href="/blogs/ai-in-healthcare">
              <button className="mt-4 px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition">
                Read More
              </button>
            </Link>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-white">
              Exploring Space: Mars Colonization
            </h3>
            <p className="text-gray-400 mt-2">
              Dive into the latest missions and plans for colonizing the red
              planet.
            </p>
            <ul className="text-gray-400 mt-4 space-y-2">
              <li>📅 Published: January 2025</li>
              <li>👤 Author: Elon Stark</li>
              <li>💬 Comments: 30</li>
            </ul>
            <Link href="/blogs/mars-colonization">
              <button className="mt-4 px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition">
                Read More
              </button>
            </Link>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-white">
              The Evolution of Smart Cities
            </h3>
            <p className="text-gray-400 mt-2">
              Discover how technology is driving innovation in urban development
              and connectivity.
            </p>
            <ul className="text-gray-400 mt-4 space-y-2">
              <li>📅 Published: December 2024</li>
              <li>👤 Author: Emily Carter</li>
              <li>💬 Comments: 14</li>
            </ul>
            <Link href="/blogs/evolution-of-smart-cities">
              <button className="mt-4 px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition">
                Read More
              </button>
            </Link>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-white">
              Breakthroughs in Biotechnology
            </h3>
            <p className="text-gray-400 mt-2">
              Uncover the latest innovations in biotech that are revolutionizing
              medicine and agriculture.
            </p>
            <ul className="text-gray-400 mt-4 space-y-2">
              <li>📅 Published: November 2024</li>
              <li>👤 Author: Dr. Alex Green</li>
              <li>💬 Comments: 20</li>
            </ul>
            <Link href="/blogs/biotech-breakthroughs">
              <button className="mt-4 px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
      <footer className="w-full bg-gray-800 py-4 text-center text-gray-400 fixed bottom-0">
        &copy; 2025 Wolf Company - All rights reserved
      </footer>
    </div>
  );
}

export default Blogs;
