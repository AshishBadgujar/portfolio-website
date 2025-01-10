'use client';
import BodyLayout from './components/Body';
import { ThemeProvider, useTheme } from './context/ThemeContext';

export default function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <BodyLayout>{children}</BodyLayout>
    </ThemeProvider>
  );
}
