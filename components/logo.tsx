export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg width="140" height="140" viewBox="0 0 140 140" fill="none" aria-label="MyVirtualCloset logo">
        {/* Outer circle */}
        <circle cx="70" cy="70" r="58" stroke="#7B1818" strokeWidth="5" fill="none" />
        {/* Decorative dots */}
        <circle cx="56" cy="10" r="3" fill="#7B1818" />
        <circle cx="70" cy="6" r="2" fill="#7B1818" />
        <circle cx="84" cy="10" r="3" fill="#7B1818" />
        <circle cx="56" cy="130" r="3" fill="#7B1818" />
        <circle cx="70" cy="134" r="2" fill="#7B1818" />
        <circle cx="84" cy="130" r="3" fill="#7B1818" />
        {/* Letter m */}
        <text x="70" y="88" textAnchor="middle" fontFamily="Georgia, serif" fontStyle="italic" fontSize="72" fontWeight="400" fill="#7B1818">
          m
        </text>
      </svg>
    </div>
  )
}
