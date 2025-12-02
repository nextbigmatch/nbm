export function DepthBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0A0F1A] to-black" />
      
      {/* Layered depth circles - NBM Blue (#1172BA) */}
      
      {/* Layer 1 - Top center, largest */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full blur-[140px]"
        style={{ 
          background: 'radial-gradient(circle, rgba(17, 114, 186, 0.05) 0%, transparent 70%)',
          opacity: 0.1
        }}
      />
      
      {/* Layer 2 - Top right */}
      <div 
        className="absolute top-1/4 right-1/4 w-[900px] h-[900px] rounded-full blur-[120px]"
        style={{ 
          background: 'radial-gradient(circle, rgba(17, 114, 186, 0.04) 0%, transparent 70%)',
          opacity: 0.08
        }}
      />
      
      {/* Layer 3 - Center left */}
      <div 
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[100px]"
        style={{ 
          background: 'radial-gradient(circle, rgba(17, 114, 186, 0.06) 0%, transparent 70%)',
          opacity: 0.06
        }}
      />
      
      {/* Layer 4 - Bottom center */}
      <div 
        className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full blur-[130px]"
        style={{ 
          background: 'radial-gradient(circle, rgba(17, 114, 186, 0.03) 0%, transparent 70%)',
          opacity: 0.1
        }}
      />
      
      {/* Layer 5 - Bottom right, subtle */}
      <div 
        className="absolute bottom-0 right-1/3 w-[700px] h-[700px] rounded-full blur-[110px]"
        style={{ 
          background: 'radial-gradient(circle, rgba(17, 114, 186, 0.05) 0%, transparent 70%)',
          opacity: 0.05
        }}
      />
    </div>
  );
}