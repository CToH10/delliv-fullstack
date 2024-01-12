import React from "react";

interface ContentDivProps {
  children: React.ReactNode;
  className?: string;
}

export const ContentDiv = ({ children, className }: ContentDivProps) => {
  return (
    <div
      className={`w-4/5 max-w-[600px] m-auto flex flex-col items-center justify-center mt-[35px] scrollbar ${className}`}
    >
      {children}  
    </div>
  );
};
