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
    `px-2 py-1 text-base text-center transition-colors duration-200 ${
      pathname === path
        ? "text-[#b8c7d9] font-bold"
        : "text-white font-semibold hover:text-[#b8c7d9]"
    }`;

  const subLinkStyle = (path: string) =>
    `block px-4 py-2 text-sm text-center transition-colors duration-200 ${
      pathname === path
        ? "text-[#b8c7d9] font-bold"
        : "text-white font-semibold hover:text-[#b8c7d9]"
    }`;

  const sidebarLinkStyle = (path: string) =>
    `block w-full py-2 px-3 rounded-none transition-colors duration-200 text-lg ${
      pathname === path
        ? "text-[#b8c7d9] font-bold"
        : "text-white font-semibold hover:text-[#b8c7d9]"
    }`;

  const sidebarSubLinkStyle = (path: string) =>
    `block w-full py-2 px-3 rounded-none transition-colors duration-200 text-lg ${
      pathname === path
        ? "text-[#b8c7d9] font-semibold"
        : "text-white font-medium hover:text-[#b8c7d9]"
    }`;

  return (
    <>
      <nav
        className="sticky top-0 z-50 bg-[#001f3f] border-b-2 border-[#f7f7f7] grid grid-cols-[320px_auto_320px] items-center py-3 px-4 navbar-font"
      >
        <Link href="/" className="flex items-center gap-2 justify-self-start w-[320px]">
          <Image
            src="/images/IClogowhite.png"
            alt="India Club @ Georgia Tech Logo"
            width={32}
            height={32}
          />
          <span className="ml-[4px] font-bold text-lg text-white transition-colors duration-200 hover:text-[#b8c7d9]">
            India Club @ GT
          </span>
        </Link>

        <div className="flex items-center gap-5 justify-self-center">
          <Link className={linkStyle("/")} href="/">Home</Link>
          <Link className={linkStyle("/about")} href="/about">About</Link>
          <Link className={linkStyle("/join")} href="/join">Get Involved</Link>
          <div
            className="relative inline-block"
            onMouseEnter={() => setIsMembersDropdownOpen(true)}
            onMouseLeave={() => setIsMembersDropdownOpen(false)}
          >
            <span
              className={`px-2 py-1 text-base text-center cursor-default transition-colors duration-200 ${
                pathname === "/board-members" || pathname.startsWith("/board-members/")
                  ? "text-[#b8c7d9] font-bold"
                  : "text-white font-semibold hover:text-[#b8c7d9]"
              }`}
            >
              Members
            </span>
            {isMembersDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 bg-[#001f3f] border border-[#f7f7f7] rounded-md shadow-lg w-[150px] z-50">
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
        </div>

        <div className="flex w-[320px] items-center justify-end gap-3 justify-self-end">
          <a href="mailto:info@indiaclub.gatech.edu" className="flex items-center px-2 py-1">
            <Image
              src="/images/mailicon.png"
              alt="Email Contact"
              title="Contact Us"
              width={30}
              height={30}
              className="hover:opacity-80 cursor-pointer"
            />
          </a>
          <a
            href="https://www.instagram.com/indiaclub_gt/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-2 py-1"
          >
            <Image
              src="/images/instagramwhite.png"
              alt="Instagram"
              title="Instagram"
              width={25}
              height={25}
              className="hover:opacity-80 cursor-pointer"
            />
          </a>

          <a
            href="https://www.tiktok.com/@indiaclub_gt"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-2 py-1"
          >
            <Image
              src="/images/tiktoklogo.png"
              alt="Tiktok"
              title="Tiktok"
              width={20}
              height={20}
              className="hover:opacity-80 cursor-pointer"
            />
          </a>

          <button
            type="button"
            aria-label="Open navigation menu"
            onClick={() => setIsSidebarOpen(true)}
            className="p-1.5 rounded-md hover:bg-gray-300 transition-colors duration-200"
          >
            <span className="block w-4 h-0.5 bg-white mb-1" />
            <span className="block w-4 h-0.5 bg-white mb-1" />
            <span className="block w-4 h-0.5 bg-white" />
          </button>
        </div>
      </nav>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/35 z-[60]"
          onClick={() => setIsSidebarOpen(false)}
        >
          <aside
            className="absolute top-0 right-0 h-full w-72 bg-[#001f3f] shadow-xl p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Menu</h2>
              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={() => setIsSidebarOpen(false)}
                className="text-2xl leading-none text-white hover:text-[#b8c7d9]"
              >
                ×
              </button>
            </div>

            <nav className="overflow-hidden rounded-xl">
              <Link href="/" className={sidebarLinkStyle("/")} onClick={() => setIsSidebarOpen(false)}>Home</Link>
              <Link href="/about" className={sidebarLinkStyle("/about")} onClick={() => setIsSidebarOpen(false)}>About</Link>
              <Link href="/join" className={sidebarLinkStyle("/join")} onClick={() => setIsSidebarOpen(false)}>Get Involved</Link>
              <div>
                <p className="text-white font-semibold text-lg px-3 py-2 rounded-none">Members</p>
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
                className="block py-2 px-3 rounded-lg transition-colors duration-200 text-lg text-white font-semibold hover:text-[#b8c7d9]"
                onClick={() => setIsSidebarOpen(false)}
              >
                Contact Us
              </a>
              <a
                href="https://www.instagram.com/indiaclub_gt/"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 px-3 rounded-lg transition-colors duration-200 text-lg text-white font-semibold hover:text-[#b8c7d9]"
                onClick={() => setIsSidebarOpen(false)}
              >
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@indiaclub_gt"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 px-3 rounded-lg transition-colors duration-200 text-lg text-white font-semibold hover:text-[#b8c7d9]"
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
