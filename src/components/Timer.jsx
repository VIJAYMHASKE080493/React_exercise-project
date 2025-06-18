import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId); // cleanup when component unmounts
    };
  }, []);

  return (
    <div>
      <h2>Timer</h2>
      <p>Time: {seconds} seconds</p>
    </div>
  );
};

export default Timer;
