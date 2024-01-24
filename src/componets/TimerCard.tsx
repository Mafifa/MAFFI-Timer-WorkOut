import { CheckAutoRep } from "./CheckAutoRep";
import { ButtonRestart } from "./ButtonsStartReset";
import React, { useEffect, useState } from "react";
import { HourCard } from "./timer/HourCard";
import BotonPlayStop from "./BotonPlayStop";

export const Temporizador: React.FC = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  //REVISAR SI DARLE PLAY O NO
  const [checkRunnig, setCheckRunnig] = useState(false);
  //REVISAR SI REINICIAR

  //CON ESTA FUNCION CAMBIAMOS EL VALOR DE RUNNING
  const isRunning = (resultado: boolean) => {
    setCheckRunnig(resultado);
  };
  //PRUEBA PARA TEST
  console.log(`${checkRunnig} TEST SALIDA [DEBE SER DIFERENTE AL INGRESO]`);

  //REINICIAR TEMPORIZADOR
  const restartTimer = () => {
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    setCheckRunnig(false);
  };
  //PARA EL FORMATO DE DOS DIGITOS
  const twoDigitFormat = (number: number) => {
    return number > 10 ? number : `0${number}`;
  };

  return (
    <form className="">
      <CheckAutoRep />
      <div className="flex">
        <div
          id="btn1"
          className="flex items-center justify-center dark:text-gray-200"
        >
          <div className={`flex flex-col items-center`}>
            <button
              type="button"
              id="decrement-button"
              onClick={() => {
                setHours((hours) => (hours == 0 ? 0 : hours - 1));
                console.log(`VALOR DE MINUTOS DECREMENTADO ${hours}`);
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
                data-input-counter-max="50"
                min="1"
                max="50"
                aria-describedby="helper-text-explanation"
                className={`${
                  checkRunnig ? `block` : `hidden`
                }  bg-gray-50 border-gray-300 h-36 w-36 text-6xl text-center rounded-2xl text-gray-900 focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2`}
                placeholder="00"
                value={hours}
                onChange={(e) => setHours(parseInt(e.target.value, 10) || 0)} // Asegura que el valor sea un número válido
                required
              />
              <span
                className={`${
                  checkRunnig ? `hidden` : `block`
                } flex justify-center items-center bg-gray-50 border-gray-300 h-36 w-36 text-6xl text-center rounded-2xl text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2 `}
              >
                {hours}
              </span>
            </div>

            <button
              type="button"
              id="increment-button"
              onClick={() => {
                setHours((hours) => (hours == 59 ? 59 : hours + 1));
                console.log(`VALOR DE MINUTOS INCREMENTADO ${hours}`);
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
        <BotonPlayStop onClick={isRunning} resultado={checkRunnig} />
        <ButtonRestart onClick={isRunning} resultado={checkRunnig} />
      </div>
    </form>
  );
};
