"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationLinks } from "../site-config";
import styles from "./site-chrome.module.css";

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className={styles.headerWrap}>
      <div className={styles.headerInner}>
        <Link className={styles.brand} href="/">
          <span className={styles.brandMark}>TUI</span>
          <span className={styles.brandText}>
            <strong>The Unfiltered IITian</strong>
            <span>Courses, mentorship, and resume reviews</span>
          </span>
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          {navigationLinks.map((link) => {
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
          })}
        </nav>

        <Link className={styles.cta} href="/contact">
          Join community
        </Link>
      </div>
    </header>
  );
}
