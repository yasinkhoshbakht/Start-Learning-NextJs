import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-extrabold text-cyan-400 mb-4">
        Article Not Found
      </h1>
      <p className="text-gray-400 text-lg mb-8">
        Sorry, the article you are looking for is not available.
      </p>
      <Link href="/">
        <button className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition">
          Go Back to Home
        </button>
      </Link>
    </div>
  );
}
