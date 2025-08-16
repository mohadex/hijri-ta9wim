import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold font-arabic bg-gradient-to-r from-islamic-green to-islamic-blue bg-clip-text text-transparent">
              التقويم الهجري
            </h1>
            <nav className="hidden md:flex items-center gap-6">
              <a 
                href="#" 
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                الرئيسية
              </a>
              <a 
                href="#converter" 
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                تحويل التاريخ
              </a>
              <a 
                href="#calendar" 
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                التقويم الشهري
              </a>
              <a 
                href="#contact" 
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                اتصل بنا
              </a>
            </nav>
          </div>
          
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="h-9 w-9"
            >
              {isDark ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
              <span className="sr-only">تبديل الوضع</span>
            </Button>
            
            {/* Mobile menu button */}
            <Button variant="ghost" className="md:hidden" size="icon">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;