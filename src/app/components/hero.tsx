"use client"
import { JetBrains_Mono } from "next/font/google"
import { createRef, useEffect, useRef } from "react"
const jbm = JetBrains_Mono({ subsets: ["latin"] })


export default function Hero() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    useEffect(() => {
        window.addEventListener("resize", () => handleResize());
        handleResize()
        draw();
    }, [handleResize, draw])

    function handleResize() {
        console.log("resize!")
        if(canvasRef.current) {
            const parent = canvasRef.current.parentElement;

            if(parent) {
                const rect = parent.getBoundingClientRect()
                canvasRef.current.width = rect.width;
                canvasRef.current.height = rect.height;
            }
        }
        draw()
    }

    function draw() {
        const canvas = canvasRef.current;
        if(canvas) {
            const context = canvas.getContext("2d");
            context!.strokeStyle = "#00b7ff"
            
            context!.translate(canvas.width*1.5, canvas.height/2);

            for(var i = 0; i < 200; i++) {
                const size = 20*(i+1);
                context!.strokeRect(-size/2, -size/2, size, size)
                context!.rotate(0.5);
                context!.lineWidth = 75/i;

            }
        }
    }

    return <main className="bg-sky-950 relative border-y-2 border-y-sky-900 min-h-96 overflow-hidden" style={{height: "66vh"}}>
        <canvas onResize={handleResize} ref={canvasRef} className="relative top-0 left-0"> </canvas>
        <div className="flex flex-row items-center z-20 absolute top-0 left-0 w-full h-full p-8 bg-opacity-80 bg-slate-900 md:bg-opacity-100 md:bg-transparent md:bg-gradient-to-l md:via-90% md:via-slate-900 md:from-transparent md:to-slate-900">
            <div className="md:w-1/2 w-full">
                <p className={`${jbm.className} text-slate-200 text-sm mb-1 ml-1`}>04/06/2023</p>
                <h1 className={`${jbm.className} text-6xl md:text-8xl font-bold mb-4`}>DECAGON</h1>
                <p className="text-sm md:text-base ml-1">Centennial National Math Honor Society&apos;s and Glenelg National Math Honor Society&apos;s annual math tournament!</p>
                <p className={`${jbm.className} text-slate-400 text-xs ml-1`}>Registration is free and open until April 3, 2024, 11:59 PM.</p>
                <div className="flex flex-row mt-4 gap-2 ml-1">
                    <a className={`${jbm.className} btn-primary`} href="https://docs.google.com/forms/d/e/1FAIpQLSeeC-h3OTe2GSN3e6pkJ3feinun5dQy8oQoBhUwVXs5WFh2Rg/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">Register</a>
                    <a className={`${jbm.className} btn-secondary`} href="mailto:decagontournament@gmail.com" target="_blank" rel="noopener noreferrer">Contact</a>
                </div>
            </div>
        </div>
    </main>
}