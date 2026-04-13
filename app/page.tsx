import Image from "next/image";
import styles from "./page.module.css";
import { actionLinks, externalAnchorProps, quickActions } from "./site-config";

const communityMetrics = [
  { value: "Live", label: "Topic cohorts, workshops, and open discussion rooms" },
  { value: "Direct", label: "Clear entry points for guidance and profile feedback" },
  { value: "TUI", label: "A WhatsApp-first home for student momentum" },
];

const learningPillars = [
  {
    id: "01",
    title: "Signal over noise",
    description:
      "Important links, updates, and next steps stay visible instead of disappearing inside a busy chat stream.",
  },
  {
    id: "02",
    title: "Live before passive",
    description:
      "The community is built around rooms where students can ask, respond, and make progress in real time.",
  },
  {
    id: "03",
    title: "Feedback loops",
    description:
      "Questions, projects, resumes, and decisions get treated as work in progress, not one-time announcements.",
  },
];

const heroHighlights = [
  {
    title: "Learn",
    subtitle: "Find topic cohorts and workshops when new batches open.",
    badge: "01",
  },
  {
    title: "Ask",
    subtitle: "Use live rooms when you need direction or a clearer choice.",
    badge: "02",
  },
  {
    title: "Improve",
    subtitle: "Turn rough profiles, projects, and plans into sharper versions.",
    badge: "03",
  },
];

const homePaths = [
  {
    title: "Browse courses",
    description: "Open Software Development, DSA, and Modern AI course groups.",
    href: "/courses",
    label: "View courses",
  },
  {
    title: "Find live rooms",
    description: "Check formats for office hours, open discussions, and review clinics.",
    href: "/sessions",
    label: "View sessions",
  },
  {
    title: "Join the community",
    description: "Open the main WhatsApp community for updates, questions, and next steps.",
    href: actionLinks.whatsappCommunity,
    label: "Join community",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>A focused student community with live rooms.</p>
            <h1 className={styles.title}>
              Move from scattered advice to steady progress with{" "}
              <span className={styles.accentText}>The Unfiltered IITian</span>
            </h1>
            <p className={styles.lede}>
              A cleaner entry point for students who want live learning, direct guidance, and
              useful feedback without chasing links across old messages.
            </p>

            <div className={styles.actions}>
              <a className={styles.primaryAction} href="#courses">
                Explore live courses
              </a>
              <a className={styles.secondaryAction} href="#links">
                Join the community
              </a>
            </div>

            <div className={styles.trustRow}>
              <span className={styles.trustChip}>Topic cohorts</span>
              <span className={styles.trustChip}>Office hours</span>
              <span className={styles.trustChip}>Profile feedback</span>
              <span className={styles.trustChip}>Resource links</span>
            </div>
          </div>

          <aside className={styles.heroVisual}>
            <div className={styles.heroImageFrame}>
              <Image
                src="/images/team-collab.jpg"
                alt="A collaborative team working together around laptops."
                fill
                priority
                className={styles.heroImage}
                sizes="(max-width: 1080px) 100vw, 45vw"
              />

              <div className={styles.heroImageOverlay}>
                <span className={styles.heroOverlayPill}>The Unfiltered IITian</span>
                <strong>One place to start, choose, ask, and keep moving.</strong>
              </div>
            </div>

            <div className={styles.heroHighlightGrid}>
              {heroHighlights.map((card) => (
                <article className={styles.heroHighlightCard} key={card.title}>
                  <span className={styles.heroHighlightBadge}>{card.badge}</span>
                  <h3>{card.title}</h3>
                  <p>{card.subtitle}</p>
                </article>
              ))}
            </div>
          </aside>
        </section>

        <section className={styles.metricsBand}>
          {communityMetrics.map((metric) => (
            <article className={styles.metricCard} key={metric.label}>
              <span className={styles.metricValue}>{metric.value}</span>
              <span className={styles.metricLabel}>{metric.label}</span>
            </article>
          ))}
        </section>

        <section className={styles.featureSection} id="community">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Community</p>
            <h2>Less link-hunting. More useful action.</h2>
            <p>
              The site keeps the public structure simple while the WhatsApp community stays active,
              fast, and conversational.
            </p>
          </div>

          <div className={styles.featureLayout}>
            <div className={styles.featureList}>
              {learningPillars.map((pillar) => (
                <article className={styles.featureCard} key={pillar.id}>
                  <span className={styles.featureId}>{pillar.id}</span>
                  <div>
                    <h3>{pillar.title}</h3>
                    <p>{pillar.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <aside className={styles.featureBoard}>
              <div className={styles.featureImageFrame}>
                <Image
                  src="/images/workspace-tools.jpg"
                  alt="A tidy study workspace with laptop, phone, and notebook."
                  fill
                  className={styles.featureImage}
                  sizes="(max-width: 1080px) 100vw, 42vw"
                />
              </div>

              <div className={styles.featureBoardHeader}>
                <span className={styles.boardEyebrow}>Community flow</span>
                <h3>Start on the website, continue the work inside the community.</h3>
              </div>

              <div className={styles.boardGrid}>
                <article className={styles.boardCard}>
                  <span className={styles.boardCardLabel}>Start</span>
                  <strong>Choose the right path</strong>
                  <p>Visitors can quickly pick courses, rooms, links, or community access.</p>
                </article>
                <article className={styles.boardCard}>
                  <span className={styles.boardCardLabel}>Continue</span>
                  <strong>Follow updates live</strong>
                  <p>Fresh announcements and discussions stay where students already spend time.</p>
                </article>
              </div>
            </aside>
          </div>
        </section>

        <section className={styles.showcaseSection}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Rhythm</p>
            <h2>Start clear, then continue where the conversation is alive.</h2>
            <p>
              The public page gives students direction, while the community carries the ongoing
              questions, updates, and follow-through.
            </p>
          </div>

          <div className={styles.showcaseGrid}>
            <article className={styles.showcasePrimary}>
              <div className={styles.showcaseImageWrap}>
                <Image
                  src="/images/community-hero.jpg"
                  alt="A student working on a laptop in a classroom setting."
                  fill
                  className={styles.showcaseImage}
                  sizes="(max-width: 1080px) 100vw, 50vw"
                />
              </div>
              <div className={styles.showcaseCopy}>
                <span className={styles.showcasePill}>Clarity</span>
                <h3>Students should know where to go before they enter the chat flow.</h3>
                <p>
                  The first visit should answer the basic question fast: learn, ask, improve, or
                  join.
                </p>
              </div>
            </article>

            <article className={styles.showcaseSecondary}>
              <div className={styles.showcaseImageWrap}>
                <Image
                  src="/images/contact-desk.jpg"
                  alt="A desk setup with a laptop and phone for communication and support."
                  fill
                  className={styles.showcaseImage}
                  sizes="(max-width: 1080px) 100vw, 24vw"
                />
              </div>
              <div className={styles.showcaseMiniCopy}>
                <span className={styles.showcasePill}>Links</span>
                <p>Common actions stay close, especially for students browsing from a phone.</p>
              </div>
            </article>

            <article className={styles.showcaseNote}>
              <span className={styles.showcasePill}>Structure</span>
              <h3>Each path supports a different student intent.</h3>
              <ul className={styles.pointList}>
                <li>Learn when a topic cohort is open.</li>
                <li>Ask when a decision needs context.</li>
                <li>Improve when a draft needs feedback.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className={styles.section} id="courses">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Start Here</p>
            <h2>Pick the page that matches what you came to do.</h2>
            <p>
              The homepage stays brief so students can quickly reach the course groups and active
              community links.
            </p>
          </div>

          <div className={styles.courseGrid}>
            {homePaths.map((path) => (
              <article className={styles.courseCard} key={path.title}>
                <div className={styles.courseMeta}>
                  <span className={styles.courseTag}>Next step</span>
                </div>

                <h3>{path.title}</h3>
                <p className={styles.courseDescription}>{path.description}</p>

                <div className={styles.cardLinks}>
                  <a href={path.href} {...externalAnchorProps(path.href)}>
                    {path.label}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} id="links">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Quick Links</p>
            <h2>Use these when you already know what you need.</h2>
            <p>
              Quick actions keep frequent tasks close without making every page say the same thing.
            </p>
          </div>

          <div className={styles.linkGrid}>
            {quickActions.map((link) => (
              <article className={styles.linkCard} key={link.title}>
                <span className={styles.linkPill}>Pinned access</span>
                <h3>{link.title}</h3>
                <p>{link.description}</p>
                <a href={link.href} {...externalAnchorProps(link.href)}>
                  {link.label}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.quoteSection}>
          <div className={styles.quoteCard}>
            <p className={styles.quoteText}>
              &quot;A useful community should help students choose the next action quickly.&quot;
            </p>
            <p className={styles.quoteAuthor}>Built for The Unfiltered IITian</p>
          </div>

          <div className={styles.quoteChecklist}>
            <h3>Choose the next action</h3>
            <p>
              Students should be able to land, understand the options, and open the right path in a
              few seconds.
            </p>
            <ul>
              <li>Open a learning track.</li>
              <li>Join a live room.</li>
              <li>Join the community.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
