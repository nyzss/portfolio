"use client";
import { MutableRefObject, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const MouseFollow = () => {
    gsap.registerPlugin(useGSAP);
    const blob: MutableRefObject<HTMLDivElement | null> = useRef(null);
    const circle: MutableRefObject<HTMLDivElement | null> = useRef(null);

    // useGSAP(() => {
    // }, {scope: blob})
    useEffect(() => {
        const handleMovement = (event: PointerEvent) => {
            const { clientX, clientY } = event;
            gsap.to(blob.current, {
                left: clientX,
                top: clientY,
                duration: 4,
                delay: 0,
                fill: "forwards",
                ease: "power3.out",
            });

            gsap.to(circle.current, {
                x: clientX - 40,
                y: clientY - 6 * 8,
                duration: 1,
                delay: 0,
                ease: "power3.out",
            });
        };
        window.addEventListener("pointermove", handleMovement);
        return () => {
            window.removeEventListener("pointermove", handleMovement);
        };
    }, []);

    return (
        <>
            <div
                ref={circle}
                className="inline-block w-24 h-24 rounded-full border-solid border border-opacity-40 border-gray-700 dark:border-gray-400 bg-opacity-0 absolute top-0 left-0 pointer-events-none z-50"
            ></div>
            <div ref={blob} id="blob"></div>
            <div id="blur"></div>
        </>
    );
};

export default MouseFollow;
