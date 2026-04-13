import Link from "next/link";
import { externalAnchorProps, footerQuickLinks, socialLinks } from "../site-config";
import styles from "./site-chrome.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footerWrap}>
      <div className={styles.footerInner}>
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <span className={styles.pill}>WhatsApp-first community</span>
            <div>
              <h2>The Unfiltered IITian</h2>
              <p>
                Live courses, mentorship sessions, resume reviews, and practical student guidance
                from one active community.
              </p>
            </div>
          </div>

          <div className={styles.footerColumn}>
            <h3>Quick Links</h3>
            <ul className={styles.footerList}>
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link className={styles.footerLink} href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3>Social Links</h3>
            <ul className={styles.footerList}>
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    className={styles.socialLink}
                    href={link.href}
                    {...externalAnchorProps(link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <span>© 2026 The Unfiltered IITian. Built for students who want honest guidance.</span>
          <div className={styles.footerBottomLinks}>
            <Link className={styles.footerLink} href="/courses">
              Explore courses
            </Link>
            <Link className={styles.footerLink} href="/sessions">
              View sessions
            </Link>
            <Link className={styles.footerLink} href="/contact">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
