import Link from "next/link";
import { notFound } from "next/navigation";

function SingleBlog({ params }) {
  const { slug } = params;
  if (slug.length > 50) {
    notFound();
  }
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
      <header className="w-full bg-gray-800 py-6 text-center shadow-lg">
        <h1 className="text-5xl font-extrabold text-cyan-400">
          Blog Post: {slug}
        </h1>
        <p className="text-gray-400 mt-4 text-lg">
          Everything you need to know about {slug}
        </p>
      </header>
      <div className="flex flex-grow px-6">
        <main className="flex-grow flex flex-col items-center justify-start text-center px-6 space-y-8 mt-10 pb-40">
          <div className="max-w-3xl ">
            <h2 className="text-3xl font-bold text-cyan-300 mb-4">
              The Essence of {slug}
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Welcome to an extensive exploration of <strong>{slug}</strong>.
              This topic has been at the heart of numerous discussions and
              innovations worldwide, influencing both individual perspectives
              and broader societal trends. The journey of{" "}
              <strong>{slug}</strong> begins with its foundational principles,
              which have shaped its evolution over the years. It is a subject
              that spans historical contexts, scientific milestones, and
              transformative applications that continue to impact various
              domains. Understanding <strong>{slug}</strong> not only allows us
              to appreciate its past contributions but also to predict the
              limitless opportunities it holds for the future. The inherent
              ability of <strong>{slug}</strong> to adapt and connect seemingly
              disparate concepts is what makes it an indispensable tool in
              today's dynamic world. From advancing technology to fostering
              collaboration across industries, <strong>{slug}</strong> stands as
              a beacon of innovation. Throughout history,{" "}
              <strong>{slug}</strong> has not only solved complex challenges but
              also inspired creativity and intellectual growth. Its evolution
              from theoretical ideas to practical implementations showcases the
              profound impact of human ingenuity. By delving deeper into the
              roots of <strong>{slug}</strong>, we uncover a treasure trove of
              insights that highlight its unparalleled significance in shaping
              our modern reality.
            </p>
          </div>
          <div className="max-w-3xl mt-8">
            <h2 className="text-3xl font-bold text-cyan-300 mb-4">
              Applications and Future Potential
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              The applications of <strong>{slug}</strong> are as diverse as its
              impacts. From revolutionizing healthcare to transforming education
              systems, <strong>{slug}</strong> has found its way into virtually
              every aspect of human life. In technology, it serves as the
              foundation for groundbreaking innovations such as artificial
              intelligence, blockchain, and quantum computing. In healthcare,{" "}
              <strong>{slug}</strong> enables advanced diagnostic methods and
              personalized treatments, bringing hope to millions across the
              globe. The future of <strong>{slug}</strong> is equally promising.
              As industries continue to embrace its principles, the
              possibilities for leveraging <strong>{slug}</strong> become
              virtually limitless. Experts foresee its involvement in creating
              smarter cities, enhancing global connectivity, and solving
              pressing environmental challenges. With ongoing research and
              development, <strong>{slug}</strong> is set to redefine the
              boundaries of human potential. Engaging with{" "}
              <strong>{slug}</strong> allows us to not only understand its
              current applications but also envision its future trajectory. It
              invites us to participate in shaping a world where innovation and
              collaboration thrive. By investing in <strong>{slug}</strong>, we
              pave the way for a brighter, more sustainable future for
              generations to come.
            </p>
          </div>
        </main>
        <aside className="w-1/4 bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold text-cyan-400 mb-4">
            Other Articles
          </h2>
          <ul className="space-y-4">
            <li className="bg-gray-700 p-4 rounded-md shadow hover:shadow-lg transition">
              <h3 className="text-white text-lg font-semibold">
                The Rise of AI
              </h3>
              <p className="text-gray-400 text-sm">
                How AI is shaping the future
              </p>
              <Link
                href={`/blogs/rise-of-ai`}
                className="block mt-2 text-cyan-400 hover:underline"
              >
                Read More
              </Link>
            </li>
            <li className="bg-gray-700 p-4 rounded-md shadow hover:shadow-lg transition">
              <h3 className="text-white text-lg font-semibold">
                Sustainability in 2025
              </h3>
              <p className="text-gray-400 text-sm">Trends for a better world</p>
              <Link
                href={`/blogs/sustainability-2025`}
                className="block mt-2 text-cyan-400 hover:underline"
              >
                Read More
              </Link>
            </li>
            <li className="bg-gray-700 p-4 rounded-md shadow hover:shadow-lg transition">
              <h3 className="text-white text-lg font-semibold">
                Crypto and the Future
              </h3>
              <p className="text-gray-400 text-sm">
                Impact of cryptocurrencies
              </p>
              <Link
                href={`/blogs/crypto-and-future`}
                className="block mt-2 text-cyan-400 hover:underline"
              >
                Read More
              </Link>
            </li>
          </ul>
        </aside>
      </div>
      <div className="px-6 py-10 bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-6">Leave a Comment</h2>
        <form className="max-w-2xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
          <label className="block text-gray-400 mb-2" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 bg-gray-700 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />

          <label className="block text-gray-400 mt-4 mb-2" htmlFor="comment">
            Comment:
          </label>
          <textarea
            id="comment"
            name="comment"
            rows="4"
            className="w-full px-4 py-2 bg-gray-700 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          ></textarea>

          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
      <footer className="w-full bg-gray-800 py-4 text-center text-gray-400 mt-auto">
        &copy; 2025 Wolf Company - All rights reserved
      </footer>
    </div>
  );
}
export async function generateMetadata({ params }) {
  const { slug } = params;
  return {
    title: `${slug} (article) Page`,
    description: `here is ${slug} article page`,
  };
}

export default SingleBlog;
