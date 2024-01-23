import Boton from "./Botones";
import StopIco from "./../assets/Stop.svg";
import PlayIco from "./../assets/Play.svg";
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
      <Boton imagen1={`${PlayIco}`} imagen2={`${StopIco}`}></Boton>
      <Boton imagen1={`${ResetIco}`} imagen2={`${ResetIco}`}></Boton>
    </div>
  );
};
