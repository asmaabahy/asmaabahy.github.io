import { useEffect, useState } from "react";

interface Star {
  id: number;
  size: number;
  x: number;
  y: number;
  opacity: number;
  animationDuration: number;
}

interface Meteor {
  id: number;
  size: number;
  x: number;
  y: number;
  delay: number;
  animationDuration: number;
}

function StarBackground() {
  const [stars, setStars] = useState<Star[]>();
  const [meteors, setMeteors] = useState<Meteor[]>();
  
  useEffect(() => {
    generateStars();
    generateMeteors();
    
    const handleResize = () => {
        generateStars()
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, []);

  const generateStars = () => {
    const numOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];
    for (let i = 0; i < numOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numOfMeteors = 5;

    const newMeteors = [];
    for (let i = 0; i < numOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: -10,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars?.map(({ id, size, x, y, opacity, animationDuration }) => (
        <div
          key={id}
          className="star animate-pulse-subtle"
          style={{
            width: size + "px",
            height: size + "px",
            top: y + "%",
            left: x + "%",
            opacity: opacity,
            animationDuration: animationDuration + "s",
          }}
        />
      ))}

      {meteors?.map(({ id, size, x, y, delay, animationDuration }) => (
        <div
          key={id}
          className="meteor animate-meteor"
          style={{
            width: size * 10 + "px",
            height: 0.5 + "px",
            top: y + "%",
            left: x + "%",
            animationDelay: delay + "s",
            animationDuration: animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
}

export default StarBackground;
