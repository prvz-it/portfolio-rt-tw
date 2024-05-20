import React, { useState, useEffect } from "react";

const ChangingProgressProvider = ({ values, interval = 1000, children }) => {
  const [valuesIndex, setValuesIndex] = useState(0);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 1460) {
        setShow(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (show) {
      // Set up
      const intervalId = setInterval(() => {
        setValuesIndex((prevIndex) => (prevIndex + 1) % values.length);
      }, interval);

      // Clear the interval after the first execution
      setTimeout(() => clearInterval(intervalId), interval);

      // Return a cleanup function to clear the interval
      return () => clearInterval(intervalId);
    }
  }, [show]); // Empty dependency array ensures the effect runs only once

  return children(values[valuesIndex]);
};

export default ChangingProgressProvider;
