import Image from "next/image";
import type { Metadata } from "next";
import { actionLinks, contactEmail, externalAnchorProps } from "../site-config";
import styles from "../inner-page.module.css";

const contactMethods = [
  {
    title: "Community WhatsApp",
    description:
      "Join The Unfiltered IITian community for course alerts, session updates, resources, and student discussions.",
    href: actionLinks.whatsappCommunity,
    label: "Join WhatsApp community",
  },
  {
    title: "Mentorship Sessions",
    description:
      "Use live mentorship for planning, college choices, career direction, internships, and next-step clarity.",
    href: actionLinks.mentorshipBooking,
    label: "Book mentorship",
  },
  {
    title: "Resume Reviews",
    description:
      "Request feedback on resume structure, project framing, achievements, and profile positioning.",
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
    "Contact The Unfiltered IITian for WhatsApp community access, mentorship, resume reviews, and live courses.",
};

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>Contact</span>
          <h1>Reach the right place for community access, mentorship, or resume review.</h1>
          <p>
            Join the WhatsApp community, ask about live courses, book mentorship, request a resume
            review, or send a longer question by email.
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
              <p>Choose the contact path that matches what you need right now.</p>
            </div>
          </div>

          <aside className={styles.heroPanel}>
            <h3>Best paths</h3>
            <ul>
              <li>WhatsApp for community access and fast updates.</li>
              <li>Mentorship for planning and decision support.</li>
              <li>Resume reviews for internships, projects, and placements.</li>
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
            <h3>Choose the fastest path for your question.</h3>
            <p>
              Course joins, live session timings, mentorship questions, and resume reviews each have
              a clear entry point so students do not need to chase links across old messages.
            </p>
          </article>

          <article className={styles.infoCard}>
            <span className={styles.miniPill}>For updates</span>
            <h3>Start with the WhatsApp community.</h3>
            <p>
              The community is the fastest place to follow new courses, live rooms, review slots,
              and practical student-focused resources from The Unfiltered IITian.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
