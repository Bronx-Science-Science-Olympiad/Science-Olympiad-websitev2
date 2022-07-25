import React, { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import TextTransition from "react-text-transition";

const Hero = () => {
  const [index, setIndex] = useState(0);

  const TEXTS = [
    "Exploring the world of science",
    "SCIOLY TO THE MOON!",
    "Established in 2010",
    "5x States qualifiers",
    "It's about time, It's about power!",
    "We stay hungry, we devour!",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div>
      <h1 className="mb-2 text-4xl">Bronx High School of Science</h1>
      <h1 className="mb-4 font-sans font-bold text-yellow-400 text-7xl">
        SCIENCE OLYMPIAD
      </h1>
      <TextTransition className="mb-8 text-3xl text-white font-slab">
        {TEXTS[index % TEXTS.length]}
      </TextTransition>
      <div className="flex items-center justify-start">
        <button className="px-6 py-2 mx-0 duration-150 bg-[#F8CA55] hover:bg-[#e0ac28] rounded-xl">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdidklVH3t7vzymGo1uSvSvDrlLnfN4UMOyyeRGIg5WgVvtKw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="m-0"
          >
            <p className="flex items-center justify-center m-0 text-xl font-light text-black duration-200 ">
              Join us!
            </p>
          </a>
        </button>
        <BsArrowRight className="text-[#F8CA55] ml-4 text-2xl" />
      </div>
    </div>
  );
};

export default Hero;
