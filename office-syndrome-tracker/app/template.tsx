"use client";
import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      animation: "fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      opacity: 0,
      transform: "translateY(20px)"
    }}>
      <style>{`
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      {children}
    </div>
  );
}