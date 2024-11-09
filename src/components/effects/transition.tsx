"use client";

import {useRef} from "react";
import {TransitionRouter} from "next-transition-router";
import gsap from "gsap";

export function Providers({children}: { children: React.ReactNode }) {
    const layer = useRef<HTMLDivElement | null>(null);

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
                return () => {
                    tl.kill();
                };
            }}
            enter={(next) => {
                const tl = gsap
                    .timeline()
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
            <div
                ref={layer}
                className="fixed inset-0 z-40 translate-x-full bg-gradient-to-tr from-teal-300 to-purple-400 dark:from-teal-700 dark:to-purple-700 opacity-[99] backdrop-blur-3xl"
            />
        </TransitionRouter>
    );
}
