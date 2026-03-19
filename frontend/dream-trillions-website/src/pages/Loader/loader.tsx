import React, { useEffect, useState } from "react";
import "./loader.css";
import Logo from "../../assets/loader.png";

type LoaderProps = {
  onFinish?: () => void;
};

const Loader: React.FC<LoaderProps> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += 1;
      setProgress(value);

      if (value >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          onFinish?.();
        }, 200);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="loader-wrapper">
      <div className="logo-progress-box">
        <img src={Logo} alt="Logo" className="logo-dark-base" />

        <div
          className="logo-progress-reveal"
          style={{ clipPath: `inset(0 ${100 - progress}% 0 0)` }}
        >
          <img src={Logo} alt="Logo" className="logo-original-color" />
        </div>
      </div>
    </div>
  );
};

export default Loader;