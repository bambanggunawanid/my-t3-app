import React, { useState } from "react";
import styles from "./RippleEffect.module.css"; // Adjust the path to your CSS file

export interface RippleEffectProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
}

const RippleEffect: React.FC<RippleEffectProps> = ({ onClick, children }) => {
  const [ripples, setRipples] = useState<
    { left: number; top: number; key: number }[]
  >([]);

  const handleEffectClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    if (onClick) {
      onClick();
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    setRipples((prevRipples) => [
      ...prevRipples,
      { left: x, top: y, key: Date.now() },
    ]);

    setTimeout(() => {
      setRipples((prevRipples) => prevRipples.slice(1));
    }, 600);
  };

  return (
    <div className={styles["ripple-container"]} onClick={handleEffectClick}>
      {children}
      {ripples.map((ripple) => (
        <span
          className={styles.ripple}
          style={{
            left: ripple.left + "px",
            top: ripple.top + "px",
          }}
          key={ripple.key}
        />
      ))}
    </div>
  );
};

export default RippleEffect;
