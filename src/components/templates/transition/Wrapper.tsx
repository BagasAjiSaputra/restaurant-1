"use client";

import { ReactNode, useEffect, useState } from "react";

type ClientWrapperProps = { children: ReactNode };

export default function ClientWrapper({ children }: ClientWrapperProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 600);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;
  return <>{children}</>;
}
