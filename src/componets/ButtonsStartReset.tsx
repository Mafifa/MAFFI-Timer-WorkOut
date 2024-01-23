import Boton from "./Botones";
import ResetIco from "./../assets/Reset.svg";

interface btnStartAndReset {
  resultado: boolean;
  onClick: (resultado: boolean) => void;
}

export const ButtonsStartReset = ({ resultado, onClick }: btnStartAndReset) => {
  const handleClick = () => {
    resultado ? (resultado = false) : (resultado = true);
    onClick(resultado);
  };
  return (
    <div className="flex" onClick={handleClick}>
      <Boton imagen1={`${ResetIco}`} imagen2={`${ResetIco}`}></Boton>
    </div>
  );
};
