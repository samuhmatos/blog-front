export function CategoryHeaderSkeleton() {
  return (
    <div className="bg-primary-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="m-auto block"
        width="200px"
        height="100px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle cx="27.5" cy="57.5" r="5" fill="#003b64">
          <animate
            attributeName="cy"
            calcMode="spline"
            keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5"
            repeatCount="indefinite"
            values="57.5;42.5;57.5;57.5"
            keyTimes="0;0.3;0.6;1"
            dur="1s"
            begin="-0.6s"
          ></animate>
        </circle>{" "}
        <circle cx="42.5" cy="57.5" r="5" fill="#fff200">
          <animate
            attributeName="cy"
            calcMode="spline"
            keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5"
            repeatCount="indefinite"
            values="57.5;42.5;57.5;57.5"
            keyTimes="0;0.3;0.6;1"
            dur="1s"
            begin="-0.44999999999999996s"
          ></animate>
        </circle>{" "}
        <circle cx="57.5" cy="57.5" r="5" fill="#003b64">
          <animate
            attributeName="cy"
            calcMode="spline"
            keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5"
            repeatCount="indefinite"
            values="57.5;42.5;57.5;57.5"
            keyTimes="0;0.3;0.6;1"
            dur="1s"
            begin="-0.3s"
          ></animate>
        </circle>{" "}
        <circle cx="72.5" cy="57.5" r="5" fill="#fff200">
          <animate
            attributeName="cy"
            calcMode="spline"
            keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5"
            repeatCount="indefinite"
            values="57.5;42.5;57.5;57.5"
            keyTimes="0;0.3;0.6;1"
            dur="1s"
            begin="-0.15s"
          ></animate>
        </circle>
      </svg>
    </div>
  );
}
