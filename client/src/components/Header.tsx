import { useState, useEffect } from "react";
import { Timer, Clock } from "lucide-react";

export default function Header() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 6,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 6, minutes: 0, seconds: 0 }; // Reset
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (val: number) => val.toString().padStart(2, '0');

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#f473b6] text-white h-[40px] md:h-[50px] flex items-center justify-center shadow-md">
      <div className="container flex items-center justify-center gap-2 text-xs md:text-base font-bold">
        <Clock className="w-3 h-3 md:w-5 md:h-5" />
        <span> Oferta expira em:</span>
        <div className="bg-white text-[#f473b6] px-2 py-0.5 rounded font-extrabold tracking-widest text-base md:text-lg shadow-sm">
          {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
        </div>
      </div>
    </header>
  );
}
