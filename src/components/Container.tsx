import React from "react";

export const Container = ({ children }: any) => {
  return (
    <div className="flex flex-col gap-4 items-center w-full">
      {children}
    </div>
  )
};
