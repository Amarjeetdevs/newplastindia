"use client"
import { createContext, useContext, useState } from 'react';


const SlidesContext = createContext({ slides: [], setSlides: () => {} });


export function SlidesProvider({ children }) {
  const [slides, setSlides] = useState([]);

  return (
    <SlidesContext.Provider value={{ slides, setSlides }}>
      {children}
    </SlidesContext.Provider>
  );
}


export function useSlides() {
  return useContext(SlidesContext);
}
