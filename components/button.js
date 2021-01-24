export default function Button({ onClick, text }) {
  return (
    <button
      className="bg-gray-900 dark:hover:bg-green-400 transition-all ease-in-out duration-200 text-white py-3 px-3 rounded-md dark:bg-green-200 dark:text-gray-900 shadow-lg"
      onClick={onClick}
    >
      {text} cheese
    </button>
  );
}
