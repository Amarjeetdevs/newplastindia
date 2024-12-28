import React from 'react';
import { motion, useInView } from 'framer-motion';

export default function VideoElement() {
  const ref = React.useRef(null);
  const videoRef = React.useRef(null);
  const isInView = useInView(ref, { amount: 0.4 });

  // React.useEffect(() => {
  //   if (videoRef.current) {
  //     if (isInView) {
  //       videoRef.current.play();
  //     } else {
  //       videoRef.current.pause();
  //     }
  //   }
  // }, [isInView]);

  return (
    <div className="lg:block md:block my-12 lg:mb-16 lg:my-5 lg:rounded-none overflow-hidden">
      <motion.div
        ref={ref}
        initial={{ 
          height: '95vh', 
          width: '95vw', 
          margin: '10vh', 
          borderRadius: 'auto' 
        }}
        animate={isInView ? {
          height: '115vh', 
          width: '100vw', 
          margin: '0', 
          borderRadius: '0px' 
        } : {
          height: '95vh', 
          width: '95vw', 
          margin: '5vh', 
          borderRadius: 'auto' 
        }}
        transition={{ duration: 0.5 }}
        className="hidden md:flex items-center justify-center overflow-hidden"
      >
        <video
          ref={videoRef}
          width="100%"
          height="100%"
          controls
          playsInline
           poster="https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/HP_PT_2_a1d86cd520.webp"
        >
          <source src="https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/Copy_of_Plast_India_Main_Film_with_VO_15826a850c.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      {/* For mobile screens, render video without animation */}
      <div className="md:hidden flex items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          width="100%"
          height="100%"
          controls
          playsInline
           poster="https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/25_Thumbnail_247171ab8d.webp"

        >
          <source src="https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/Copy_of_Plast_India_Main_Film_with_VO_15826a850c.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
