import Image from "next/image";
import styles from "./page.module.css";
import { courseTracks, externalAnchorProps, quickActions } from "./site-config";

const communityMetrics = [
  { value: "Live", label: "Courses and sessions around topics students care about" },
  { value: "1:1", label: "Resume reviews and mentorship support when you need direction" },
  { value: "TUI", label: "One WhatsApp-first community for learning, guidance, and action" },
];

const learningPillars = [
  {
    id: "01",
    title: "Live courses on focused topics",
    description:
      "Join topic-based live batches, workshops, and study rooms without digging through old messages.",
  },
  {
    id: "02",
    title: "Mentorship that answers real questions",
    description:
      "Use live sessions for planning, college decisions, internships, career direction, and honest feedback.",
  },
  {
    id: "03",
    title: "Resume and profile reviews",
    description:
      "Get practical review support for resumes, projects, LinkedIn profiles, and internship-ready positioning.",
  },
];

const heroHighlights = [
  {
    title: "Live courses",
    subtitle: "Topic-based cohorts, workshop alerts, notes, and study updates.",
    badge: "Courses",
  },
  {
    title: "Mentorship",
    subtitle: "Planning rooms for academics, college, career, and next steps.",
    badge: "Guidance",
  },
  {
    title: "Resume reviews",
    subtitle: "Direct profile feedback before applications and interviews.",
    badge: "Reviews",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>WhatsApp-first community for students and builders.</p>
            <h1 className={styles.title}>
              Join live courses, mentorship, and resume reviews with{" "}
              <span className={styles.accentText}>The Unfiltered IITian</span>
            </h1>
            <p className={styles.lede}>
              The Unfiltered IITian brings focused learning, practical guidance, and profile
              feedback into one active community. Use this site to find the right course, join a
              live session, request a resume review, or enter the WhatsApp community.
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
              <span className={styles.trustChip}>Live courses</span>
              <span className={styles.trustChip}>Mentorship</span>
              <span className={styles.trustChip}>Resume reviews</span>
              <span className={styles.trustChip}>Student community</span>
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
                <strong>Live learning, direct guidance, and community support in one place.</strong>
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
            <h2>A practical place for learning, mentorship, and career prep.</h2>
            <p>
              Students can move from interest to action quickly: join a batch, attend a live room,
              get resume feedback, or follow updates inside the WhatsApp community.
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
                <h3>One place to follow course links, session links, and review requests.</h3>
              </div>

              <div className={styles.boardGrid}>
                <article className={styles.boardCard}>
                  <span className={styles.boardCardLabel}>Live learning</span>
                  <strong>Topic courses and workshops</strong>
                  <p>Students can find active topics, join updates, and follow learning resources.</p>
                </article>
                <article className={styles.boardCard}>
                  <span className={styles.boardCardLabel}>Guidance</span>
                  <strong>Mentorship and reviews</strong>
                  <p>Career questions, resume feedback, and profile guidance get clear entry points.</p>
                </article>
              </div>
            </aside>
          </div>
        </section>

        <section className={styles.showcaseSection}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>What You Can Join</p>
            <h2>Live learning and honest guidance for students who want the next step.</h2>
            <p>
              The community is built around active sessions, useful resources, and direct feedback
              instead of scattered updates that disappear in chat.
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
                <span className={styles.showcasePill}>Live courses</span>
                <h3>Learn topics live with a community that keeps the momentum going.</h3>
                <p>
                  Course updates, session links, notes, and follow-up discussions stay connected so
                  students can focus on learning instead of hunting for links.
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
                <span className={styles.showcasePill}>Resume support</span>
                <p>Get direct feedback on resumes, projects, and profile positioning.</p>
              </div>
            </article>

            <article className={styles.showcaseNote}>
              <span className={styles.showcasePill}>Mentorship</span>
              <h3>Ask better questions, make clearer decisions, and stay accountable.</h3>
              <ul className={styles.pointList}>
                <li>Career and academic planning sessions.</li>
                <li>College, internship, project, and profile guidance.</li>
                <li>Live Q and A rooms for students who want practical direction.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className={styles.section} id="courses">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Live Courses</p>
            <h2>Choose the track that matches what you want to work on next.</h2>
            <p>
              Courses and sessions can link to WhatsApp invites, forms, calendars, payment pages,
              resources, or any place where you manage access.
            </p>
          </div>

          <div className={styles.courseGrid}>
            {courseTracks.map((course) => (
              <article className={styles.courseCard} key={course.title}>
                <div className={styles.courseMeta}>
                  <span className={styles.courseTag}>{course.tag}</span>
                  <span className={styles.courseAudience}>{course.audience}</span>
                </div>

                <h3>{course.title}</h3>
                <p className={styles.courseDescription}>{course.description}</p>

                <ul className={styles.pointList}>
                  {course.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className={styles.cardLinks}>
                  <a href={course.primaryHref} {...externalAnchorProps(course.primaryHref)}>
                    {course.primaryLabel}
                  </a>
                  <a href={course.secondaryHref} {...externalAnchorProps(course.secondaryHref)}>
                    {course.secondaryLabel}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} id="links">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Quick Links</p>
            <h2>Go straight to the community, courses, mentorship, or resume review.</h2>
            <p>
              These links are ready for your WhatsApp invite, course interest form, session booking
              form, resume review form, and resource vault.
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
              &quot;Good guidance should feel direct, practical, and easy to act on.&quot;
            </p>
            <p className={styles.quoteAuthor}>Built for The Unfiltered IITian</p>
          </div>

          <div className={styles.quoteChecklist}>
            <h3>What students can expect</h3>
            <p>
              Join the community to follow new live courses, attend mentorship rooms, request
              resume reviews, and stay close to useful student-focused opportunities.
            </p>
            <ul>
              <li>Live topic courses and workshops.</li>
              <li>Mentorship sessions for planning and career clarity.</li>
              <li>Resume and profile reviews before important applications.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
