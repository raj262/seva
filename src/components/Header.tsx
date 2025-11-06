import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center">
              <span className="text-2xl">🕉️</span>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold leading-tight">
                Sri Vyasaraja Matha
              </h1>
              <p className="text-sm md:text-base text-primary-foreground/80">
                Seva Counter Management
              </p>
            </div>
          </Link>
          <Link to="/">
            <Button variant="ghost" size="lg" className="text-primary-foreground hover:bg-primary-foreground/10">
              <Home className="w-6 h-6" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
