"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMembersDropdownOpen, setIsMembersDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const linkStyle = (path: string) =>
    `px-4 py-2 text-lg ${
      pathname === path ? "text-orange-600 font-bold" : "text-green-800 font-semibold"
    }`;

  const subLinkStyle = (path: string) =>
    `block px-4 py-2 text-sm text-center ${
      pathname === path ? "text-orange-600 font-bold" : "text-green-800 font-semibold"
    } hover:bg-gray-100`;

  const sidebarLinkStyle = (path: string) =>
    `block w-full py-2 px-3 rounded-none bg-gray-100 hover:bg-gray-300 transition-colors duration-200 text-lg ${
      pathname === path ? "text-orange-600 font-bold" : "text-green-800 font-semibold"
    }`;

  const sidebarSubLinkStyle = (path: string) =>
    `block w-full py-2 px-3 rounded-none bg-gray-100 hover:bg-gray-300 transition-colors duration-200 text-lg text-green-800 font-medium ${
      pathname === path ? "text-orange-600" : ""
    }`;

  return (
    <>
      <nav
        className="sticky top-0 z-50 bg-gray-200 flex items-center justify-between py-6 px-6 rounded-b-lg navbar-font"
        style={{ fontFamily: '"Satoshi", system-ui, -apple-system, sans-serif' }}
      >
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/IClogo.png"
            alt="India Club @ Georgia Tech Logo"
            width={60}
            height={60}
          />
          <span className="font-bold text-2xl">India Club @ GT</span>
        </Link>

        <div className="flex items-center gap-4">
          <Link className={linkStyle("/")} href="/">Home</Link>
          <Link className={linkStyle("/about")} href="/about">About</Link>
          <Link className={linkStyle("/join")} href="/join">Get Involved</Link>
          <div
            className="relative inline-block"
            onMouseEnter={() => setIsMembersDropdownOpen(true)}
            onMouseLeave={() => setIsMembersDropdownOpen(false)}
          >
            <span
              className={`px-4 py-2 text-lg cursor-default ${
                pathname === "/board-members" || pathname.startsWith("/board-members/")
                  ? "text-orange-600 font-bold"
                  : "text-green-800 font-semibold"
              }`}
            >
              Members
            </span>
            {isMembersDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-white border border-gray-200 rounded-md shadow-lg w-[150px] z-50">
                <Link
                  href="/board-members/structure"
                  className={subLinkStyle("/board-members/structure")}
                >
                  Structure
                </Link>
                <Link
                  href="/board-members/officers"
                  className={subLinkStyle("/board-members/officers")}
                >
                  Officers
                </Link>
              </div>
            )}
          </div>
          <Link className={linkStyle("/events")} href="/events">Events</Link>

          <a href="mailto:info@indiaclub.gatech.edu" className="flex items-center">
            <Image
              src="/images/emailmono.svg"
              alt="Email Contact"
              title="Contact Us"
              width={60}
              height={60}
              className="hover:opacity-80 cursor-pointer"
            />
          </a>
          <a
            href="https://www.instagram.com/indiaclub_gt/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <Image
              src="/images/instagrammono.png"
              alt="Instagram"
              title="Instagram"
              width={50}
              height={50}
              className="hover:opacity-80 cursor-pointer"
            />
          </a>

          <a
            href="https://www.tiktok.com/@indiaclub_gt"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <Image
              src="/images/tiktokmono.png"
              alt="Tiktok"
              title="Tiktok"
              width={40}
              height={40}
              className="hover:opacity-80 cursor-pointer"
            />
          </a>

          <button
            type="button"
            aria-label="Open navigation menu"
            onClick={() => setIsSidebarOpen(true)}
            className="ml-2 p-2 rounded-md hover:bg-gray-300 transition-colors duration-200"
          >
            <span className="block w-7 h-0.5 bg-green-800 mb-1.5" />
            <span className="block w-7 h-0.5 bg-green-800 mb-1.5" />
            <span className="block w-7 h-0.5 bg-green-800" />
          </button>
        </div>
      </nav>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/35 z-[60]"
          onClick={() => setIsSidebarOpen(false)}
        >
          <aside
            className="absolute top-0 right-0 h-full w-72 bg-gray-100 shadow-xl p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-green-800">Menu</h2>
              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={() => setIsSidebarOpen(false)}
                className="text-2xl leading-none text-green-800 hover:text-orange-600"
              >
                ×
              </button>
            </div>

            <nav className="overflow-hidden rounded-xl">
              <Link href="/" className={sidebarLinkStyle("/")} onClick={() => setIsSidebarOpen(false)}>Home</Link>
              <Link href="/about" className={sidebarLinkStyle("/about")} onClick={() => setIsSidebarOpen(false)}>About</Link>
              <Link href="/join" className={sidebarLinkStyle("/join")} onClick={() => setIsSidebarOpen(false)}>Get Involved</Link>
              <div>
                <p className="text-green-800 font-semibold text-lg px-3 py-2 rounded-none bg-gray-100">Members</p>
                <div>
                  <Link href="/board-members/structure" className={`${sidebarSubLinkStyle("/board-members/structure")} pl-7`} onClick={() => setIsSidebarOpen(false)}>
                    Structure
                  </Link>
                  <Link href="/board-members/officers" className={`${sidebarSubLinkStyle("/board-members/officers")} pl-7`} onClick={() => setIsSidebarOpen(false)}>
                    Officers
                  </Link>
                </div>
              </div>
              <Link href="/events" className={sidebarLinkStyle("/events")} onClick={() => setIsSidebarOpen(false)}>Events</Link>
              <a
                href="mailto:info@indiaclub.gatech.edu"
                className="block py-2 px-3 rounded-lg bg-gray-100 hover:bg-gray-300 transition-colors duration-200 text-lg text-green-800 font-semibold hover:text-orange-600"
                onClick={() => setIsSidebarOpen(false)}
              >
                Contact
              </a>
              <a
                href="https://www.instagram.com/indiaclub_gt/"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 px-3 rounded-lg bg-gray-100 hover:bg-gray-300 transition-colors duration-200 text-lg text-green-800 font-semibold hover:text-orange-600"
                onClick={() => setIsSidebarOpen(false)}
              >
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@indiaclub_gt"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 px-3 rounded-lg bg-gray-100 hover:bg-gray-300 transition-colors duration-200 text-lg text-green-800 font-semibold hover:text-orange-600"
                onClick={() => setIsSidebarOpen(false)}
              >
                TikTok
              </a>
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}
