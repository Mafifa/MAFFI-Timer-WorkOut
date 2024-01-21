import Boton from "./Botones";
import StopIco from "./../assets/Stop.svg";
import PlayIco from "./../assets/Play.svg";
import ResetIco from "./../assets/Reset.svg";

export const ButtonsStartReset = () => {
  return (
    <div className="flex">
      <Boton imagen1={`${PlayIco}`} imagen2={`${StopIco}`}></Boton>
      <Boton imagen1={`${ResetIco}`} imagen2={`${ResetIco}`}></Boton>
    </div>
  );
};
