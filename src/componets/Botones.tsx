import { useState } from "react";

interface CambiarImagenProps {
  imagen1: string;
  imagen2: string;
}

const Boton = ({ imagen1, imagen2 }: CambiarImagenProps) => {
  const [mostrarPrimeraImagen, setMostrarPrimeraImagen] = useState(true);

  const cambiarImagen = () => {
    return setMostrarPrimeraImagen(!mostrarPrimeraImagen);
  };

  return (
    <button
      type="button"
      onClick={cambiarImagen}
      className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      {mostrarPrimeraImagen ? (
        <img src={imagen1} alt="Primera Imagen" />
      ) : (
        <img src={imagen2} alt="Segunda Imagen" />
      )}
    </button>
  );
};

export default Boton;
