'use client'

import { Suspense, lazy, useRef, useState } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
    scene: string
    className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
    const splineRef = useRef<any>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

    const onLoad = (spline: any) => {
        splineRef.current = spline
        console.log('Spline loaded:', spline)
    }

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return

        const rect = containerRef.current.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2

        setMousePos({ x, y })

        if (!splineRef.current) return

        // Try multiple approaches to manipulate the scene
        try {
            // Approach 1: Set camera rotation
            if (splineRef.current.setZoom) {
                splineRef.current.emitEvent('mouseMove', e)
            }

            // Approach 2: Manipulate the scene directly
            const app = splineRef.current
            if (app._scene && app._scene.children) {
                app._scene.children.forEach((child: any) => {
                    if (child.rotation) {
                        child.rotation.y = x * 0.5
                        child.rotation.x = -y * 0.3
                    }
                })
            }
        } catch (err) {
            console.log('Scene manipulation:', err)
        }
    }

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="w-full h-full relative"
            style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 5}deg) rotateX(${mousePos.y * -5}deg)`,
                transition: 'transform 0.1s ease-out'
            }}
        >
            <Suspense
                fallback={
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400"></div>
                    </div>
                }
            >
                <Spline
                    scene={scene}
                    className={className}
                    onLoad={onLoad}
                />
            </Suspense>
        </div>
    )
}
