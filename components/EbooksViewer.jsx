"use client";

import React, { useState, useEffect } from 'react';

export default function EbooksViewer({src}) {
  const [dimensions, setDimensions] = useState({
    height: '70vh',
    width: '100%',
  });

  useEffect(() => {
    const updateDimensions = () => {
      if (window.innerWidth <= 480) {
        setDimensions({ height: '40vh', width: '100%' });
      } else if (window.innerWidth <= 768) {
        setDimensions({ height: '50vh', width: '100%' });
      } else if (window.innerWidth <= 1024) {
        setDimensions({ height: '60vh', width: '90%' });
      } else {
        setDimensions({ height: '70vh', width: '80%' });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);
  console.log(src)
  return (
    <div className='h-screen w-screen' style={{ height: dimensions.height, width: dimensions.width, margin: '0 auto' }}>
      <iframe
        src={src}
        width="100%"
        height="100%"
        allowFullScreen
        title="Ebook Viewer"
        
      ></iframe>
    </div>
  );
}
