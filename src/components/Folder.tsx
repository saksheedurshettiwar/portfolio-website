"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Folder({ color = "#6366F1", size = 1, className = "" }) {
  const [open, setOpen] = useState(false);
  const [paperOffsets, setPaperOffsets] = useState([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);

  const handleClick = () => {
    setOpen(!open);
    if (!open) {
      setPaperOffsets([
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
      ]);
    }
  };

  const handlePaperMouseMove = (e: React.MouseEvent, index: number) => {
    if (!open) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (e.clientX - centerX) * 0.15;
    const offsetY = (e.clientY - centerY) * 0.15;
    setPaperOffsets((prev) => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: offsetX, y: offsetY };
      return newOffsets;
    });
  };

  const handlePaperMouseLeave = () => {
    setPaperOffsets([
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
    ]);
  };

  return (
    <motion.div
      style={{ transform: `scale(${size})`, cursor: "pointer" }}
      className={className}
      onClick={handleClick}
      initial={{ y: 0 }}
      whileHover={!open ? { y: -8 } : {}}
      transition={{ duration: 0.2 }}
    >
      <div style={{ position: "relative", width: 100, height: 80 }}>
        <motion.div
          style={{
            position: "absolute",
            bottom: 8,
            left: 15,
            width: 70,
            height: 56,
            background: "#e5e5e5",
            borderRadius: 10,
            zIndex: 2,
            transform: open
              ? `translate(${-60 + paperOffsets[0].x}px, ${-28 + paperOffsets[0].y}px) rotateZ(-15deg)`
              : "translate(0, 0)",
            transition: "all 0.3s ease-in-out",
          }}
          onMouseMove={(e) => handlePaperMouseMove(e, 0)}
          onMouseLeave={handlePaperMouseLeave}
        />
        <motion.div
          style={{
            position: "absolute",
            bottom: 8,
            left: 30,
            width: 60,
            height: 48,
            background: "#f0f0f0",
            borderRadius: 10,
            zIndex: 3,
            transform: open
              ? `translate(${5 + paperOffsets[1].x}px, ${-28 + paperOffsets[1].y}px) rotateZ(15deg)`
              : "translate(0, 0)",
            transition: "all 0.3s ease-in-out",
          }}
          onMouseMove={(e) => handlePaperMouseMove(e, 1)}
          onMouseLeave={handlePaperMouseLeave}
        />
        <motion.div
          style={{
            position: "absolute",
            bottom: 8,
            left: 35,
            width: 50,
            height: 40,
            background: "#ffffff",
            borderRadius: 10,
            zIndex: 4,
            transform: open
              ? `translate(${-25 + paperOffsets[2].x}px, ${-40 + paperOffsets[2].y}px) rotateZ(5deg)`
              : "translate(0, 0)",
            transition: "all 0.3s ease-in-out",
          }}
          onMouseMove={(e) => handlePaperMouseMove(e, 2)}
          onMouseLeave={handlePaperMouseLeave}
        />
        <motion.div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: 100,
            height: 80,
            background: color,
            borderRadius: "0 10px 10px 10px",
            transformOrigin: "bottom",
            zIndex: 5,
            transform: open ? "skew(15deg) scaleY(0.6)" : "skew(0deg) scaleY(1)",
            transition: "all 0.3s ease-in-out",
          }}
        />
      </div>
    </motion.div>
  );
}