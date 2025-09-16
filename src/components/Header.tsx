import { Link } from "react-router-dom";
// import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="bg-background bg-cyan-700 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-white text-primary">
            TOGO
          </Link>
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-foreground text-white hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/privacy" className="text-foreground text-white hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            {/* <button >Contact Us</button> */}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;