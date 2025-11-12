// --- Demo version. Code concealed ---
'use client';

  children,
  disabled = false,
  className = ''
}: ButtonProps) {
      whileTap={!disabled ? { scale: 0.95 } : undefined}
      disabled={disabled}
      className={`
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-blue-500 hover:bg-blue-700 cursor-pointer'}
      `}
// --- End of demo block ---
