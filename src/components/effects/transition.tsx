"use client";

import {useRef} from "react";
import {TransitionRouter} from "next-transition-router";
import gsap from "gsap";

export function Providers({children}: { children: React.ReactNode }) {
    const layer = useRef<HTMLDivElement | null>(null);
    const secondLayer = useRef<HTMLDivElement | null>(null);

    return (
        <TransitionRouter
            auto={true}
            leave={(next) => {
                const tl = gsap
                    .timeline({
                        onComplete: next,
                    })
                    .fromTo(
                        layer.current,
                        {x: "100%"},
                        {
                            x: 0,
                            duration: 0.5,
                            ease: "circ.inOut",
                        }
                    )
                // .fromTo(
                //     secondLayer.current,
                //     {
                //         x: "100%",
                //     },
                //     {
                //         x: 0,
                //         duration: 0.5,
                //         ease: "circ.inOut",
                //     },
                //     "<50%"
                // );

                return () => {
                    tl.kill();
                };
            }}
            enter={(next) => {
                const tl = gsap
                    .timeline()
                    // .fromTo(
                    //     secondLayer.current,
                    //     {x: 0},
                    //     {
                    //         x: "-100%",
                    //         duration: 0.5,
                    //         ease: "circ.inOut",
                    //     }
                    // )
                    .fromTo(
                        layer.current,
                        {x: 0},
                        {
                            x: "-100%",
                            duration: 0.5,
                            ease: "circ.inOut",
                        },
                        "<50%"
                    )
                    .call(next, undefined, "<50%");

                return () => {
                    tl.kill();
                };
            }}
        >
            <main>{children}</main>
            {/*<div*/}
            {/*    ref={firstLayer}*/}
            {/*    className="fixed inset-0 z-50 translate-x-full bg-accent bg-blend-color"*/}
            {/*/>*/}
            {/*<div*/}
            {/*    ref={secondLayer}*/}
            {/*    className="fixed inset-0 z-50 translate-x-full bg-background bg-blend-overlay"*/}
            {/*/>*/}
            <div
                ref={layer}
                className="fixed inset-0 z-50 translate-x-full bg-gradient-to-r from-teal-300 to-indigo-400"
            />
            {/*<div*/}
            {/*    ref={secondLayer}*/}
            {/*    className="fixed inset-0 z-50 translate-x-full bg-gradient-to-r from-teal-300 to-indigo-400"*/}
            {/*/>*/}
        </TransitionRouter>
    );
}
