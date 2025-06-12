'use client';
import { useTheme } from 'next-themes';

const Test = () => {
  const { setTheme } = useTheme();
  return (
    <div>
      <button onClick={() => setTheme('light')}>ライト</button>
      <button onClick={() => setTheme('system')}>デフォルト</button>
      <button onClick={() => setTheme('dark')}>ダーク</button>
    </div>
  );
};

export default Test;
