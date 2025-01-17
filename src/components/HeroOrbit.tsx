import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const HeroOrbit = ({
  children,
  size,
  rotation,
  spinDuration,
  shouldOrbit = false,
  shouldSpin = false,
  selfSpinDuration,
}: PropsWithChildren<{
  size: number;
  rotation: number;
  spinDuration?: string;
  shouldOrbit?: boolean;
  shouldSpin?: boolean;
  selfSpinDuration?: string;
}>) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <div
        className={twMerge(shouldOrbit === true && "animate-spin ")}
        style={{
          animationDuration: spinDuration,
        }}
      >
        <div
          className=" flex items-start justify-start "
          style={{
            width: `${size}px`,
            height: `${size}px`,
            transform: `rotate(${rotation}deg)`,
          }}
        >
          <div className={twMerge(shouldSpin === true && "animate-spin ")}
            style={{
              animationDuration: selfSpinDuration,
            }}
          >
            <div
              className=" inline-flex "
              style={{
                transform: `rotate(${rotation * -1}deg)`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOrbit;
