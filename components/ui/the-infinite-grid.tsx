"use client";

import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import {
    motion,
    useMotionValue,
    useMotionTemplate,
    useAnimationFrame,
    MotionValue
} from "framer-motion";

const GRID_SIZE = 80; // Increased grid box size

export const InfiniteGrid = ({ children }: { children?: React.ReactNode }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
    };

    const gridOffsetX = useMotionValue(0);
    const gridOffsetY = useMotionValue(0);

    const speedX = 0.5;
    const speedY = 0.5;

    useAnimationFrame(() => {
        const currentX = gridOffsetX.get();
        const currentY = gridOffsetY.get();
        gridOffsetX.set((currentX + speedX) % GRID_SIZE);
        gridOffsetY.set((currentY + speedY) % GRID_SIZE);
    });

    const maskImage = useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className={cn(
                "relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background"
            )}
        >
            {/* Decorative Blobs - Top Right & Bottom Left */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                {/* Top Right Blob */}
                <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-indigo-200/40 to-violet-200/30 blur-[100px]" />
                {/* Bottom Left Blob */}
                <div className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-rose-200/40 to-orange-200/30 blur-[100px]" />
            </div>

            {/* Layer 1: Base Grid (Very Light) */}
            <div className="absolute inset-0 z-0">
                <GridPattern
                    patternId="grid-base"
                    offsetX={gridOffsetX}
                    offsetY={gridOffsetY}
                    strokeColor="rgba(0,0,0,0.06)"
                    gridSize={GRID_SIZE}
                />
            </div>

            {/* Layer 2: Flashlight Grid (Darker, Revealed on Hover) */}
            <motion.div
                className="absolute inset-0 z-[1]"
                style={{ maskImage, WebkitMaskImage: maskImage }}
            >
                <GridPattern
                    patternId="grid-highlight"
                    offsetX={gridOffsetX}
                    offsetY={gridOffsetY}
                    strokeColor="rgba(0,0,0,0.25)"
                    gridSize={GRID_SIZE}
                />
            </motion.div>

            {/* Bottom Fade Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[2] pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 w-full pointer-events-none *:pointer-events-auto">
                {children}
            </div>
        </div>
    );
};

interface GridPatternProps {
    patternId: string;
    offsetX: MotionValue<number>;
    offsetY: MotionValue<number>;
    strokeColor: string;
    gridSize: number;
}

const GridPattern = ({ patternId, offsetX, offsetY, strokeColor, gridSize }: GridPatternProps) => {
    return (
        <svg className="w-full h-full">
            <defs>
                <motion.pattern
                    id={patternId}
                    width={gridSize}
                    height={gridSize}
                    patternUnits="userSpaceOnUse"
                    x={offsetX}
                    y={offsetY}
                >
                    <path
                        d={`M ${gridSize} 0 L 0 0 0 ${gridSize}`}
                        fill="none"
                        stroke={strokeColor}
                        strokeWidth="1"
                    />
                </motion.pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#${patternId})`} />
        </svg>
    );
};
