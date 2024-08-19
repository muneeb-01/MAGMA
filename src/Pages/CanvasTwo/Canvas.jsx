import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./canvas.css";
gsap.registerPlugin(ScrollTrigger);

const Canvas = ({ canvas }) => {
  const imageIndices = [];
  let images = [];
  let imagesLoaded = 0;

  const frames = {
    count: 0,
    current: 0,
    canvas: canvas,
  };

  const loadImage = (index) => {
    if (index >= 0 && index <= frames.count) {
      const canvas = document.querySelector("#canvas2");
      const context = canvas.getContext("2d");

      const img = images[index];
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;

      const scaleX = canvas.width / img.width;
      const scaleY = canvas.height / img.height;
      const scale = Math.max(scaleX, scaleY);

      const newWidth = img.width * scale;
      const newHeight = img.height * scale;

      const offsetX = (canvas.width - newWidth) / 2;
      const offsetY = (canvas.height - newHeight) / 2;
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";
      context.drawImage(img, offsetX, offsetY, newWidth, newHeight);
      frames.current = index;
    }
  };

  const animate = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#parent2",
        start: "top top",
        end: "bottom bottom",
        scrub: 2,
      },
    });

    tl.to(frames, {
      current: frames.count,
      onUpdate: function () {
        loadImage(Math.floor(frames.current));
      },
    });
  };

  useEffect(() => {
    const canvas = document.querySelector("#canvas");
    if (frames.canvas === 2) {
      images = [];
      for (let i = 7; i <= 202; i += 3) {
        imageIndices.push(
          `/Magma-main/frames${i.toString().padStart(5, "0")}.png`
        );
      }

      frames.count = imageIndices.length - 1;
      imageIndices.forEach((num) => {
        const img = new Image();
        img.src = num;

        img.onload = () => {
          imagesLoaded++;
          if (imagesLoaded === frames.count) {
            loadImage(frames.current);
            animate();
          }
        };

        images.push(img);
      });
    }

    return () => {};
  }, []);

  return (
    <div id="parent2">
      <div id="page3">
        <canvas id="canvas2"></canvas>
      </div>
    </div>
  );
};

export default Canvas;
