import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export default function Maxwidthwrapper({
  children,
  newClass,
}: {
  children: ReactNode;
  newClass?: string;
}) {
  return (
    <div className={cn("max-w-screen-xl  px-1 m-auto  ", newClass)}>
      {children}
    </div>
  );
}
