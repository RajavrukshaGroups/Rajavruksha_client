"use client";
import React from "react";
import { Button } from "./MovingBorder";

export function MovingBorderDemo({ children }) {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="bg-[#558b2f] dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        <span className="text-[#bf7d02e6] font-medium read-more">{children}</span>
      </Button>
    </div>
  );
}
