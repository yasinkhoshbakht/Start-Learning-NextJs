import Link from "next/link";

function Profile() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 min-h-screen flex flex-col items-center">
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
      <div className="flex flex-col items-center mt-10">
        <div className="w-32 h-32 bg-gray-700 rounded-full flex justify-center items-center shadow-lg">
          <span className="text-2xl font-bold text-gray-400">JD</span>
        </div>
        <h2 className="mt-4 text-2xl font-semibold text-white">John Doe</h2>
        <p className="text-gray-400">johndoe@example.com</p>
        <button className="mt-4 px-6 py-2 bg-cyan-500 rounded-md text-white hover:bg-cyan-600 transition shadow-lg">
          Edit Profile
        </button>
      </div>
      <div className="mt-10 bg-gray-800 p-6 w-3/4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-white mb-4">
          Account Details
        </h3>
        <ul className="text-gray-400 space-y-2">
          <li>
            <strong className="text-white">Username:</strong> johndoe
          </li>
          <li>
            <strong className="text-white">Email:</strong> johndoe@example.com
          </li>
          <li>
            <strong className="text-white">Member Since:</strong> January 2020
          </li>
          <li>
            <strong className="text-white">Plan:</strong> Premium
          </li>
        </ul>
      </div>
      <div className="mt-10 bg-gray-700 p-6 w-3/4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-white mb-4">
          Recent Activities
        </h3>
        <ul className="text-gray-400 space-y-2">
          <li>✨ Published an article: "The Future of Technology"</li>
          <li>👍 Liked a post: "10 Tips for Remote Work"</li>
          <li>💬 Commented on: "Climate Change Challenges"</li>
        </ul>
      </div>
      <footer className="w-full mt-10 py-4 bg-gray-800 text-center text-gray-400">
        &copy; 2025 Wolf Company - All rights reserved
      </footer>
    </div>
  );
}
export const metadata = {
  title: `Profile Page`,
  description: `Here is Profile Page`,
};
export default Profile;
