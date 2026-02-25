import { Link } from "react-router-dom";
import { Heart, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-primary">
            <Heart className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-bold text-foreground">
            VG <span className="text-primary">Care</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Treatments
          </Link>
          <Link to="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Hospitals
          </Link>
          <Link to="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Specialists
          </Link>
          <Link to="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            How It Works
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="hidden gap-2 md:flex">
            <Globe className="h-4 w-4" />
            EN
          </Button>
          <Button variant="ghost" size="sm" className="hidden gap-2 md:flex">
            <Phone className="h-4 w-4" />
            +1-800-VG-CARE
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
