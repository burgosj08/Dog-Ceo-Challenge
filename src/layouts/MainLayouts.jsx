import React from "react";

export const MainLayouts = ({ children }) => {
  return (
    <>
      <h2 className="mt-5 text-center mb-16 text-4xl font-extrabold tracking-tight leading-none text-blue-900 md:text-5xl lg:text-6xl ">
        Dog-<span className="text-blue-600 dark:text-blue-500">Ceo</span>
        -Challenge
      </h2>
      {children}
    </>
  );
};
