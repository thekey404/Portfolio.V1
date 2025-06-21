import React from "react";
import { SparklesCore } from "./Sparkles";

const SparklesPreview = () => {
    return (
        <div className="pt-32 md:pt-48 lg:pt-60 mb-16 md:mb-24 h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden">
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-bold text-center text-white relative z-20 px-4">
                Yash Valecha
            </h1>

            <div className="w-[90vw] sm:w-[30rem] md:w-[40rem] h-40 relative mt-8">
                {/* Top glowing gradient lines */}
                <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full blur-sm" />
                <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full" />
                <div className="absolute inset-x-32 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/2 blur-sm" />
                <div className="absolute inset-x-32 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/2" />

                {/* Particles */}
                <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={800}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />

                {/* Mask gradient for top glow fade */}
                <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(300px_150px_at_top,transparent_20%,white)] sm:[mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" />
            </div>
        </div>
    );
};

export default SparklesPreview;
