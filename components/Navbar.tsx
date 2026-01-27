"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();

  const linkStyle = (path: string) =>
    `px-4 py-2 text-lg ${
      pathname === path ? "text-orange-600 font-bold" : "text-green-800 font-semibold"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white flex items-center justify-between border-b py-6 px-6 navbar-font" style={{ fontFamily: '"Satoshi", system-ui, -apple-system, sans-serif' }}>
      {/* Logo that redirects home */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/images/favicon.ico"
          alt="India Club @ Georgia Tech Logo"
          width={60}
          height={60}
        />
        <span className="font-bold text-2xl">India Club @ GT</span>
      </Link>

      {/* Tabs */}
      <div className="flex items-center gap-4">
        {/* Existing internal pages */}
        <Link className={linkStyle("/")} href="/">Home</Link>
        <Link className={linkStyle("/about")} href="/about">About</Link>
        <Link className={linkStyle("/join")} href="/join">Get Involved</Link>
        <Link className={linkStyle("/board-members")} href="/board-members">Executive Board</Link>
        <Link className={linkStyle("/events")} href="/events">Events</Link>
        <Link className={linkStyle("/gallery")} href="/gallery">Photo Gallery</Link>
        <Link className={linkStyle("/contact-info")} href="/contact-info">Contact Info</Link>

        {/* External image tabs */}
        <a
          href="https://www.instagram.com/indiaclub_gt/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <Image
            src="/images/instagrammono.png"
            alt="External Tab 1"
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
            alt="External Tab 2"
            width={40}
            height={40}
            className="hover:opacity-80 cursor-pointer"
          />
        </a>
      </div>
    </nav>
  );
}
