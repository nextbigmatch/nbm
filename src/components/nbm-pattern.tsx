export function NBMPattern() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="nbm-pattern"
            x="0"
            y="0"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            <text
              x="10"
              y="50"
              fill="white"
              fillOpacity="0.04"
              fontSize="24"
              fontFamily="Afacad Flux, sans-serif"
              fontWeight="700"
            >
              NBM™
            </text>
            <text
              x="100"
              y="120"
              fill="white"
              fillOpacity="0.04"
              fontSize="24"
              fontFamily="Afacad Flux, sans-serif"
              fontWeight="700"
            >
              NBM™
            </text>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#nbm-pattern)" />
      </svg>
    </div>
  );
}