import react from "react";

const CircleProgressBar = (percentage, circleWidth) => {
    const radius = 85;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - (dashArray * percentage) / 100;
  return (
    <div>
      <svg
        width={circleWidth}
        height={circleWidth}
        viewBox={"0 0 ${circleWidth} ${circleWidth}"}
      >
        <defs>
          <linearGradient id="gradient"></linearGradient>
            <stop offset="10%" stop-color="#12c2e9" />
            <stop offset="50%" stop-offset="#c471ed" />
            <stop offset="100%" stop-offset="#f64f59" />
        </defs>
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          r={circleWidth / 2}
          strokeWidth="15px"
          r="radius"
          className="circle-background"
        />

         <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          r={circleWidth / 2}
          strokeWidth="15px"
          r="radius"
          className="circle-progress"
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
          transform={'rotate(-90 ${circleWidth / 2} ${circleWidth / 2})'}
          stroke="url(#gradient)"
        />
        <text x="50%" y="50%" dy="0.3em textAnchor="middle" className="circle-text" fill="url(#gradient)">{percentage}%</text>
      </svg>
    </div>
  );
};

export default CircleProgressBar;
