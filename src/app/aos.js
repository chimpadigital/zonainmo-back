"use client"
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../public/scss/main.scss";
export default function AosInit() {

  if (typeof window !== "undefined") {
    import("bootstrap");
  }

  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);
}
