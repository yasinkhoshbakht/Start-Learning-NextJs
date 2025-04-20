"use client";

function Error({ error }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-cyan-400 mb-6">Oops!</h1>
        <p className="text-2xl text-gray-300 mb-4">Something went wrong.</p>
        <p className="text-lg text-gray-400">
          We couldn’t find the page you’re looking for. It might have been moved
          or deleted.
        </p>
        <p className="text-lg text-red-400 mb-6">{error.message}</p>
        <div className="space-x-4">
          <a
            href="/"
            className="px-6 py-3 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition"
          >
            Go to Home
          </a>
          <a
            href="/blogs"
            className="px-6 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition"
          >
            Back to Blogs
          </a>
        </div>
      </div>
    </div>
  );
}

export default Error;
