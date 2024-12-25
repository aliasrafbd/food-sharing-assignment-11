import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const AwardsCounter = ({ awardsWon }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the component is visible
    triggerOnce: true, // Trigger the animation only once
  });

  useEffect(() => {
    if (inView) {
      let start = 0; // Start counting from 0
      const duration = 2000; // Animation duration in milliseconds
      const increment = Math.ceil(awardsWon / (duration / 50)); // Calculate increment value

      const timer = setInterval(() => {
        start += increment;
        if (start >= awardsWon) {
          clearInterval(timer); // Stop the animation when the target is reached
          setCount(awardsWon);
        } else {
          setCount(start);
        }
      }, 50); // Update every 50ms

      return () => clearInterval(timer); // Cleanup interval on unmount
    }
  }, [inView, awardsWon]);

  return (
    <div ref={ref} className="w-full grid gap-6">
      {/* Counter */}
      <div className="text-5xl flex font-bold items-center justify-center">
        {count}
      </div>
    </div>
  );
};

export default AwardsCounter;
