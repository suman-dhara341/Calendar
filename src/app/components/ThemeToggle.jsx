// components/ThemeToggle.js
"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // avoids hydration mismatch

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 bg-gray-200 dark:bg-black rounded text-sm"
    >
      {theme === "dark" ? (
        <MdOutlineDarkMode className="bg-dark" />
      ) : (
        <MdLightMode />
      )}
    </button>
  );
}
