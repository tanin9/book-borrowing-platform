import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/gift.png";
import Loginlogo from "@/assets/loginlogo.jpg";
import NavLink from "./NavLink";
const Navbar = () => {



  return (
    <div className="container mx-auto sticky top-0 z-50">
      <div className="navbar bg-[#e37b58] shadow-sm px-5  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink href={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink href={"/all-books"}>All Books</NavLink>
              </li>

              <li>
                <NavLink href={"/my-profile"}>My Profile</NavLink>
              </li>
            </ul>
          </div>
          <Link href={"/"}>
            <div className="btn bg-[#e37b58] border-[#e37b58] shadow-none text-xl text-white p-5">
              <Image
                src={Logo}
                alt="Profile Picture"
                width={30}
                height={30}
              />
              <p>BookRent</p>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[#fdf7eb]">
            <li>
              <NavLink href={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink href={"/all-books"}>All Books</NavLink>
            </li>

            <li>
              <NavLink href={"/login"}>My Profile</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <Image
                  src={Loginlogo}
                  alt="Profile Picture"
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
