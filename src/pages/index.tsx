import { Terminal } from '@/components/Terminal/Terminal';
import { useTheme } from '@/context/ThemeContext';
import { useState } from 'react';
import { MatrixRain } from '@/components/Effects/MatrixRain';

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [matrixMode, setMatrixMode] = useState(false);

  const toggleMatrix = () => {
    setMatrixMode((prev) => !prev);
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {matrixMode && <MatrixRain />}
      <Terminal onThemeToggle={toggleTheme} onMatrixToggle={toggleMatrix} />
    </div>
  );
}
