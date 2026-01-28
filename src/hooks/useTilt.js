import { useCallback, useRef } from 'react';
import gsap from 'gsap';

export const useTilt = (options = {}) => {
    const {
        rotationIntensity = 3,
        scale = 1.02,
        speed = 0.8, // Slightly faster default for responsiveness
        perspective = 1000,
        easing = "power2.out",
        scaleDuration = 0.3 // Separate faster duration for zoom to prevent "sudden zoom" feeling
    } = options;

    const cardRects = useRef(new Map());

    const handleMouseEnter = useCallback((e, id) => {
        const card = e.currentTarget;
        cardRects.current.set(id, card.getBoundingClientRect());

        // Apply will-change to hint browser for compositor optimization
        gsap.set(card, { willChange: "transform" });

        // Handle Scale separately for snappier entry
        gsap.to(card, {
            scale: scale,
            duration: scaleDuration,
            ease: "power2.out",
            overwrite: "auto"
        });
    }, [scale, scaleDuration]);

    const handleMouseMove = useCallback((e, id) => {
        const card = e.currentTarget;
        let rect = cardRects.current.get(id);

        // Fallback if cache missed (e.g. quick entry)
        if (!rect) {
            rect = card.getBoundingClientRect();
            cardRects.current.set(id, rect);
        }

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -rotationIntensity;
        const rotateY = ((x - centerX) / centerX) * rotationIntensity;

        // Handle Rotation separately with softer follow
        gsap.to(card, {
            rotationX: rotateX,
            rotationY: rotateY,
            transformPerspective: perspective,
            duration: speed,
            ease: easing,
            overwrite: "auto"
        });
    }, [rotationIntensity, speed, perspective, easing]);

    const handleMouseLeave = useCallback((e, id) => {
        const card = e.currentTarget;

        // Reset everything
        gsap.to(card, {
            scale: 1,
            rotationX: 0,
            rotationY: 0,
            duration: speed,
            ease: easing,
            overwrite: "auto",
            onComplete: () => {
                gsap.set(card, { willChange: "auto" });
            }
        });
    }, [speed, easing]);

    return { handleMouseEnter, handleMouseMove, handleMouseLeave };
};
