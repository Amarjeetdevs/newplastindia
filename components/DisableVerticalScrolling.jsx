"use client"

import  { useEffect } from 'react';
import {  useAnimation } from 'framer-motion';

const DisableScrollWhenElementInView = ({ elementId }) => {
    const controls = useAnimation();

    useEffect(() => {
        const checkElementInView = () => {
            const element = document.getElementById(elementId);

            if (element) {
                const boundingRect = element.getBoundingClientRect();

                if (boundingRect.left >= 0 && boundingRect.right <= window.innerWidth) {
                    controls.start({ x: window.scrollX });
                    document.body.style.overflowX = 'hidden';
                } else {
                    document.body.style.overflowX = 'auto'; 
                }
            }
        };

        const handleResizeAndScroll = () => {
            checkElementInView();
        };

        checkElementInView();

        window.addEventListener('resize', handleResizeAndScroll);
        window.addEventListener('scroll', handleResizeAndScroll);

        return () => {
            window.removeEventListener('resize', handleResizeAndScroll);
            window.removeEventListener('scroll', handleResizeAndScroll);
        };
    }, [elementId, controls]);

    return null; 
};

export default DisableScrollWhenElementInView;
