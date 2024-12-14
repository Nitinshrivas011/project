import React from 'react';
import { Sun, Moon, Shield } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Link } from './ui/Link';
import { Button } from './ui/Button';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed w-full top-4 z-50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="backdrop-blur-md bg-white/10 dark:bg-gray-900/20 rounded-2xl border border-white/20 dark:border-gray-700/30 shadow-lg">
          <div className="flex items-center justify-between h-16 px-6">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-purple-500" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">CyberGuard</span>
            </Link>
            
            <div className="flex items-center space-x-8">
              <Link href="/topics">Topics</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-white/10 dark:hover:bg-gray-700/50 transition-colors"
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5 text-yellow-500" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-600" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}