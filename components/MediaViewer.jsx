"use client";
import React from "react";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Inline from "yet-another-react-lightbox/plugins/inline";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import './styles.css';

const inline = {
  style: {
    width: "100%",
    maxWidth: "80vw",
    aspectRatio: "16 / 9",
    margin: "0 auto",
  }, 
};

export default function MediaViewer({ isOpen, onClose, initialIndex, slides }) {
  const thumbnailsRef = React.useRef(null);

  const formattedSlides = slides.map((slide) => ({
    src: slide.url,
  }));

  return (
    <>
      <Lightbox
        slides={formattedSlides}
        inline={inline}
        plugins={[Inline, Fullscreen, Slideshow, Thumbnails, Zoom]}
        carousel={{
          spacing: 0,
          padding: 0,
          imageFit: "cover",
        }}
        open={isOpen}
        close={onClose}
        index={initialIndex}
        thumbnails={{
          ref: thumbnailsRef,
          borderColor: "#032624",
          borderRadius: 10,
          padding: 5,
          gap: 18,
          imageFit: "contain",
        }}
      />
    </>
  );
}
