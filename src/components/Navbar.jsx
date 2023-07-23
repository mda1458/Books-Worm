import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 h-[10vh] fixed w-screen">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <img src={logo} className="h-8 mr-3" alt="Logo" />
        </Link>
        <Link
          to={"/books"}
          className="py-2 pl-3 pr-4 rounded text-lg font-bold text-slate-900 transition-all hover:text-[#4D331F] hover:border-b-[#4D331F] hover:border-b-2 cursor-pointer" 
        >
          Books
        </Link>
        <Link
          to={"/"}
          className="cursor-pointer"
        >
          <svg
            className="w-4 h-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
