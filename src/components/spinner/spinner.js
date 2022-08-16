import React from "react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      version="1"
      viewBox="0 0 128 128"
    >
      <rect width="100%" height="100%" fill="#FCA35B"></rect>
      <g>
        <circle cx="16" cy="64" r="16" fill="#0aee6d"></circle>
        <circle
          cx="16"
          cy="64"
          r="14.344"
          fill="#0aee6d"
          transform="rotate(45 64 64)"
        ></circle>
        <circle
          cx="16"
          cy="64"
          r="12.531"
          fill="#0aee6d"
          transform="rotate(90 64 64)"
        ></circle>
        <circle
          cx="16"
          cy="64"
          r="10.75"
          fill="#0aee6d"
          transform="rotate(135 64 64)"
        ></circle>
        <circle
          cx="16"
          cy="64"
          r="10.063"
          fill="#0aee6d"
          transform="rotate(180 64 64)"
        ></circle>
        <circle
          cx="16"
          cy="64"
          r="8.063"
          fill="#0aee6d"
          transform="rotate(225 64 64)"
        ></circle>
        <circle
          cx="16"
          cy="64"
          r="6.438"
          fill="#0aee6d"
          transform="rotate(270 64 64)"
        ></circle>
        <circle
          cx="16"
          cy="64"
          r="5.375"
          fill="#0aee6d"
          transform="rotate(315 64 64)"
        ></circle>
        <animateTransform
          attributeName="transform"
          calcMode="discrete"
          dur="880ms"
          repeatCount="indefinite"
          type="rotate"
          values="0 64 64;315 64 64;270 64 64;225 64 64;180 64 64;135 64 64;90 64 64;45 64 64"
        ></animateTransform>
      </g>
    </svg>
  );
}

export default Icon;
