import React from "react";

const CardsView = () => {
    return (
        <div id="projects" className="w-full min-h-screen bg-black flex flex-col items-center justify-center px-4 py-16">
            <h2 className="text-white text-4xl font-bold mb-10">Projects</h2>

            <div className="flex flex-wrap justify-center gap-10 max-w-7xl w-full">
                {/* Project 1 */}
                <div className="w-[280px] h-[320px] border border-white rounded-2xl flex items-center justify-center">
                    <p className="text-white text-lg">Project 1</p>
                </div>

                {/* Project 2 */}
                <div className="w-[280px] h-[320px] border border-white rounded-2xl flex items-center justify-center">
                    <p className="text-white text-lg">Project 2</p>
                </div>

                {/* Project 3 */}
                <div className="w-[280px] h-[320px] border border-white rounded-2xl flex items-center justify-center">
                    <p className="text-white text-lg">Project 3</p>
                </div>
            </div>
        </div>
    );
};

export default CardsView;
