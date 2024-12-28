
"use client";
import React, { useState, useRef, useEffect } from "react";
import TopNavigation from "../components/TopNavigation";
import Navigation from "../components/Navigation";
import PlastFoundation from "../components/PlastFoundation";
import Welcome from "../components/Welcome";
import Event from "../components/Event";
import TradeShow from "../components/TradeShow";
import ParticipationINdus from "../components/ParticipationINdus";
import HeroBanner from "../components/HeroBanner";
import Footer from "../components/Footer";
import Countdown from "../components/Countdown";
import Galary from "../components/Galary";
import VedioElement from "../components/VedioElement";
import Impact from "../components/Impact";
import Sustain from "../components/Sustain";
import NewsFeed from "../components/NewsFeed";
const Page = () => {
  const [loading, setLoading] = useState(true);
  const [visibleComponents, setVisibleComponents] = useState(new Set());

  const componentRefs = {
    heroBanner: useRef(null),
    plastFoundation: useRef(null),
    newsFeed: useRef(null),
    galary: useRef(null),
    vedioElement: useRef(null),
    welcome: useRef(null),
    event: useRef(null),
    tradeShow: useRef(null),
    timer: useRef(null),
    impact: useRef(null),
    sustain: useRef(null),
    participationINdus: useRef(null),
    industryInsight: useRef(null),
    countdown: useRef(null),
    footer: useRef(null),
    navigation: useRef(null)
  
  };

  const componentOrder = [
    "heroBanner",
    "plastFoundation",
    "newsFeed",
    "galary",
    "welcome",
    "event",
    "tradeShow",
    "timer",
    "impact",
    "sustain",
    "participationINdus",
    "countdown",
    "footer",
    "navigation"
     ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const componentName = entry.target.dataset.componentName;
            if (componentName && !visibleComponents.has(componentName)) {
              setVisibleComponents((prev) => new Set(prev).add(componentName));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(componentRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(componentRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [visibleComponents]);

  useEffect(() => {
    if (componentOrder.every((component) => visibleComponents.has(component))) {
      setLoading(false);
    }
  }, [visibleComponents]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        window.location.reload();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>

      <main 
      className={`font-satoshi bg-white text-[#3C3E3D]  overflow-x-hidden `}
      >
        
        <div
          ref={componentRefs.navigation}
          data-component-name="navigation"
          className={`sticky top-0 z-50 bg-white transition-opacity duration-${visibleComponents.has("navigation") ? "opacity-100" : "opacity-0"}`}
        >
          {visibleComponents.has("navigation") && (
            <>
              <TopNavigation />
              <Navigation />
            </>
          )}
        </div>
        <div>
          <div
            ref={componentRefs.heroBanner}
            data-component-name="heroBanner"
            className={`transition-opacity duration-0 ${visibleComponents.has("heroBanner") ? "opacity-100" : "opacity-0"}`}
          >
            {visibleComponents.has("heroBanner") && <HeroBanner />}
          </div>

          <div
            ref={componentRefs.plastFoundation}
            data-component-name="plastFoundation"
            className={`transition-opacity duration-0 ${visibleComponents.has("plastFoundation") ? "opacity-100" : "opacity-0"}`}
          >
            {visibleComponents.has("plastFoundation") && <PlastFoundation />}
          </div>

          {/* <div
            ref={componentRefs.newsFeed}
            data-component-name="newsFeed"
            className={`transition-opacity duration-0 ${visibleComponents.has("newsFeed") ? "opacity-100" : "opacity-0"}`}
          >
            {visibleComponents.has("newsFeed") && <NewsFeed/>}
          </div> */}

          <div
            ref={componentRefs.galary}
            data-component-name="galary"
            className={`transition-opacity duration-0 ${visibleComponents.has("galary") ? "opacity-100" : "opacity-0"}`}
          >
            {visibleComponents.has("galary") && <Galary />}
          </div>

          <div
            ref={componentRefs.vedioElement}
            data-component-name="vedioElement"
            className={`transition-opacity duration-0 ${visibleComponents.has("vedioElement") ? "opacity-100" : "opacity-0"}`}
          >
            {visibleComponents.has("vedioElement") && <VedioElement />}
          </div>

          <div
            ref={componentRefs.welcome}
            data-component-name="welcome"
            className={`transition-opacity duration-0 ${visibleComponents.has("welcome") ? "opacity-100" : "opacity-0"}`}
          >
            {visibleComponents.has("welcome") && <Welcome />}
          </div>

          <div
            ref={componentRefs.event}
            data-component-name="event"
            className={`transition-opacity duration-0 ${visibleComponents.has("event") ? "opacity-100" : "opacity-0"}`}
          >
            {visibleComponents.has("event") && <Event />}
          </div>

          <div
            ref={componentRefs.tradeShow}
            data-component-name="tradeShow"
            className={`transition-opacity duration-0 ${visibleComponents.has("tradeShow") ? "opacity-100" : "opacity-0"}`}
          >
            {visibleComponents.has("tradeShow") && <TradeShow />}
          </div>
     
          <div
            ref={componentRefs.impact}
            data-component-name="impact"
            className={`transition-opacity duration-0 ${visibleComponents.has("impact") ? "opacity-100" : "opacity-0"}`}
          >
            {visibleComponents.has("impact") && <Impact />}
          </div>

          <div
            ref={componentRefs.participationINdus}
            data-component-name="participationINdus"
            className={`transition-opacity duration-0 ${visibleComponents.has("participationINdus") ? "opacity-100" : "opacity-0"}`}
          >
            {visibleComponents.has("participationINdus") && <ParticipationINdus />}
          </div>

          <div
            ref={componentRefs.sustain}
            data-component-name="sustain"
            className={`transition-opacity duration-0 ${visibleComponents.has("sustain") ? "opacity-100" : "opacity-0"}`}
          >
            {visibleComponents.has("sustain") && <Sustain />}
          </div>
      
          <div
            ref={componentRefs.countdown}
            data-component-name="countdown"
            className={`transition-opacity duration-0 ${visibleComponents.has("countdown") ? "opacity-100" : "opacity-0"}`}
          >
            {visibleComponents.has("countdown") && <Countdown />}
          </div>

          <div
            ref={componentRefs.footer}
            data-component-name="footer"
            className={`transition-opacity duration-0 ${visibleComponents.has("footer") ? "opacity-100" : "opacity-0"}`}
          >
            {visibleComponents.has("footer") && <Footer />}
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
