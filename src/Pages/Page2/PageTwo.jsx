import React, { useEffect, useRef } from "react";
import "./PageTwo.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PageTwo = ({ text, heading }) => {
  const textRef = useRef(null);
  useEffect(() => {
    const textContent = textRef.current.textContent;
    const spanContent = textContent
      .split("")
      .map((char, index) => `<span key=${index}>${char}</span>`)
      .join("");

    textRef.current.innerHTML = spanContent;

    const spans = textRef.current.children;
    gsap.to(spans, {
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 40%",
        end: "top 30%",
        scrub: 0.5,
      },
      color: "#fff",
      stagger: 0.2,
      duration: 1,
      ease: "power1.out",
    });
    return () => {};
  }, []);

  return (
    <div id="page2">
      <h2>{heading}</h2>
      <h1 ref={textRef}>{text}</h1>
    </div>
  );
};

export default PageTwo;
