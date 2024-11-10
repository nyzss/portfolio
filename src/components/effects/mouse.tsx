"use client";
import { MutableRefObject, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const MouseFollow = () => {
    gsap.registerPlugin(useGSAP);
    const blob: MutableRefObject<HTMLDivElement | null> = useRef(null);
    const circle: MutableRefObject<HTMLDivElement | null> = useRef(null);
    const dot: MutableRefObject<HTMLDivElement | null> = useRef(null);

    useEffect(() => {
        const resetPosition = () => {
            gsap.to(circle.current, {
                x: -100,
                y: -100,
            });
            gsap.to(dot.current, {
                x: -100,
                y: -100,
            });
            // gsap.to(blob.current, {
            //     x: 0,
            //     y: 0,
            // });
        };
        const handleMovement = (event: PointerEvent) => {
            if (event.pointerType === "touch") {
                resetPosition();
                return;
            }
            const { clientX, clientY } = event;

            gsap.to(blob.current, {
                left: clientX - blob.current?.clientWidth! / 2,
                top: clientY - blob.current?.clientHeight! / 2,
                duration: 2,
                delay: 0,
                fill: "forwards",
                ease: "power3.out",
            }).timeScale(0.5);

            const rect = circle.current?.getBoundingClientRect();
            gsap.fromTo(
                circle.current,
                {
                    x: rect?.left,
                    y: rect?.top,
                },
                {
                    x: clientX - circle.current?.clientWidth! / 2,
                    y: clientY - circle.current?.clientHeight! / 2,
                    duration: 0.6,
                    delay: 0,
                    ease: "power3.out",
                    fill: "forwards",
                }
            );
            gsap.to(dot.current, {
                x: clientX - dot.current?.clientWidth!,
                y: clientY - dot.current?.clientHeight!,
                duration: 0.3,
                delay: 0,
                ease: "power3.out",
            });
        };
        window.addEventListener("pointermove", handleMovement);

        resetPosition();
        return () => {
            window.removeEventListener("pointermove", handleMovement);
        };
    }, []);

    return (
        <>
            <div
                ref={circle}
                className="inline-block w-24 h-24 rounded-full border-solid border border-opacity-40 border-gray-700 dark:border-gray-400 bg-opacity-0 top-0 left-0 pointer-events-none z-50 fixed"
            ></div>
            <div
                ref={dot}
                className="w-2 h-2 bg-gray-700 dark:bg-gray-400 rounded-full fixed top-0 left-0 pointer-events-none z-50 inline-block"
            ></div>
            <div
                ref={blob}
                id="blob"
                className="bg-gradient-to-br dark:from-indigo-600 dark:to-teal-300 from-indigo-700 to-teal-600"
            ></div>

            <div id="blur"></div>
        </>
    );
};

export default MouseFollow;
