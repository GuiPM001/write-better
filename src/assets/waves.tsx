import { HTMLAttributes, ReactNode } from "react";
import { MouseParallax } from "react-just-parallax";

const Layer1 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill="#172554"
      d="m0 32 34.3 32C68.6 96 137 160 206 170.7c68.3 10.3 137-31.7 205-32 69 .3 138 42.3 206 37.3 68.7-5 137-59 206-69.3 68.4-10.7 137 21.3 206 16 68.1-5.7 137-47.7 205-74.7 68.9-27 137-37 172-42.7l34-5.3v320H0Z"
    />
  </svg>
);

const Layer2 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill="#1E40AF"
      d="m0 256 21.8-5.3C43.6 245 87 235 131 229.3c43.5-5.3 87-5.3 131-26.6C305.5 181 349 139 393 112c43.4-27 87-37 131-32 43.3 5 87 27 131 26.7 43.2.3 87-21.7 130-21.4 44.1-.3 88 21.7 131 48 44 26.7 88 58.7 131 53.4 43.9-5.7 88-47.7 131-48 43.8.3 87 42.3 131 42.6 43.7-.3 87-42.3 109-64l22-21.3v224H0Z"
    />
  </svg>
);

const Layer3 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill="#2563EB"
      d="M0 192h16c16 0 48 0 80-10.7 32-10.3 64-32.3 96-21.3 32 11 64 53 96 74.7 32 21.3 64 21.3 96 5.3s64-48 96-69.3c32-21.7 64-31.7 96-42.7 32-11 64-21 96 5.3 32 26.7 64 90.7 96 112 32 21.7 64-.3 96-10.6 32-10.7 64-10.7 96-16 32-5.7 64-15.7 96-42.7 32-27 64-69 96-69.3 32 .3 64 42.3 96 64 32 21.3 64 21.3 96 10.6 32-10.3 64-32.3 80-42.6l16-10.7v192H0Z"
    />
  </svg>
);

const Layer4 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill="#60A5FA"
      d="m0 96 12.6 5.3C25.3 107 51 117 76 149.3c25.1 31.7 50 85.7 76 96 24.8 10.7 50-21.3 75-32 25.6-10.3 51-.3 76-5.3 25.4-5 51-27 76-26.7 25.2-.3 50 21.7 76 42.7 25 21 50 43 76 21.3 24.8-21.3 50-85.3 75-112 25.6-26.3 51-16.3 76-10.6 25.4 5.3 51 5.3 76 21.3 25.2 16 50 48 76 69.3 24.9 21.7 50 31.7 75 26.7 25.7-5 51-27 76-42.7 25.5-16.3 51-26.3 76-16 25.3 10.7 51 42.7 76 48 25.1 5.7 50-16.3 76-32 24.9-16.3 50-26.3 75-21.3 25.7 5 51 27 76 21.3 25.5-5.3 51-37.3 63-53.3l13-16v192H0Z"
    />
  </svg>
);

const Layer5 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill="#BFDBFE"
      d="m0 320 60-32c60-32 180-96 300-101.3 120-5.7 240 48.3 360 58.6 120 10.7 240-21.3 360-42.6 120-21.7 240-31.7 300-37.4l60-5.3v160H0Z"
    />
  </svg>
);

const LayerStyled = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`w-screen h-screen flex items-end justify-center ${props.className}`}>
      {props.children}
    </div>
  );
};

export const Waves = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`fixed left-0 bottom-0 scale-125 h-screen w-screen ${props.className}`}>
      <MouseParallax enableOnTouchDevice strength={0.025} isAbsolutelyPositioned>
        <LayerStyled className="animate-movimentRight">
          <Layer1 />
        </LayerStyled>
      </MouseParallax>

      <MouseParallax enableOnTouchDevice strength={0.050} isAbsolutelyPositioned>
        <LayerStyled className="animate-movimentLeft">
          <Layer2 />
        </LayerStyled>
      </MouseParallax>

      <MouseParallax enableOnTouchDevice strength={0.075} isAbsolutelyPositioned>
        <LayerStyled className="animate-movimentRight">
          <Layer3 />
        </LayerStyled>
      </MouseParallax>

      <MouseParallax enableOnTouchDevice strength={0.100} isAbsolutelyPositioned>
        <LayerStyled className="animate-movimentLeft">
          <Layer4 />
        </LayerStyled>
      </MouseParallax>

      <MouseParallax enableOnTouchDevice strength={0.125} isAbsolutelyPositioned>
        <LayerStyled className="animate-movimentRight">
          <Layer5 />
        </LayerStyled>
      </MouseParallax>
    </div>
  );
};
