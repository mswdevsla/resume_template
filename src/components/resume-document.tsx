import type { Resume } from "@/content/resume";

function githubLabel(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="resume-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export function ResumeDocument({ resume }: { resume: Resume }) {
  return (
    <article className="resume-sheet">
      <header className="resume-header">
        <h1>{resume.name}</h1>
        <p className="resume-contact">
          <span>{resume.phone}</span>
          <span className="resume-dot" aria-hidden="true">
            ·
          </span>
          <a href={`mailto:${resume.email}`}>{resume.email}</a>
          <span className="resume-dot" aria-hidden="true">
            ·
          </span>
          <a href={resume.github}>{githubLabel(resume.github)}</a>
        </p>
      </header>

      {resume.competencies.length > 0 && (
        <Section title="핵심 역량">
          <ul className="competency-list">
            {resume.competencies.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>
      )}

      {resume.experiences.length > 0 && (
        <Section title="경력">
          <div className="resume-stack">
            {resume.experiences.map((experience) => (
              <article
                key={`${experience.company}-${experience.period}`}
                className="resume-block"
              >
                <div className="resume-row">
                  <h3>{experience.company}</h3>
                  <span className="resume-period">{experience.period}</span>
                </div>
                <p className="resume-role">{experience.role}</p>
                <ul className="resume-details">
                  {experience.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>
      )}

      {resume.skills.length > 0 && (
        <Section title="스킬">
          <ul className="skill-list">
            {resume.skills.map((group) => (
              <li key={group.name}>
                <span className="skill-name">{group.name}</span>
                <span>{group.items.join(", ")}</span>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {resume.education.length > 0 && (
        <Section title="학력">
          <div className="resume-stack">
            {resume.education.map((item) => (
              <article
                key={`${item.school}-${item.period}`}
                className="resume-block resume-row"
              >
                <p>
                  <span className="resume-strong">{item.school}</span>
                  <span className="resume-meta">
                    {" "}
                    · {item.major} {item.degree}
                  </span>
                </p>
                <span className="resume-period">{item.period}</span>
              </article>
            ))}
          </div>
        </Section>
      )}

      {resume.certifications.length > 0 && (
        <Section title="자격증">
          <div className="resume-stack">
            {resume.certifications.map((item) => (
              <article
                key={`${item.name}-${item.date}`}
                className="resume-block resume-row"
              >
                <p>
                  <span className="resume-strong">{item.name}</span>
                  <span className="resume-meta"> · {item.issuer}</span>
                </p>
                <span className="resume-period">{item.date}</span>
              </article>
            ))}
          </div>
        </Section>
      )}
    </article>
  );
}
