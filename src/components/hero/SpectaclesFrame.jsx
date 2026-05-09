import React from 'react';

export default function SpectaclesFrame({ className }) {
  return (
    <svg
      viewBox="0 0 800 260"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 3,
        overflow: 'visible',
      }}
    >
      {/* ── Left lens rim ── */}
      <rect
        x="14" y="14"
        width="356" height="232"
        rx="38" ry="38"
        fill="none"
        stroke="#2C2522"
        strokeWidth="28"
      />

      {/* ── Right lens rim ── */}
      <rect
        x="430" y="14"
        width="356" height="232"
        rx="38" ry="38"
        fill="none"
        stroke="#2C2522"
        strokeWidth="28"
      />

      {/* ── Nose bridge ── curved arc connecting the two rims */}
      <path
        d="M 370,105 C 370,72 430,72 430,105"
        fill="none"
        stroke="#2C2522"
        strokeWidth="18"
        strokeLinecap="round"
      />

      {/* ── Left temple arm stub ── */}
      <rect x="0" y="96" width="14" height="40" rx="5" fill="#2C2522" />

      {/* ── Right temple arm stub ── */}
      <rect x="786" y="96" width="14" height="40" rx="5" fill="#2C2522" />

      {/* ── Screw detail left ── (optional premium touch) */}
      <circle cx="50" cy="36" r="5" fill="#2C2522" opacity="0.4" />

      {/* ── Screw detail right ── */}
      <circle cx="750" cy="36" r="5" fill="#2C2522" opacity="0.4" />
    </svg>
  );
}
