import { Waves } from "../assets/waves";

export const Background = ({ children }: any) => {
  return (
    <div className="w-screen h-screen">
      <Waves className="rotate-180 -mb-6" />

      <div className="min-h-full mb-24 py-24 bg-slate-50 flex flex-col items-center justify-start">
        {children}
      </div>

      <Waves className="-mt-6" />
    </div>
  );
};
