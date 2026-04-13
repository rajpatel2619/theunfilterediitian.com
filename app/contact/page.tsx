import Image from "next/image";
import type { Metadata } from "next";
import { actionLinks, contactEmail, externalAnchorProps } from "../site-config";
import styles from "../inner-page.module.css";

const contactMethods = [
  {
    title: "Community WhatsApp",
    description:
      "Use this when you want the main The Unfiltered IITian community space.",
    href: actionLinks.whatsappCommunity,
    label: "Join WhatsApp community",
  },
  {
    title: "Mentorship Sessions",
    description:
      "Use this when you need a planning conversation or decision support.",
    href: actionLinks.mentorshipBooking,
    label: "Book mentorship",
  },
  {
    title: "Resume Reviews",
    description:
      "Use this when you have a resume, project list, or profile draft ready for feedback.",
    href: actionLinks.resumeReviewBooking,
    label: "Request resume review",
  },
  {
    title: "Email",
    description:
      "Use email for longer questions, collaborations, partnerships, or parent-facing communication.",
    href: actionLinks.email,
    label: contactEmail,
  },
];

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact The Unfiltered IITian and open the right community, booking, review, or email link.",
};

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>Contact</span>
          <h1>Use the right link instead of waiting for someone to forward it.</h1>
          <p>
            This page is the action desk. Pick the closest route and keep the conversation moving.
          </p>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.heroImageFrame}>
            <Image
              src="/images/contact-desk.jpg"
              alt="A work desk with a laptop and phone for communication."
              fill
              className={styles.heroImage}
              sizes="(max-width: 1080px) 100vw, 42vw"
            />
            <div className={styles.heroImageNote}>
              <span className={styles.miniPill}>Support desk</span>
              <p>One page for links, forms, and longer messages.</p>
            </div>
          </div>

          <aside className={styles.heroPanel}>
            <h3>Best paths</h3>
            <ul>
              <li>Community link for public updates.</li>
              <li>Booking link for live support.</li>
              <li>Email for partnerships and longer notes.</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className={styles.contactLayout}>
        <div className={styles.contactColumn}>
          {contactMethods.map((method) => (
            <article className={styles.contactCard} key={method.title}>
              <span className={styles.tag}>Direct contact</span>
              <h3>{method.title}</h3>
              <p>{method.description}</p>
              <a
                className={styles.contactLink}
                href={method.href}
                {...externalAnchorProps(method.href)}
              >
                {method.label}
              </a>
            </article>
          ))}
        </div>

        <div className={styles.noteColumn}>
          <article className={styles.infoCard}>
            <span className={styles.status}>Response flow</span>
            <h3>Short questions belong in the active channel.</h3>
            <p>
              If the answer depends on timing, availability, or a fresh announcement, start with the
              main WhatsApp community.
            </p>
          </article>

          <article className={styles.infoCard}>
            <span className={styles.miniPill}>For updates</span>
            <h3>Longer questions deserve context.</h3>
            <p>
              Use email when the message needs details, attachments, or a proper written trail.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
