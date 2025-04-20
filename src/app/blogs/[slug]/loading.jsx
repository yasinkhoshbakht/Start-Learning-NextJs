export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-cyan-400 animate-spin"></div>
        <div className="absolute inset-3 rounded-full border-2 border-cyan-300 animate-pulse"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 bg-cyan-400 rounded-full animate-ping"></div>
        </div>
      </div>
    </div>
  );
}
