import { useState } from "react";

interface Clases {
  props?: string;
}

export const SecondsCard = ({ props }: Clases) => {
  const [count, setCount] = useState(0);

  return (
    <div className={`flex flex-col items-center ${props}`}>
      <button
        type="button"
        id="decrement-button"
        onClick={() => {
          setCount((count) => (count == 0 ? 0 : count - 1));
          console.log(`VALOR DE SEGUNDOS DECREMENTADO ${count}`);
        }}
        data-input-counter-decrement="quantity-input"
        className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none mb-2"
      >
        <svg
          className="w-3 h-3 text-gray-900 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 2"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h16"
          />
        </svg>
      </button>
      <input
        type="text"
        id="quantity-input"
        data-input-counter
        data-input-counter-min="1"
        data-input-counter-max="50"
        min="1"
        max="50"
        aria-describedby="helper-text-explanation"
        className="bg-gray-50 border-gray-300 h-36 w-36 text-6xl text-center rounded-2xl text-gray-900 focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
        placeholder="00"
        onChange={(e) => setCount(parseInt(e.target.value, 10) || 0)} // Asegura que el valor sea un número válido
        required
      />
      <button
        type="button"
        id="increment-button"
        onClick={() => {
          setCount((count) => (count == 59 ? 59 : count + 1));
          console.log(`VALOR DE SEGUNDOS INCREMENTADO ${count}`);
        }}
        data-input-counter-increment="quantity-input"
        className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none mt-2"
      >
        <svg
          className="w-3 h-3 text-gray-900 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 1v16M1 9h16"
          />
        </svg>
      </button>
    </div>
  );
};
