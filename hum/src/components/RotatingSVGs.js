import React, { useState, useEffect, useRef } from "react";
import "./RotatingSVGs.css";

const RotatingSVGs = ({ svgs }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const svgRefs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % svgs.length);
    }, 3000); // Rotate every 3 seconds
    return () => clearInterval(interval);
  }, [svgs.length]);

  useEffect(() => {
    // Scroll to the active SVG
    if (svgRefs.current[activeIndex]) {
      svgRefs.current[activeIndex].scrollIntoView({
        behavior: "smooth",
        block: "center", // Adjust based on your layout
        inline: "center", // Adjust based on your layout
      });
    }
  }, [activeIndex]);

  return (
    <div className="rotating-svgs-container">
      {svgs.map((svg, index) => (
        <div
          key={index}
          ref={(el) => (svgRefs.current[index] = el)} // Assign each card to the ref
          className={`svg-wrapper ${index === activeIndex ? "active" : ""}`}
          dangerouslySetInnerHTML={{ __html: svg }}
        />
      ))}
    </div>
  );
};

export default RotatingSVGs;
