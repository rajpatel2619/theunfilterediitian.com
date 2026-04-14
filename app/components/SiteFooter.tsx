import Link from "next/link";
import {
  externalAnchorProps,
  footerBottomLinks,
  footerQuickLinks,
  socialLinks,
} from "../site-config";
import LinkIcon from "./LinkIcon";
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
                A cleaner front door for students who want useful links, honest direction, and
                active community support.
              </p>
            </div>
          </div>

          <div className={styles.footerColumn}>
            <h3>Quick Links</h3>
            <ul className={styles.footerList}>
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("http") ? (
                    <a
                      className={styles.footerLink}
                      href={link.href}
                      {...externalAnchorProps(link.href)}
                    >
                      <LinkIcon className={styles.linkIcon} name={link.icon} />
                      <span>{link.label}</span>
                    </a>
                  ) : (
                    <Link className={styles.footerLink} href={link.href}>
                      <LinkIcon className={styles.linkIcon} name={link.icon} />
                      <span>{link.label}</span>
                    </Link>
                  )}
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
                    <LinkIcon className={styles.linkIcon} name={link.icon} />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <span>© 2026 The Unfiltered IITian. Built for students who want honest guidance.</span>
          <div className={styles.footerBottomLinks}>
            {footerBottomLinks.map((link) => (
              link.href.startsWith("http") ? (
                <a
                  className={styles.footerLink}
                  href={link.href}
                  key={link.href}
                  {...externalAnchorProps(link.href)}
                >
                  <LinkIcon className={styles.linkIcon} name={link.icon} />
                  <span>{link.label}</span>
                </a>
              ) : (
                <Link className={styles.footerLink} href={link.href} key={link.href}>
                  <LinkIcon className={styles.linkIcon} name={link.icon} />
                  <span>{link.label}</span>
                </Link>
              )
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
