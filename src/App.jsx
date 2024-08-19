import React, { lazy, Suspense, useEffect, useRef } from "react";
import "./App.css";
import LandingPage from "./Pages/LandingPage/LandingPage";
import PageTwo from "./Pages/Page2/PageTwo";
import CanvasOne from "./Pages/CanvasOne.jsx/Canvas";
import CanvasTwo from "./Pages/CanvasTwo/Canvas";
import LocomotiveScroll from "locomotive-scroll";

const LazyComponentOne = lazy(() => import("./Pages/CanvasOne.jsx/Canvas"));
const LazyComponentTwo = lazy(() => import("./Pages/CanvasTwo/Canvas"));

const App = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <section id="main">
      <LandingPage />
      <PageTwo
        heading={`CERTIFY YOUR BUILDING AS A DIGITAL TWIN TOKEN (DTT®)`}
        text={`The Digital Twin Token is a unique digital asset backed by property
        data. Magma combines your building’s components and systems essential
        information into a DTT®.`}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponentTwo canvas={2} />
      </Suspense>
      <PageTwo
        heading={`CONNECT THE BUILDING'S TWIN TO YOUR STAKEHOLDERS`}
        text={`Users connect directly to the DTT® without any intermediaries. As Stakeholder, they have the power to upload and verify information that enriches the Digital Twin Token. A Stakeholder's ability to access validated-data to perform tasks depends on their specific role.`}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponentOne canvas={1} />
      </Suspense>
    </section>
  );
};

export default App;
