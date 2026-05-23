import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "./Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-800">
          EliteVisionCare
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/prepare">Prepare For Visit</Link>

          <Link to="/contact">Contact</Link>

          <Button>Book Appointment</Button>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white p-6 flex flex-col gap-5">
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link to="/about" onClick={() => setOpen(false)}>
            About
          </Link>

          <Link to="/prepare" onClick={() => setOpen(false)}>
            Prepare For Visit
          </Link>

          {/* <Link to="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link> */}

          <Button>Book Appointment</Button>
        </div>
      )}
    </nav>
  );
}
