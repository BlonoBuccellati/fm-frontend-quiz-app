"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { IconMoon, IconSun } from "@/shared/assets";

import { Switch } from "./switch";

type Props = {
  icon: React.FC<React.SVGProps<SVGElement>>;
  isDark: boolean;
  onClick: () => void;
};
export function ThemeButton({ icon: Icon, isDark, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="hover:cursor-pointer"
      aria-pressed={isDark}
    >
      <Icon className={isDark ? "text-white" : "text-gray-500"} />
    </button>
  );
}

const ThemeSwitch = () => {
  const { setTheme, theme } = useTheme();

  //サーバ上では、themeはまだdarkでない（undefined)なので、ハイドレーションエラーが起きてしまう。
  // 初期はレンダリングせずに、完全にクライアントでレンダリングする。
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null; // SSR 描画をスキップ

  const isDark = theme === "dark";

  return (
    <div className="flex items-center space-x-200">
      <ThemeButton
        icon={IconSun}
        onClick={() => setTheme("light")}
        isDark={isDark}
      />
      <Switch
        className="h-[28px] w-600 bg-purple-600 hover:cursor-pointer"
        checked={theme === "dark"}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      />
      <ThemeButton
        icon={IconMoon}
        onClick={() => setTheme("dark")}
        isDark={isDark}
      />
    </div>
  );
};

export default ThemeSwitch;
