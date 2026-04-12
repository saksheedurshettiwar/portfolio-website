"use client";

import { useRef, useState } from "react";
import { motion, useFrame } from "framer-motion";

export default function Lanyard({ position = [0, 0, 30], gravity = [0, -40, 0] }) {
  const groupRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const points = [
    { x: 0, y: 0, z: 0 },
    { x: 20, y: -30, z: 0 },
    { x: 50, y: -80, z: 0 },
    { x: 100, y: -100, z: 0 },
  ];

  useFrame(({ pointer }) => {
    if (isDragging && cardRef.current) {
      const x = (pointer.x + 1) * 200;
      const y = (pointer.y - 1) * -200;
      cardRef.current.style.transform = `translate(${x}px, ${Math.max(0, y)}px)`;
    }
  });

  return (
    <div
      ref={groupRef}
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        width: "50%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        perspective: "1000px",
      }}
    >
      <motion.div
        style={{
          position: "relative",
          width: 300,
          height: 400,
        }}
      >
        {/* Lanyard string/band */}
        <svg
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: 4,
            height: 180,
          }}
        >
          <path
            d="M 0 0 Q 30 80, 100 120 T 150 180"
            fill="none"
            stroke="#6366F1"
            strokeWidth={3}
            strokeLinecap="round"
            style={{
              filter: "drop-shadow(0 2px 4px rgba(99, 102, 241, 0.3))",
            }}
          />
        </svg>

        {/* Card holder */}
        <motion.div
          ref={cardRef}
          style={{
            position: "absolute",
            top: 150,
            left: "50%",
            width: 180,
            height: 250,
            background: "linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%)",
            borderRadius: 12,
            transform: "translateX(-50%)",
            cursor: "grab",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
          }}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.98 }}
          onPointerDown={() => setIsDragging(true)}
          onPointerUp={() => setIsDragging(false)}
        >
          {/* Card design */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: 12,
              padding: 20,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Top bar */}
            <div
              style={{
                height: 40,
                background: "linear-gradient(90deg, #6366F1, #8B5CF6)",
                borderRadius: 8,
                marginBottom: 20,
              }}
            />
            {/* Content lines */}
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                style={{
                  height: 12,
                  background: i === 4 ? "#6366F1" : "#404040",
                  borderRadius: 6,
                  marginBottom: 10,
                  width: `${100 - i * 15}%`,
                }}
              />
            ))}
            {/* Photo placeholder */}
            <div
              style={{
                position: "absolute",
                bottom: 40,
                right: 20,
                width: 50,
                height: 50,
                borderRadius: "50%",
                background: "#404040",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
                color: "#6366F1",
              }}
            >
              SD
            </div>
          </div>

          {/* Lanyard hole */}
          <div
            style={{
              position: "absolute",
              top: -15,
              left: "50%",
              transform: "translateX(-50%)",
              width: 24,
              height: 24,
              borderRadius: "50%",
              background: "#1e1e1e",
              border: "3px solid #6366F1",
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}