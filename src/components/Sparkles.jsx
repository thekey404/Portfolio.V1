import React, { useId, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion, useAnimation } from "framer-motion";
import { cn } from "./utils"; // Ensure this utility exists

export const SparklesCore = ({
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
}) => {
    const [init, setInit] = useState(false);
    const controls = useAnimation();
    const generatedId = useId();

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container) => {
        if (container) {
            controls.start({
                opacity: 1,
                transition: { duration: 1 },
            });
        }
    };

    return (
        <motion.div animate={controls} className={cn("opacity-0", className)}>
            {init && (
                <Particles
                    id={id || generatedId}
                    className="h-full w-full"
                    particlesLoaded={particlesLoaded}
                    options={{
                        background: {
                            color: { value: background || "#0d47a1" },
                        },
                        fullScreen: { enable: false, zIndex: 1 },
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: { enable: true, mode: "push" },
                                onHover: { enable: false },
                                resize: true,
                            },
                            modes: {
                                push: { quantity: 4 },
                                repulse: { distance: 200, duration: 0.4 },
                            },
                        },
                        particles: {
                            color: { value: particleColor || "#ffffff" },
                            move: {
                                enable: true,
                                direction: "none",
                                speed: { min: 0.1, max: 1 },
                                outModes: { default: "out" },
                            },
                            number: {
                                density: {
                                    enable: true,
                                    width: 400,
                                    height: 400,
                                },
                                value: particleDensity || 120,
                            },
                            opacity: {
                                value: { min: 0.1, max: 1 },
                                animation: {
                                    enable: true,
                                    speed: speed || 4,
                                    mode: "auto",
                                    startValue: "random",
                                },
                            },
                            shape: { type: "circle" },
                            size: {
                                value: { min: minSize || 1, max: maxSize || 3 },
                            },
                        },
                        detectRetina: true,
                    }}
                />
            )}
        </motion.div>
    );
};
