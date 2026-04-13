"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigationLinks } from "../site-config";
import styles from "./site-chrome.module.css";

export default function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const navLinks = navigationLinks.map((link) => {
    const isActive = pathname === link.href;

    return (
      <Link
        key={link.href}
        className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
        href={link.href}
        aria-current={isActive ? "page" : undefined}
      >
        {link.label}
      </Link>
    );
  });

  const mobileNavLinks = navigationLinks.map((link) => {
    const isActive = pathname === link.href;

    return (
      <Link
        key={link.href}
        className={`${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ""}`}
        href={link.href}
        aria-current={isActive ? "page" : undefined}
        onClick={() => setIsMenuOpen(false)}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <header className={styles.headerWrap}>
      <div className={styles.headerInner}>
        <Link className={styles.brand} href="/">
          <span className={styles.brandMark}>TUI</span>
          <span className={styles.brandText}>
            <strong>The Unfiltered IITian</strong>
            <span>Student guidance and live rooms</span>
          </span>
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          {navLinks}
        </nav>

        <Link className={styles.cta} href="/contact">
          Join community
        </Link>

        <button
          className={styles.menuButton}
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <svg
            className={styles.menuIcon}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      <button
        className={`${styles.mobileBackdrop} ${isMenuOpen ? styles.mobileBackdropVisible : ""}`}
        type="button"
        aria-label="Close navigation menu"
        onClick={() => setIsMenuOpen(false)}
      />

      <aside
        className={`${styles.mobileDrawer} ${isMenuOpen ? styles.mobileDrawerOpen : ""}`}
        id="mobile-navigation"
        aria-hidden={!isMenuOpen}
      >
        <div className={styles.drawerHeader}>
          <div>
            <span className={styles.drawerEyebrow}>Menu</span>
            <strong>The Unfiltered IITian</strong>
          </div>
          <button
            className={styles.closeButton}
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setIsMenuOpen(false)}
          >
            <span>Close</span>
            <svg
              className={styles.closeIcon}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>
        </div>

        <nav className={styles.mobileNav} aria-label="Mobile primary">
          {mobileNavLinks}
        </nav>

        <Link
          className={styles.drawerCta}
          href="/contact"
          onClick={() => setIsMenuOpen(false)}
        >
          Join community
        </Link>
      </aside>
    </header>
  );
}
