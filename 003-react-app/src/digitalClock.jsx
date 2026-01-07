import { useEffect, useState } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="text-6xl text-white font-mono">
        {time.toLocaleTimeString()}
      </div>
    </div>
  );
}

export default DigitalClock;
