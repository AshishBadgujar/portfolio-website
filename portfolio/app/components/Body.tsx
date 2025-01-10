'use client';

import { useTheme } from '../context/ThemeContext';

export default function BodyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isDarkTheme, toggleTheme } = useTheme();
  return (
    <body
      className="position-relative d-flex h-100 w-100"
      data-bs-spy="scroll"
      data-bs-target="#navScroll"
      data-bs-theme={isDarkTheme && 'dark'}
    >
      <div className="h-100 container-fluid position-relative">
        <div className="h-100 row d-flex align-items-stretch position-relative z-1">
          {children}
        </div>
      </div>
    </body>
  );
}
