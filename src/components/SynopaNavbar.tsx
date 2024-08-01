import { LuUser } from "react-icons/lu";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export function SynopaNavbar() {
  return (
    <nav className="fixed h-14 top-0 left-0 w-full flex justify-center">
      <div className="navbar max-w-[1000px] bg-base-100 z-50">
        <div className="navbar-start">
          <a className="btn btn-ghost text-sm text-primary-content" href="#">
            Synopa.
          </a>
        </div>
        <div className="navbar-end mr-5">
          <a
            className="btn btn-ghost mr-3 btn-xs text-xs font-medium"
            href="/synopa"
          >
            Dashboard
          </a>
          <Menu as="div" className="relative ml-3">
            <div>
              <MenuButton className="relative flex rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
                <LuUser className="h-5 w-5" />
              </MenuButton>
            </div>
            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <MenuItem>
                <p className="block px-4 py-3 text-sm text-gray-700 data-[focus]:bg-gray-100 font-semibold">
                  jamiecliffe2@gmail.com
                </p>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                >
                  Your Profile
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                >
                  Settings
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="/logout"
                  className="block px-4 py-3 text-sm text-gray-700 data-[focus]:bg-gray-100"
                >
                  Sign Out
                </a>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </nav>
  );
}
