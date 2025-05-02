import { useState, useEffect } from "react";
import { Link } from "wouter";
import { MoonIcon, SunIcon, MenuIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { theme, setTheme } = useTheme();
  let lastScrollTop = 0;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Check if scrolled down more than 100px
      setHasScrolled(scrollTop > 100);
      
      // Hide header on scroll down, show on scroll up
      if (scrollTop > lastScrollTop && scrollTop > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 border-b border-slate-200 dark:border-slate-700 bg-background/80 backdrop-blur-md ${
        hasScrolled ? "shadow-md" : ""
      } ${isHidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-primary text-2xl font-bold">Quantum</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium">
              Features
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium">
              Testimonials
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium">
              Pricing
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium">
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle dark mode"
              className="rounded-full bg-slate-200 dark:bg-slate-700"
            >
              <SunIcon className="h-5 w-5 block dark:hidden" />
              <MoonIcon className="h-5 w-5 hidden dark:block" />
            </Button>

            {/* Login/Signup Buttons */}
            <div className="hidden sm:flex items-center space-x-3">
              <Button variant="ghost" className="text-primary font-medium">
                Login
              </Button>
              <Button className="bg-primary text-white font-medium hover:bg-primary/90">
                Sign Up
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu} 
              className="md:hidden" 
              aria-label="Open menu"
            >
              {isMenuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-700 bg-background">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#features" 
                className="px-4 py-2 text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
                onClick={closeMenu}
              >
                Features
              </a>
              <a 
                href="#testimonials" 
                className="px-4 py-2 text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
                onClick={closeMenu}
              >
                Testimonials
              </a>
              <a 
                href="#pricing" 
                className="px-4 py-2 text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
                onClick={closeMenu}
              >
                Pricing
              </a>
              <a 
                href="#contact" 
                className="px-4 py-2 text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
                onClick={closeMenu}
              >
                Contact
              </a>
              <div className="flex space-x-3 pt-3">
                <Button 
                  variant="outline" 
                  className="flex-1 text-primary border-primary hover:bg-primary/10"
                >
                  Login
                </Button>
                <Button className="flex-1">
                  Sign Up
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
