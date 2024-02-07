// useIntersectionObserver.js
import { useState, useEffect, useRef } from "react";

const useIntersectionObserver = (options) => {
  const [isElementVisible, setElementVisible] = useState(false);
  const targetElementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setElementVisible(entry.isIntersecting);
    }, options);

    const targetElement = targetElementRef.current;

    if (targetElement && targetElement instanceof Element) {
      observer.observe(targetElement);
    }

    return () => {
      if (targetElement && targetElement instanceof Element) {
        observer.unobserve(targetElement);
      }
      observer.disconnect();
    };
  }, [options]);

  return { targetElementRef, isElementVisible };
};

export default useIntersectionObserver;
