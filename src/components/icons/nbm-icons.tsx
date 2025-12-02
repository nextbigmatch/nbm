interface IconProps {
  className?: string;
  size?: number;
}

const iconColor = "#1172BA"; // NBM Blue from logo
const strokeWidth = 2;

export function Icon3DConversion({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3 12L12 6L21 12M3 12L12 18L21 12M3 12V18L12 24L21 18V12"
        stroke={iconColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 6V12M12 18V24"
        stroke={iconColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconReels({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="7"
        y="2"
        width="10"
        height="20"
        rx="2"
        stroke={iconColor}
        strokeWidth={strokeWidth}
      />
      <path
        d="M10 8L14 11L10 14V8Z"
        stroke={iconColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="7" y1="6" x2="17" y2="6" stroke={iconColor} strokeWidth={strokeWidth} />
      <line x1="7" y1="18" x2="17" y2="18" stroke={iconColor} strokeWidth={strokeWidth} />
    </svg>
  );
}

export function IconFilm({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="2"
        y="5"
        width="20"
        height="14"
        rx="2"
        stroke={iconColor}
        strokeWidth={strokeWidth}
      />
      <line x1="2" y1="9" x2="22" y2="9" stroke={iconColor} strokeWidth={strokeWidth} />
      <line x1="2" y1="15" x2="22" y2="15" stroke={iconColor} strokeWidth={strokeWidth} />
      <circle cx="6" cy="7" r="0.5" fill={iconColor} />
      <circle cx="18" cy="7" r="0.5" fill={iconColor} />
      <circle cx="6" cy="17" r="0.5" fill={iconColor} />
      <circle cx="18" cy="17" r="0.5" fill={iconColor} />
    </svg>
  );
}

export function IconAds({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M18 8L22 12L18 16"
        stroke={iconColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 8L2 12L6 16"
        stroke={iconColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke={iconColor}
        strokeWidth={strokeWidth}
      />
      <path
        d="M12 8V12L14 14"
        stroke={iconColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconDepth({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3 6H21"
        stroke={iconColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M5 10H19"
        stroke={iconColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M7 14H17"
        stroke={iconColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M9 18H15"
        stroke={iconColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconVR({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3 8C3 6.89543 3.89543 6 5 6H19C20.1046 6 21 6.89543 21 8V16C21 17.1046 20.1046 18 19 18H5C3.89543 18 3 17.1046 3 16V8Z"
        stroke={iconColor}
        strokeWidth={strokeWidth}
      />
      <circle
        cx="8"
        cy="12"
        r="2"
        stroke={iconColor}
        strokeWidth={strokeWidth}
      />
      <circle
        cx="16"
        cy="12"
        r="2"
        stroke={iconColor}
        strokeWidth={strokeWidth}
      />
      <path
        d="M5 6C5 6 7 4 12 4C17 4 19 6 19 6"
        stroke={iconColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconPartnership({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="9"
        cy="7"
        r="3"
        stroke={iconColor}
        strokeWidth={strokeWidth}
      />
      <circle
        cx="15"
        cy="7"
        r="3"
        stroke={iconColor}
        strokeWidth={strokeWidth}
      />
      <path
        d="M4 20C4 16.6863 6.68629 14 10 14H14C17.3137 14 20 16.6863 20 20"
        stroke={iconColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconIndustries({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="3"
        y="3"
        width="7"
        height="7"
        rx="1"
        stroke={iconColor}
        strokeWidth={strokeWidth}
      />
      <rect
        x="14"
        y="3"
        width="7"
        height="7"
        rx="1"
        stroke={iconColor}
        strokeWidth={strokeWidth}
      />
      <rect
        x="3"
        y="14"
        width="7"
        height="7"
        rx="1"
        stroke={iconColor}
        strokeWidth={strokeWidth}
      />
      <rect
        x="14"
        y="14"
        width="7"
        height="7"
        rx="1"
        stroke={iconColor}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export function IconContact({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke={iconColor}
        strokeWidth={strokeWidth}
      />
      <path
        d="M3 8L12 13L21 8"
        stroke={iconColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}