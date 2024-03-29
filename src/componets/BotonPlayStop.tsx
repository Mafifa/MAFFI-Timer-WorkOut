import { useState } from "react";
import StopIco from "./../assets/Stop.svg";
import PlayIco from "./../assets/Play.svg";

interface CambiarImagenProps {
  onClick: () => void;
}

const BotonPlayStop = ({ onClick }: CambiarImagenProps) => {
  const [mostrarPrimeraImagen, setMostrarPrimeraImagen] = useState(true);
  const cambiarImagen = () => {
    onClick();
    mostrarPrimeraImagen ? console.log("Play") : console.log("Pause");
    return setMostrarPrimeraImagen(!mostrarPrimeraImagen);
  };

  return (
    <button
      type="button"
      onClick={cambiarImagen}
      className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      {mostrarPrimeraImagen ? (
        <img src={PlayIco} alt="Primera Imagen" />
      ) : (
        <img src={StopIco} alt="Segunda Imagen" />
      )}
    </button>
  );
};

export default BotonPlayStop;
