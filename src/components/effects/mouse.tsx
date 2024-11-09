"use client"
import {MutableRefObject, useEffect, useRef} from "react";
import gsap from "gsap"
import {useGSAP} from "@gsap/react";

export const MouseFollow = () => {
    gsap.registerPlugin(useGSAP)
    const blob: MutableRefObject<HTMLDivElement | null> = useRef(null);

    // useGSAP(() => {
    // }, {scope: blob})
    useEffect(() => {
        const handleMovement = (event: PointerEvent) => {
            const {clientX, clientY} = event;
            gsap.to(blob.current, {
                left: clientX,
                top: clientY,
                duration: 4,
                delay: 0,
                fill: "forwards",
                ease: "power3.out"
            })
        }
        window.addEventListener("pointermove", handleMovement);
        return () => {
            window.removeEventListener("pointermove", handleMovement);
        }
    }, []);

    return (
        <>
            <div ref={blob} id="blob"></div>
            <div id="blur"></div>
        </>
    )
}

export default MouseFollow;