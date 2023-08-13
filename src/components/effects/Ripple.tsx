import { useLayoutEffect, useState } from "react";

interface RippleEffectProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  duration?: number;
}
const RippleContainer: React.FC<RippleEffectProps> = ({ color, children }) => (
  <div className="relative h-full w-full">
    {children}
    <style jsx>{`
      .ripple {
        transform: scale(0);
        border-radius: 50%;
        position: absolute;
        opacity: 0.75;
        background-color: ${color};
        animation-name: ripple;
        animation-duration: var(--duration) ms;
      }

      @keyframes ripple {
        to {
          opacity: 0;
          transform: scale(2);
        }
      }
    `}</style>
  </div>
);

const useDebouncedRippleCleanUp = (
  rippleCount: number,
  duration: number,
  cleanUpFunction: () => void
) => {
  useLayoutEffect(() => {
    let bounce: any = null;
    if (rippleCount > 0) {
      clearTimeout(bounce);

      bounce = setTimeout(() => {
        cleanUpFunction();
        clearTimeout(bounce);
      }, duration * 4);
    }

    return () => clearTimeout(bounce);
  }, [rippleCount, duration, cleanUpFunction]);
};

const Ripple = ({ duration = 850, color = "#fff" }) => {
  const [rippleArray, setRippleArray] = useState<
    { x: number; y: number; size: number }[]
  >([]);

  useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
    setRippleArray([]);
  });

  const addRipple = (event: any) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    const size =
      rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height;
    const x = event.pageX - rippleContainer.x - size / 2;
    const y = event.pageY - rippleContainer.y - size / 2;
    const newRipple = {
      x,
      y,
      size,
    };

    setRippleArray([...rippleArray, newRipple]);
  };

  return (
    <RippleContainer color={color}>
      <style jsx>{`
        .ripple-span {
          top: var(--y);
          left: var(--x);
          width: var(--size);
          height: var(--size);
        }
      `}</style>
      <div
        className="absolute bottom-0 left-0 right-0 top-0"
        style={{ "--duration": duration } as React.CSSProperties}
        onMouseDown={addRipple}
      >
        {rippleArray.length > 0 &&
          rippleArray.map((ripple, index) => (
            <span
              key={"span" + index}
              className="ripple-span absolute"
              style={
                {
                  "--x": ripple.x + "px",
                  "--y": ripple.y + "px",
                  "--size": ripple.size + "px",
                } as React.CSSProperties
              }
            ></span>
          ))}
      </div>
    </RippleContainer>
  );
};

export default Ripple;
