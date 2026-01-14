"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function AOSProvider() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
      // disable: true,
    });
  }, []);

  return null;
}
