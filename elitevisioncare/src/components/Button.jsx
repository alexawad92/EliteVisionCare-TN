export default function Button({ children }) {
  return (
    <button className="bg-gray-700 text-white px-6 py-3 rounded-xl hover:scale-105 transition shadow">
      {children}
    </button>
  );
}
