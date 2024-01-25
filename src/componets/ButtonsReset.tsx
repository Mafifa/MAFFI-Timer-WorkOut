import Boton from "./Botones";
import ResetIco from "./../assets/Reset.svg";

interface btnStartAndReset {
  onClick: () => void;
}

export const ButtonRestart = ({ onClick }: btnStartAndReset) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <div className="flex" onClick={handleClick}>
      <Boton imagen1={`${ResetIco}`} imagen2={`${ResetIco}`}></Boton>
    </div>
  );
};
