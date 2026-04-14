"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { actionLinks, externalAnchorProps, navigationLinks } from "../site-config";
import LinkIcon from "./LinkIcon";
import styles from "./site-chrome.module.css";

export default function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const drawerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

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

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node | null;

      if (drawerRef.current?.contains(target) || menuButtonRef.current?.contains(target)) {
        return;
      }

      setIsMenuOpen(false);
    };

    const handleOutsideScroll = (event: Event) => {
      const target = event.target as Node | null;

      if (drawerRef.current?.contains(target)) {
        return;
      }

      setIsMenuOpen(false);
    };

    const handleWindowScroll = () => {
      setIsMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown, { capture: true });
    document.addEventListener("wheel", handleOutsideScroll, { capture: true, passive: true });
    document.addEventListener("touchmove", handleOutsideScroll, { capture: true, passive: true });
    window.addEventListener("scroll", handleWindowScroll, { passive: true });

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown, { capture: true });
      document.removeEventListener("wheel", handleOutsideScroll, { capture: true });
      document.removeEventListener("touchmove", handleOutsideScroll, { capture: true });
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, [isMenuOpen]);

  const navLinks = navigationLinks.map((link) => {
    const isActive = pathname === link.href;
    const linkContent = (
      <>
        <LinkIcon className={styles.linkIcon} name={link.icon} />
        <span>{link.label}</span>
      </>
    );

    if (link.href.startsWith("http")) {
      return (
        <a
          key={link.href}
          className={styles.navLink}
          href={link.href}
          {...externalAnchorProps(link.href)}
        >
          {linkContent}
        </a>
      );
    }

    return (
      <Link
        key={link.href}
        className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
        href={link.href}
        aria-current={isActive ? "page" : undefined}
      >
        {linkContent}
      </Link>
    );
  });

  const mobileNavLinks = navigationLinks.map((link) => {
    const isActive = pathname === link.href;
    const linkContent = (
      <>
        <LinkIcon className={styles.linkIcon} name={link.icon} />
        <span>{link.label}</span>
      </>
    );

    if (link.href.startsWith("http")) {
      return (
        <a
          key={link.href}
          className={styles.mobileNavLink}
          href={link.href}
          {...externalAnchorProps(link.href)}
          onClick={() => setIsMenuOpen(false)}
        >
          {linkContent}
        </a>
      );
    }

    return (
      <Link
        key={link.href}
        className={`${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ""}`}
        href={link.href}
        aria-current={isActive ? "page" : undefined}
        onClick={() => setIsMenuOpen(false)}
      >
        {linkContent}
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

        <a
          className={styles.cta}
          href={actionLinks.whatsappCommunity}
          {...externalAnchorProps(actionLinks.whatsappCommunity)}
        >
          <LinkIcon className={styles.linkIcon} name="whatsapp" />
          <span>Join community</span>
        </a>

        <button
          ref={menuButtonRef}
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
        ref={drawerRef}
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

        <a
          className={styles.drawerCta}
          href={actionLinks.whatsappCommunity}
          {...externalAnchorProps(actionLinks.whatsappCommunity)}
          onClick={() => setIsMenuOpen(false)}
        >
          <LinkIcon className={styles.linkIcon} name="whatsapp" />
          <span>Join community</span>
        </a>
      </aside>
    </header>
  );
}
