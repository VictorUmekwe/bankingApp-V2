import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Banknote, Menu, X } from "lucide-react";
import { useState } from "react";


const navlinkStyle = "text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-white";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="bg-white dark:bg-gray-800 border-b shadow-sm px-4 py-3">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold flex items-center gap-1 dark:text-white">
          <Banknote className="text-blue-600" /> Banku
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6">
          <li><Link to="/about" className={navlinkStyle}>About</Link></li>
          <li><Link to="/contact" className={navlinkStyle}>Contact</Link></li>
     
        </ul>

        {/* Desktop Auth Button */}
        <div className="hidden md:block">
          <Button  variant="ghost"><Link to="/signup">Sign up</Link></Button>
          <Button asChild><Link to="/login">Login</Link></Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md focus:outline-none "
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 px-4 flex flex-col items-center">
          <Link to="/about" className={navlinkStyle} onClick={toggleMobileMenu}>About</Link>
          <Link to="/contact" className={navlinkStyle} onClick={toggleMobileMenu}>Contact</Link>
          
          <Link to="/signup" className="block">
            <Button className="mt-2 w-full">Sign up</Button>
          </Link>
          <Link to="/login" className="block">
            <Button className="mt-2 w-full">Login</Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
