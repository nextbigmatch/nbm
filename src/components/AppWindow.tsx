import { motion, MotionValue } from "motion/react";
import { User } from "lucide-react";
import ResponsiveScale from "./ResponsiveScale";
import svgPaths from "../imports/svg-yj5fzop9oe";
import imgFinalOutput1 from "figma:asset/e55ec7cbbdc53cf6411295b332f3e007b347f910.png";

interface AppWindowProps {
  onClose: () => void;
  midX: MotionValue<number>;
  midY: MotionValue<number>;
}

export default function AppWindow({ onClose, midX, midY }: AppWindowProps) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <ResponsiveScale baseWidth={1920} baseHeight={1080}>
        <motion.div 
          className="relative"
          style={{ 
            width: '1920px', 
            height: '1080px',
            x: midX,
            y: midY,
            filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.4))',
          }}
        >
      {/* Main Window Frame */}
      <motion.div
        className="absolute backdrop-blur-[50px] backdrop-filter bg-[rgba(128,128,128,0.3)] border-4 border-[rgba(255,255,255,0.4)] border-solid mix-blend-luminosity overflow-clip rounded-[20px]"
        style={{
          left: '330px',
          top: '100px',
          width: '1350px',
          height: '750px',
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
      </motion.div>

      {/* Content Image */}
      <motion.div
        className="absolute rounded-[17px]"
        style={{
          left: '395px',
          top: '175px',
          width: '1220px',
          height: '600px',
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[17px] size-full"
          src={imgFinalOutput1}
        />
      </motion.div>

      {/* Tab Bar */}
      <motion.div
        className="absolute backdrop-blur-[50px] backdrop-filter bg-[rgba(128,128,128,0.3)] border-[1.4px] border-[rgba(255,255,255,0.4)] border-solid mix-blend-luminosity overflow-clip rounded-[34px]"
        style={{
          left: '230px',
          top: '100px',
          width: '90px',
          height: '750px',
        }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="absolute left-[50%] translate-x-[-50%] rounded-[100px] size-[60px] top-[30px]">
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none rounded-[100px] bg-white flex items-center justify-center"
          >
            <User size={32} color="#1172BA" strokeWidth={2} />
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[100px] items-center left-[50%] translate-x-[-50%] top-[150px] w-[46.8px]">
          <div className="h-[34.125px] relative shrink-0 w-[31.2px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 32 35"
            >
              <path d={svgPaths.p32f4cd80} fill="white" />
            </svg>
          </div>
          <div className="relative shrink-0 size-[46.8px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 47 47"
            >
              <g>
                <path d={svgPaths.p3ad8e9c0} fill="white" />
                <path
                  clipRule="evenodd"
                  d={svgPaths.p19de0190}
                  fill="white"
                  fillRule="evenodd"
                />
              </g>
            </svg>
          </div>
          {/* Additional tab icons would go here */}
        </div>
      </motion.div>

      {/* Controls */}
      <motion.div
        className="absolute rounded-[44px]"
        style={{
          left: '230px',
          top: '860px',
          width: '1450px',
          height: '100px',
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {/* Resize Trailing */}
        <div className="absolute right-0 size-[30px] top-[10px]">
          <div className="absolute bottom-0 left-0 right-[-86.49%] top-[-80.86%]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 69 67"
            >
              <g>
                <path
                  d={svgPaths.p133d6380}
                  stroke="white"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="8"
                />
              </g>
            </svg>
          </div>
        </div>

        {/* Close Button and Grabber */}
        <div className="absolute box-border content-center flex flex-wrap gap-[24px] items-center justify-center left-0 pb-px pt-[22px] px-0 right-0 top-0">
          <motion.div
            className="backdrop-blur-[10px] backdrop-filter bg-[rgba(255,255,255,0)] rounded-[100px] shrink-0 size-[14px] cursor-pointer hover:bg-[rgba(255,255,255,0.3)] transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
          />
          <div className="backdrop-blur-[10px] backdrop-filter bg-[rgba(255,255,255,0.3)] h-[10px] rounded-[100px] shrink-0 w-[136px]" />
          <div className="backdrop-blur-[10px] backdrop-filter bg-[rgba(255,255,255,0)] rounded-[100px] shrink-0 size-[14px]" />
        </div>

        {/* Resize Leading */}
        <div className="absolute left-0 size-[30px] top-[10px]">
          <div className="absolute bottom-0 left-[-86.49%] right-0 top-[-80.86%]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 69 67"
            >
              <g>
                <path
                  d={svgPaths.pa852f5c}
                  stroke="white"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="8"
                />
              </g>
            </svg>
          </div>
        </div>
      </motion.div>
        </motion.div>
      </ResponsiveScale>
    </div>
  );
}
