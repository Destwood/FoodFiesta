import React, { useState, useEffect } from "react";
import style from "./Hero.module.scss";
import bg from "../../assets/heroBg.png";

function Hero() {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScrolle = () => {
      const scrollTop = window.scrollY;
      const opacity = 1 - scrollTop / 300;
      setScrollOpacity(opacity);
    };

    window.addEventListener("scroll", handleScrolle);

    return () => {
      window.removeEventListener("scroll", handleScrolle);
    };
  }, []);
  return (
    <div
      className={style.heroWrapper}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className={style.blur}>
        <h1 className={style.title} style={{ opacity: scrollOpacity }}>
          FoodFiesta
        </h1>
      </div>
    </div>
  );
}

export default Hero;
