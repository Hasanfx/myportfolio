// useIntersectionObserver.ts
import { useEffect } from "react";

export const useIntersectionObserver = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    // Delay observer initialization to ensure DOM is ready
    const timeout = setTimeout(() => {
      const hiddenElements = document.querySelectorAll(".hidden");
      hiddenElements.forEach((element) => observer.observe(element));
    }, 100); // Adjust delay as needed

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);
};
