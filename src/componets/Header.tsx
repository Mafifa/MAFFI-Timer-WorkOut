import PlayListOn from "../assets/PlayListOff.svg";
import PlayListOff from "../assets/PlayListOn.svg";
import MutedOff from "../assets/MutedOff.svg";
import MutedOn from "../assets/MutedOn.svg";
import Boton from "./Botones";

export const Header = () => {
  return (
    <div className="flex max-w-screen-xl ml-auto mr-auto place-content-around justify-center items-center mt-2">
      <Boton imagen1={`${PlayListOff}`} imagen2={`${PlayListOn}`}></Boton>

      <nav className="ml-auto mr-auto min-w-[1024px] mt-4 rounded-xl border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto bordes "
            id="navbar-solid-bg"
          ></div>
        </div>
      </nav>
      <Boton imagen1={`${MutedOff}`} imagen2={`${MutedOn}`}></Boton>
    </div>
  );
};
