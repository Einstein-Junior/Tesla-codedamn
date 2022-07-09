import logo from "../../../assets/tesla.svg";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai"

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const closeSidebar = () => setOpen(false);
  return (
    <>
      <nav className="hidden lg:block w-full overflow-x-hidden">
        <header className="items-center px-6 py-4 flex justify-between">
          <div className="flex items-center justify-center">
            <img className="w-32 cursor-pointer" src={logo} alt="logo" />
          </div>

          <ul className="flex justify-center items-center gap-8">
            <li className="cursor-pointer hover:text-gray-200">Model S</li>
            <li className="cursor-pointer hover:text-gray-200">Model 3</li>
            <li className="cursor-pointer hover:text-gray-200">Model X</li>
            <li className="cursor-pointer hover:text-gray-200">Model Y</li>
            <li className="cursor-pointer hover:text-gray-200">Solar Roof</li>
            <li className="cursor-pointer hover:text-gray-200">Solar Panels</li>
          </ul>

          <ul className="flex m-4 gap-4 justify-center items-center">
            <li className="cursor-pointer hover:text-gray-200">Shop</li>
            <li className="cursor-pointer hover:text-gray-200">Account</li>
            <li className="cursor-pointer hover:text-gray-200">Menu</li>
          </ul>
        </header>
      </nav>

      <nav className="block lg:hidden w-full overflow-x-hidden">
        <div className="flex justify-between items-center m-4">
          <div className="flex items-center justify-center">
            <img className="w-32 cursor-pointer" src={logo} alt="logo" />
          </div>

          <div className="flex items-center justify-center m-2">
            <button
              onClick={() => setOpen(!open)}
              className="py-2 px-3 bg-blue-100 rounded-md"
            >
              Menu
            </button>

            {open && (
              <ul className="flex flex-col absolute top-0 w-[100%] h-full z-50 p-4 bg-white gap-2 font-semibold text-lg">
                <div className="flex w-[55%] justify-between">
                  <div></div>
                  <AiOutlineClose
                    onClick={() => setOpen(!open)}
                    className="w-6 h-6 mb-4"
                  />
                </div>

                <li
                  onClick={() => closeSidebar()}
                  className="cursor-pointer  hover:text-gray-200"
                >
                  Model S
                </li>
                <li
                  onClick={() => closeSidebar()}
                  className="cursor-pointer hover:text-gray-200"
                >
                  Model 3
                </li>
                <li
                  onClick={() => closeSidebar()}
                  className="cursor-pointer hover:text-gray-200"
                >
                  Model X
                </li>
                <li
                  onClick={() => closeSidebar()}
                  className="cursor-pointer hover:text-gray-200"
                >
                  Model Y
                </li>
                <li
                  onClick={() => closeSidebar()}
                  className="cursor-pointer hover:text-gray-200"
                >
                  Solar Roof
                </li>
                <li
                  onClick={() => closeSidebar()}
                  className="cursor-pointer hover:text-gray-200"
                >
                  Solar Panels
                </li>
                <li
                  onClick={() => closeSidebar()}
                  className="cursor-pointer hover:text-gray-200"
                >
                  Existing Inventory
                </li>
                <li
                  onClick={() => closeSidebar()}
                  className="cursor-pointer hover:text-gray-200"
                >
                  Used Inventory
                </li>
                <li
                  onClick={() => closeSidebar()}
                  className="cursor-pointer hover:text-gray-200"
                >
                  Trade-In
                </li>
                <li
                  onClick={() => closeSidebar()}
                  className="cursor-pointer hover:text-gray-200"
                >
                  Test Drive
                </li>
                <li
                  onClick={() => closeSidebar()}
                  className="cursor-pointer hover:text-gray-200"
                >
                  Powerwall
                </li>
                <li
                  onClick={() => closeSidebar()}
                  className="cursor-pointer hover:text-gray-200"
                >
                  Commercial Energy
                </li>
                <li
                  onClick={() => closeSidebar()}
                  className="cursor-pointer hover:text-gray-200"
                >
                  Utilities
                </li>
                <li
                  onClick={() => closeSidebar()}
                  className="cursor-pointer hover:text-gray-200"
                >
                  Charging
                </li>
                <li
                  onClick={() => closeSidebar()}
                  className="cursor-pointer hover:text-gray-200"
                >
                  Find Us
                </li>
                <li
                  onClick={() => closeSidebar()}
                  className="cursor-pointer hover:text-gray-200"
                >
                  Support
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
