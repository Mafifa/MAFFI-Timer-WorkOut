import { CheckAutoRep } from "./CheckAutoRep";
import { HourCard } from "./timer/HourCard";
import { MinutesCard } from "./timer/MinutesCard";
import { SecondsCard } from "./timer/SecondsCard";

export const TimerCard = () => {
  return (
    <form className="">
      <CheckAutoRep></CheckAutoRep>
      <div className="flex items-center justify-center dark:text-gray-200">
        <HourCard></HourCard>
        <div className="font-bold text-8xl mx-3">:</div>
        <MinutesCard></MinutesCard>
        <div className="font-bold text-8xl mx-3">:</div>
        <SecondsCard></SecondsCard>
      </div>
    </form>
  );
};
