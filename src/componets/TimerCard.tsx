import React, { useEffect, useState } from "react";
import { CheckAutoRep } from "./CheckAutoRep";
import BotonPlayStop from "./BotonPlayStop";
import { ButtonRestart } from "./ButtonsReset";

export const Temporizador: React.FC = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [checkRunning, setCheckRunning] = useState(false);

  const twoDigitFormat = (number: number) => {
    return number < 10 ? `0${number}` : number.toString();
  };

  useEffect(() => {
    let temporizador: NodeJS.Timeout;

    if (checkRunning) {
      temporizador = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else if (hours > 0) {
          setHours(hours - 1);
          setMinutes(59);
          setSeconds(59);
        } else {
          setCheckRunning(false);
          clearInterval(temporizador); // Detener el temporizador
        }
      }, 1000);
    }

    return () => clearInterval(temporizador); // Limpiar el temporizador en el desmontaje
  }, [checkRunning, seconds, minutes, hours]);

  const restartTimer = () => {
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    setCheckRunning(false);
  };

  const isRunning = () => {
    setCheckRunning(!checkRunning);
  };

  return (
    <form className="">
      <CheckAutoRep />
      <div className="flex justify-around">
        <div
          id="btn1"
          className="flex items-center justify-center dark:text-gray-200"
        >
          <div className={`flex flex-col items-center`}>
            <button
              type="button"
              onClick={() => {
                setHours((hours) => (hours == 0 ? 0 : hours - 1));
                console.log(`VALOR DE HORAS DECREMENTADO ${hours}`);
              }}
              data-input-counter-decrement="quantity-input"
              className=" bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none mb-2"
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

            <div>
              <input
                type="text"
                id="quantity-input"
                data-input-counter
                data-input-counter-min="1"
                data-input-counter-max="59"
                min="1"
                max="59"
                aria-describedby="helper-text-explanation"
                className={`block bg-gray-50 border-gray-300 h-36 w-36 text-6xl text-center rounded-2xl text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2`}
                placeholder="00"
                value={hours}
                onChange={(e) => setHours(parseInt(e.target.value, 10) || 0)} // Asegura que el valor sea un número válido
                required
              />
            </div>

            <button
              type="button"
              onClick={() => {
                setHours((hours) => (hours == 59 ? 59 : hours + 1));
                console.log(`VALOR DE HORAS INCREMENTADO ${hours}`);
              }}
              data-input-counter-increment="quantity-input"
              className=" bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none mt-2"
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
        </div>

        <div
          id="btn2"
          className="flex items-center justify-center dark:text-gray-200"
        >
          <div className={`flex flex-col items-center`}>
            <button
              type="button"
              onClick={() => {
                setMinutes((minutes) => (minutes == 0 ? 0 : minutes - 1));
                console.log(`VALOR DE MINUTOS DECREMENTADO ${minutes}`);
              }}
              data-input-counter-decrement="quantity-input"
              className=" bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none mb-2"
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
              data-input-counter
              data-input-counter-min="1"
              data-input-counter-max="50"
              min="1"
              max="50"
              aria-describedby="helper-text-explanation"
              className={`bg-gray-50 border-gray-300 h-36 w-36 text-6xl text-center rounded-2xl text-gray-900 focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2`}
              placeholder="00"
              value={minutes}
              onChange={(e) => setMinutes(parseInt(e.target.value, 10) || 0)} // Asegura que el valor sea un número válido
              required
            />

            <button
              type="button"
              onClick={() => {
                setMinutes((minutes) => (minutes == 59 ? 59 : minutes + 1));
                console.log(`VALOR DE MINUTOS INCREMENTADO ${minutes}`);
              }}
              data-input-counter-increment="quantity-input"
              className=" bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none mt-2"
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
        </div>

        <div
          id="btn2"
          className="flex items-center justify-center dark:text-gray-200"
        >
          <div className={`flex flex-col items-center`}>
            <button
              type="button"
              onClick={() => {
                setSeconds((seconds) => (seconds == 0 ? 0 : seconds - 1));
                console.log(`VALOR DE SEGUNDOS DECREMENTADO ${seconds}`);
              }}
              data-input-counter-decrement="quantity-input"
              className=" bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none mb-2"
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
              data-input-counter
              data-input-counter-min="1"
              data-input-counter-max="50"
              min="1"
              max="50"
              aria-describedby="helper-text-explanation"
              className={`bg-gray-50 border-gray-300 h-36 w-36 text-6xl text-center rounded-2xl text-gray-900 focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2`}
              placeholder="00"
              value={seconds}
              onChange={(e) => setSeconds(parseInt(e.target.value, 10) || 0)} // Asegura que el valor sea un número válido
              required
            />

            <button
              type="button"
              onClick={() => {
                setSeconds((seconds) => (seconds == 59 ? 59 : seconds + 1));
                console.log(`VALOR DE SEGUNDOS INCREMENTADO ${seconds}`);
              }}
              data-input-counter-increment="quantity-input"
              className=" bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none mt-2"
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
        </div>
      </div>
      <div></div>
      <div className="flex">
        <BotonPlayStop onClick={isRunning} />
        <ButtonRestart onClick={restartTimer} />
      </div>
    </form>
  );
};
