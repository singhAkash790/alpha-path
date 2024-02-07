// "use client"
// import React, { useRef, useState, useCallback, useEffect } from "react";
// import ResizeObserver from "resize-observer-polyfill";
// import {
//   useViewportScroll,
//   useTransform,
//   useSpring,
//   motion,
// } from "framer-motion";

// const SmoothScroll = ({ children }) => {
//   // Scroll container
//   const scrollRef = useRef(null);

//   // Page scrollable height based on content length
//   const [pageHeight, setPageHeight] = useState(0);

//   // Update scrollable height when the browser is resizing
//   const resizePageHeight = useCallback((entries) => {
//     for (let entry of entries) {
//       setPageHeight(entry.contentRect.height);
//     }
//   }, []);

//   // Observe when the browser is resizing
//   useEffect(() => {
//     const resizeObserver = new ResizeObserver((entries) =>
//       resizePageHeight(entries)
//     );
//     scrollRef && resizeObserver.observe(scrollRef.current);
//     return () => resizeObserver.disconnect();
//   }, [scrollRef, resizePageHeight]);

//   const { scrollY } = useViewportScroll(); // Measures how many pixels the user has scrolled vertically

//   // As scrollY changes between 0px and the scrollable height, create a negative scroll value
//   // based on the current scroll position to translateY the document in a natural way
//   const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);

//   // Conditionally set the physics values based on the screen width
//   const isMobile = window.matchMedia("(max-width: 480px)").matches;
//   const physics = isMobile
//     ? { damping: 10, mass: 0.2, stiffness: 400 }
//     : { damping: 40, mass: 0.45, stiffness: 200 };

//   const spring = useSpring(transform, physics); // Apply easing to the negative scroll value

//   return (
//     <>
//       <motion.div
//         ref={scrollRef}
//         style={{ y: spring }} // TranslateY of scroll container using negative scroll value
//         className="scroll-container"
//       >
//         {children}
//       </motion.div>
//       {/* Blank div that has a dynamic height based on the content's inherent height */}
//       {/* This is necessary to allow the scroll container to scroll using the browser's native scroll bar */}
//       <div style={{ height: pageHeight }} />
//     </>
//   );
// };

// export default SmoothScroll;
