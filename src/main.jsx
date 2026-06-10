import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const contactEmail = 'kontakt@morgenhain-baugruppe.de';

const content = {
  de: {
    langCode: 'DE',
    menuLabel: 'Navigation öffnen',
    nav: [
      ['projekt', 'Projekt'],
      ['ansatz', 'Leitbild'],
      ['termine', 'Aktuelles'],
      ['kontakt', 'Kontakt'],
    ],
    footer: {
      title: 'Morgenhain Baugruppe',
      copyright: '© 2026 Morgenhain Baugruppe. Alle Rechte vorbehalten.',
      links: [
        ['kontakt', 'Kontakt'],
        ['datenschutz', 'Datenschutz'],
        ['impressum', 'Impressum'],
      ],
    },
    common: {
      skip: 'Zum Inhalt springen',
      imageAlt: {
        hero: 'Visualisierung des Projekts Morgenhain',
        introOne: 'Architektonische Referenz für Morgenhain',
        introTwo: 'Atmosphärische Freiraumreferenz für Morgenhain',
        bahlingen: 'Seniorenwohnanlage Bahlingen',
        care: 'Innen- oder Gemeinschaftsbereich einer Seniorenwohnanlage',
        idea: 'Freiraum und Gebäudeansicht als Projektidee',
        district: 'Visualisierung des neuen Stadtteils Dietenbach',
      },
    },
    start: {
      heroTitle: 'Morgenhain',
      heroSubtitle: 'Baugruppe',
      heroTagline: 'Seniorengerechtes und generationenübergreifendes Wohnen · Soziale Verantwortung\nNachhaltige Architektur in Freiburg-Dietenbach',
      introTitle: 'Wohnen, Pflege und Quartier in einem ruhigen Stadtbaustein.',
      introBody:
        'Morgenhain entwickelt für Freiburg-Dietenbach ein altersgerechtes Wohn- und Pflegeangebot mit professionellem Betrieb, grünen Freiräumen und klarer architektonischer Haltung. Das Projekt soll die regionale Versorgung stärken und zugleich den Anforderungen des neuen Stadtteils entsprechen.',
      statsTitle: 'Dietenbach in Zahlen',
      statsIntro:
        'Die folgenden Parameter aus der Stadtteilplanung setzen den Maßstab für Morgenhain: soziale Infrastruktur, kurze Wege, Grünräume und ein tragfähiges Wohnumfeld.',
      stats: [
        ['16000', 'Menschen', '/assets/Menschen.png'],
        ['3', 'Stadtbahn-Haltestellen', '/assets/Stadtbahn-Haltestellen.png'],
        ['22', 'Kitas und ein Schulcampus', '/assets/Kitas und ein Schulcampus.png'],
        ['3', 'Stadtteilparks', '/assets/Stadtteilparks.png'],
        ['6900', 'Wohnungen', '/assets/Wohnungen.png'],
      ],
      asbTitle: 'ASB als erfahrener Partner',
      asbBody:
        'Der ASB Baden-Württemberg steht für professionelle Altenhilfe mit Pflegeheimen, betreutem Wohnen, Tagespflege, Kurzzeitpflege, ambulanter Pflege und mobilen Diensten. Für Morgenhain ist diese Erfahrung wesentlich: Architektur, Alltag und Betrieb werden nicht getrennt gedacht, sondern gemeinsam entwickelt.',
      bahlingenTitle: 'Seniorwohnanlagen Bahlingen',
      bahlingenBody:
        'Mit Projekten wie dem Haus Riedlen in Bahlingen besteht ein konkreter Erfahrungsraum für die Zusammenarbeit mit ASB. Dort verbinden sich Pflege, betreutes Wohnen, Gemeinschaftsräume und ein geschützter Innenhof zu einer alltagstauglichen Wohn- und Versorgungsstruktur.',
      ideaTitle: 'Grundidee Morgenhain',
      ideaBody:
        'Morgenhain soll in Dietenbach kein isolierter Sonderbau sein, sondern ein lesbarer Teil des Quartiers. Geschützte Freiräume, barrierearme Wege, freundliche Fassaden und eine klare Adresse schaffen ein Haus, das Versorgung ermöglicht und Nachbarschaft stärkt.',
    },
    projekt: {
      eyebrow: 'Projekt',
      title: 'Ein sozialer Baustein für Freiburg-Dietenbach',
      intro:
        'Dietenbach steht für ein klimaangepasstes, inklusives Quartier mit kurzen Wegen, vielfältigen Wohnformen und einer starken sozialen Infrastruktur. Diese Haltung entspricht dem Ansatz von Morgenhain. Gerade in einem wachsenden Stadtteil braucht es nachhaltige Angebote für ältere Menschen, die Pflege, Selbstständigkeit und Teilhabe miteinander verbinden. Gemeinsam mit einem erfahrenen Partner wie dem ASB bringen wir dafür belastbare Erfahrung aus Planung und Betrieb ein.',
      sections: [
        ['Pflege, Tagesstruktur und altersgerechtes Wohnen', 'Morgenhain bewirbt sich um die Entwicklung eines gemischten Pflege- und Wohnangebots. Vorgesehen sind rund 70 stationäre Pflegeplätze, ergänzt durch eine Tagespflege beziehungsweise Tagesstätte sowie einen Anteil seniorengerechter Wohnungen. Die Nutzungen werden so verbunden, dass professionelle Versorgung, vertraute Tagesabläufe und Begegnung im Quartier selbstverständlich nebeneinander bestehen können.', '/assets/projekt-02.png', 'Belebte, grüne Quartiersstraße in Freiburg-Dietenbach'],
        ['Nachhaltigkeit, die technisch und sozial wirkt', 'Das Gebäude soll die ökologischen Ziele Dietenbachs konsequent aufnehmen: langlebige und freundlich gegliederte Fassaden, begrünte und solar nutzbare Dächer, klimaaktive Freiräume, Regenwasserrückhalt und barrierearme Wege. Nachhaltigkeit verstehen wir zugleich als soziale Aufgabe. Gute Orientierung, geschützte Außenbereiche, gemeinschaftliche Räume und anpassungsfähige Grundrisse schaffen langfristig Lebensqualität, Würde und Zugehörigkeit.', '/assets/projekt-03.png', 'Grüner Stadtteilpark mit altersgemischter Nachbarschaft in Freiburg-Dietenbach'],
      ],
      firstImageAlt: 'Luftbild der Planung für Freiburg-Dietenbach',
      galleryAlts: [
        'Photovoltaikmodule als Bestandteil einer Gebäudefassade',
        'Geschützter grüner Freiraum einer Wohnanlage',
        'Begrünte Wohnfassade mit solar genutztem Dach',
      ],
      galleryKeyword: 'Altersgerecht leben in nachhaltiger Architektur',
    },
    ansatz: {
      eyebrow: 'Leitbild',
      title: 'Planung aus Alltag, Pflege und Ort heraus',
      intro:
        'Die Qualität entscheidet sich an täglichen Wegen: vom Zimmer in den Hof, vom Eingang in den Gemeinschaftsbereich, vom Quartier zur Pflegeinfrastruktur.',
      values: [
        ['Pflegegerecht und nicht institutionell', 'Das Haus soll Unterstützung bieten, ohne eine klinische Atmosphäre zu erzeugen: übersichtlich, warm, würdevoll und gut auffindbar.'],
        ['Barrierefrei und orientierend', 'Dietenbach setzt auf Inklusion und kurze Wege. Morgenhain führt diese Haltung mit klaren Adressen, gut lesbaren Erschließungen und schwellenarmen Übergängen fort.'],
        ['Grün und klimaaktiv', 'Baumkonzept, Regenwasserrückhalt, verschattete Aufenthaltsbereiche, Dachbegrünung und mögliche Solarflächen werden als Teil des architektonischen Konzepts behandelt.'],
        ['Nachbarschaftlich eingebunden', 'Straßen und Plätze sollen Sozialräume sein. Das Projekt macht die Versorgung älterer Menschen im Quartier sichtbar und selbstverständlich.'],
      ],
    },
    termine: {
      eyebrow: 'Aktuelles',
      title: 'Nächste Abstimmungen',
      intro:
        'Die nächsten Schritte dienen der Abstimmung von Pflegebetrieb, Freiraum, Fassadenhaltung und Quartiersbezug im Rahmen der Dietenbach-Anforderungen.',
      events: [
        ['Konzeptabgleich', 'Sommer 2026', 'Abstimmung von Nutzung, Pflegebetrieb, Baufeldlogik und städtebaulichem Auftreten.'],
        ['Fachgespräch Betrieb', 'Herbst 2026', 'Vertiefung der betrieblichen Anforderungen mit ASB und Planungsbeteiligten.'],
        ['Quartiersdialog', 'Winter 2026', 'Vorstellung der sozialen und ökologischen Projektbausteine im Kontext Dietenbach.'],
      ],
    },
    kontakt: {
      eyebrow: 'Kontakt',
      title: 'KONTAKT FORMULAR',
      intro:
        'Haben Sie Interesse am Projekt? Lassen Sie uns reden.',
      name: 'Name',
      email: 'E-Mail',
      message: 'Nachricht',
      privacy: 'Indem Sie unten auf „Abschicken“ klicken, stimmen Sie zu, dass Morgenhain die oben angegebenen personenbezogenen Daten speichert und verarbeitet, um Ihr Anliegen zu bearbeiten.',
      submit: 'Einreichen',
      direct: 'Direkt schreiben',
      asideTitle: 'Kontaktweg',
      asideText: 'Das Formular speichert keine Daten. Es öffnet Ihr lokales E-Mail-Programm mit den eingegebenen Inhalten.',
    },
    datenschutz: {
      eyebrow: 'Datenschutz',
      title: 'Datenschutzhinweise',
      intro:
        'Diese statische Webseite speichert keine Formulardaten. Beim Absenden des Kontaktformulars wird Ihr lokales E-Mail-Programm mit den eingegebenen Inhalten geöffnet.',
      blocks: [
        ['Verantwortliche Stelle', 'Morgenhain Baugruppe, Freiburg im Breisgau. Die finale Anschrift und vertretungsberechtigte Person werden vor Veröffentlichung ergänzt.'],
        ['Kontaktaufnahme', 'Wenn Sie per E-Mail Kontakt aufnehmen, werden Ihre Angaben zur Bearbeitung der Anfrage verarbeitet. Eine Weitergabe erfolgt nur, soweit dies für das Projekt erforderlich ist.'],
        ['Hosting', 'Bei statischer Bereitstellung können durch den Hostinganbieter technische Zugriffsdaten verarbeitet werden. Details richten sich nach dem später gewählten Hosting.'],
      ],
    },
    impressum: {
      eyebrow: 'Impressum',
      title: 'Angaben gemäß § 5 TMG',
      intro:
        'Die endgültigen Impressumsdaten werden vor Veröffentlichung ergänzt. Der folgende Abschnitt ist ein Platzhalter für die Projektkommunikation.',
      blocks: [
        ['Projekt', 'Morgenhain Baugruppe Freiburg-Dietenbach'],
        ['Kontakt', contactEmail],
        ['Hinweis', 'Vertretungsberechtigte Personen, Anschrift, Registerangaben und Umsatzsteuerinformationen werden nach finaler Projektstruktur ergänzt.'],
      ],
    },
  },
  en: {
    langCode: 'EN',
    menuLabel: 'Open navigation',
    nav: [
      ['projekt', 'Project'],
      ['ansatz', 'Guiding Idea'],
      ['termine', 'Updates'],
      ['kontakt', 'Contact'],
    ],
    footer: {
      title: 'Morgenhain Baugruppe',
      copyright: '© 2026 Morgenhain Baugruppe. All rights reserved.',
      links: [
        ['kontakt', 'Contact'],
        ['datenschutz', 'Privacy'],
        ['impressum', 'Imprint'],
      ],
    },
    common: {
      skip: 'Skip to content',
      imageAlt: {
        hero: 'Visualisation of the Morgenhain project',
        introOne: 'Architectural reference for Morgenhain',
        introTwo: 'Open-space atmosphere reference for Morgenhain',
        bahlingen: 'Senior housing facility in Bahlingen',
        care: 'Interior or shared area of a senior housing facility',
        idea: 'Open space and building view as project idea',
        district: 'Visualisation of the new Dietenbach district',
      },
    },
    start: {
      heroTitle: 'Morgenhain',
      heroSubtitle: 'Baugruppe',
      heroTagline: 'Senior-friendly and intergenerational living · Social responsibility\nSustainable architecture in Freiburg-Dietenbach',
      introTitle: 'Housing, care and neighbourhood in one calm urban element.',
      introBody:
        'Morgenhain develops an age-friendly housing and care offer for Freiburg-Dietenbach with professional operation, green open spaces and a clear architectural attitude. The project strengthens regional care provision while responding to the requirements of the new district.',
      statsTitle: 'Dietenbach in figures',
      statsIntro:
        'These planning parameters set the frame for Morgenhain: social infrastructure, short routes, green spaces and a resilient residential environment.',
      stats: [
        ['16000', 'people', '/assets/Menschen.png'],
        ['3', 'tram stops', '/assets/Stadtbahn-Haltestellen.png'],
        ['22', 'daycare centres and one school campus', '/assets/Kitas und ein Schulcampus.png'],
        ['3', 'district parks', '/assets/Stadtteilparks.png'],
        ['6900', 'homes', '/assets/Wohnungen.png'],
      ],
      asbTitle: 'ASB as experienced partner',
      asbBody:
        'ASB Baden-Württemberg stands for professional elderly care with nursing homes, assisted living, day care, short-term care, ambulatory care and mobile services. For Morgenhain this experience is central: architecture, everyday life and operation are developed together.',
      bahlingenTitle: 'Senior housing Bahlingen',
      bahlingenBody:
        'Projects such as Haus Riedlen in Bahlingen provide concrete experience for the cooperation with ASB. Care, assisted living, shared rooms and a protected courtyard form a practical housing and support structure.',
      ideaTitle: 'Morgenhain guiding idea',
      ideaBody:
        'Morgenhain should not be an isolated special building in Dietenbach, but a legible part of the district. Protected open spaces, accessible routes, friendly facades and a clear address create a building that enables care and strengthens neighbourhood life.',
    },
    projekt: {
      eyebrow: 'Project',
      title: 'A social building block for Freiburg-Dietenbach',
      intro:
        'Dietenbach is conceived as a climate-conscious, inclusive district with short distances, diverse forms of housing and strong social infrastructure. This approach closely matches Morgenhain’s ambitions. A growing neighbourhood needs sustainable provision for older people that combines professional care, independence and participation. Together with an experienced partner such as ASB, we contribute proven expertise from both planning and operation.',
      sections: [
        ['Care, daytime support and age-friendly housing', 'Morgenhain is applying to develop a mixed care and residential programme. The concept provides approximately 70 residential care places, complemented by day care facilities and a proportion of age-friendly apartments. These uses will be closely connected so that professional support, familiar daily routines and encounters within the neighbourhood can coexist naturally.', '/assets/projekt-02.png', 'Lively green neighbourhood street in Freiburg-Dietenbach'],
        ['Sustainability with technical and social impact', 'The building will consistently reflect Dietenbach’s environmental goals: durable and welcoming facades, green roofs suitable for solar energy, climate-responsive open spaces, rainwater retention and accessible routes. At the same time, we understand sustainability as a social responsibility. Clear orientation, protected outdoor areas, shared spaces and adaptable floor plans support long-term quality of life, dignity and belonging.', '/assets/projekt-03.png', 'Green district park with an intergenerational neighbourhood in Freiburg-Dietenbach'],
      ],
      firstImageAlt: 'Aerial view of the Freiburg-Dietenbach masterplan',
      galleryAlts: [
        'Photovoltaic modules integrated into a building facade',
        'Protected green open space within a residential development',
        'Green residential facade with a solar roof',
      ],
      galleryKeyword: 'Age-friendly living in sustainable architecture',
    },
    ansatz: {
      eyebrow: 'Guiding Idea',
      title: 'Planning from everyday life, care and place',
      intro:
        'Quality is decided by daily routes: from room to courtyard, from entrance to shared area, from district to care infrastructure.',
      values: [
        ['Care-oriented, not institutional', 'The building should offer support without a clinical atmosphere: legible, warm, dignified and easy to find.'],
        ['Accessible and orienting', 'Dietenbach focuses on inclusion and short routes. Morgenhain continues this with clear addresses, readable circulation and low-threshold transitions.'],
        ['Green and climate-active', 'Tree concept, rainwater retention, shaded seating, green roofs and potential solar surfaces are treated as part of the architectural concept.'],
        ['Embedded in neighbourhood life', 'Streets and squares should become social spaces. The project makes care for older people visible and natural within the district.'],
      ],
    },
    termine: {
      eyebrow: 'Updates',
      title: 'Next coordination steps',
      intro:
        'The next steps coordinate care operation, open space, facade attitude and district connection within the Dietenbach requirements.',
      events: [
        ['Concept alignment', 'Summer 2026', 'Coordination of use, care operation, plot logic and urban presence.'],
        ['Operations workshop', 'Autumn 2026', 'Refinement of operating requirements with ASB and planning partners.'],
        ['District dialogue', 'Winter 2026', 'Presentation of social and ecological project elements in the Dietenbach context.'],
      ],
    },
    kontakt: {
      eyebrow: 'Contact',
      title: 'CONTACT FORM',
      intro:
        'Are you interested in the project? Let us talk.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      privacy: 'By clicking “Submit” below, you agree that Morgenhain stores and processes the personal data provided above in order to handle your request.',
      submit: 'Submit',
      direct: 'Write directly',
      asideTitle: 'Contact route',
      asideText: 'The form stores no data. It opens your local email client with the content you entered.',
    },
    datenschutz: {
      eyebrow: 'Privacy',
      title: 'Privacy notice',
      intro:
        'This static website does not store form data. Submitting the contact form opens your local email client with the content you entered.',
      blocks: [
        ['Responsible party', 'Morgenhain Baugruppe, Freiburg im Breisgau. The final address and authorised representative will be added before publication.'],
        ['Contact', 'If you contact us by email, your information is processed to handle the request. It is shared only where necessary for the project.'],
        ['Hosting', 'With static hosting, the hosting provider may process technical access data. Details depend on the hosting chosen later.'],
      ],
    },
    impressum: {
      eyebrow: 'Imprint',
      title: 'Legal information',
      intro:
        'The final imprint information will be added before publication. This section is a placeholder for project communication.',
      blocks: [
        ['Project', 'Morgenhain Baugruppe Freiburg-Dietenbach'],
        ['Contact', contactEmail],
        ['Notice', 'Authorised representatives, address, registry information and tax information will be added after the final project structure is confirmed.'],
      ],
    },
  },
};

function useRoute() {
  const read = () => window.location.hash.replace('#/', '') || 'start';
  const [route, setRouteState] = useState(read);

  useEffect(() => {
    const handleHash = () => setRouteState(read());
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const setRoute = (next) => {
    window.location.hash = `/${next}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return [route, setRoute];
}

function App() {
  const [lang, setLang] = useState('de');
  const [route, setRoute] = useRoute();
  const [showTop, setShowTop] = useState(false);
  const t = content[lang];
  const validRoute = ['start', ...t.nav.map(([id]) => id), 'datenschutz', 'impressum'].includes(route) ? route : 'start';
  const pageTitle = validRoute === 'start' ? 'Startseite' : [...t.nav, ...t.footer.links].find(([id]) => id === validRoute)?.[1];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = validRoute === 'start' ? 'Morgenhain Baugruppe' : `${pageTitle} | Morgenhain`;
  }, [lang, pageTitle, validRoute]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">{t.common.skip}</a>
      <Header t={t} route={validRoute} setRoute={setRoute} lang={lang} setLang={setLang} />
      <main id="main" tabIndex="-1">
        <div key={`${lang}-${validRoute}`} className="page-shell">
          {validRoute === 'start' && <Home t={t.start} common={t.common} />}
          {validRoute === 'projekt' && <Project t={t.projekt} />}
          {validRoute === 'ansatz' && <Approach t={t.ansatz} />}
          {validRoute === 'termine' && <Events t={t.termine} />}
          {validRoute === 'kontakt' && <Contact t={t.kontakt} lang={lang} common={t.common} />}
          {validRoute === 'datenschutz' && <TextPage t={t.datenschutz} />}
          {validRoute === 'impressum' && <TextPage t={t.impressum} />}
        </div>
      </main>
      <Footer t={t} setRoute={setRoute} />
      <button
        className={`to-top ${showTop ? 'visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <span aria-hidden="true" />
      </button>
    </>
  );
}

function Header({ t, route, setRoute, lang, setLang }) {
  const [open, setOpen] = useState(false);
  return (
    <header className={`site-header ${route === 'start' ? 'on-hero' : ''}`}>
      <button className="brand brand-outside" onClick={() => setRoute('start')} aria-label="Morgenhain home">
        <img src="/assets/morgenhain-logo-cropped.png" alt="Morgenhain" />
      </button>
      <div className="nav-shell">
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={t.menuLabel} aria-expanded={open}>
          <span />
          <span />
        </button>
        <nav className={open ? 'open' : ''} aria-label="Main navigation">
          {t.nav.map(([id, label]) => (
            <button
              key={id}
              className={route === id ? 'active' : ''}
              onClick={() => {
                setRoute(id);
                setOpen(false);
              }}
              aria-current={route === id ? 'page' : undefined}
            >
              {label}
            </button>
          ))}
        </nav>
        <button className="language" onClick={() => setLang(lang === 'de' ? 'en' : 'de')}>
          {t.langCode}
        </button>
      </div>
    </header>
  );
}

function Home({ t, common }) {
  return (
    <>
      <section className="home-hero">
        <img src="/assets/hero.png" alt={common.imageAlt.hero} />
        <div className="hero-shade" />
        <div className="home-hero-title">
          <h1>{t.heroTitle}</h1>
          <p>{t.heroSubtitle}</p>
        </div>
        <p className="home-hero-tagline">{t.heroTagline}</p>
      </section>

      <section className="home-intro-grid">
        <div className="home-intro-copy">
          <h2>{t.introTitle}</h2>
          <p>{t.introBody}</p>
        </div>
        <img src="/assets/home-08.jpg" alt={common.imageAlt.introOne} />
        <img src="/assets/home-02.jpg" alt={common.imageAlt.introTwo} />
      </section>

      <section className="stats-section">
        <div className="stats-heading">
          <h2>{t.statsTitle}</h2>
          <p>{t.statsIntro}</p>
        </div>
        <div className="stats-grid">
          {t.stats.map(([number, label, icon]) => (
            <article key={label}>
              <img src={icon} alt="" aria-hidden="true" />
              <strong>{number}</strong>
              <span>{label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="asb-story">
        <article className="story-row">
          <img src="/assets/home-04.jpg" alt={common.imageAlt.bahlingen} />
          <div className="story-copy">
            <img className="asb-logo" src="/assets/asb-logo.png" alt="ASB" />
            <h2>{t.asbTitle}</h2>
            <p>{t.asbBody}</p>
          </div>
        </article>
        <article className="story-row reverse">
          <div className="story-copy">
            <h2>{t.bahlingenTitle}</h2>
            <p>{t.bahlingenBody}</p>
          </div>
          <img src="/assets/home-05.jpg" alt={common.imageAlt.care} />
        </article>
        <article className="story-row">
          <img src="/assets/home-06.jpg" alt={common.imageAlt.idea} />
          <div className="story-copy">
            <h2>{t.ideaTitle}</h2>
            <p>{t.ideaBody}</p>
          </div>
        </article>
      </section>
    </>
  );
}

function Project({ t }) {
  return (
    <div className="project-page">
      <article className="project-story project-story--dark project-story--lead project-story--edge-left">
        <div className="project-story-inner">
          <h1 className="project-lead-title">{t.title}</h1>
          <figure className="project-story-media">
            <img src="/assets/projekt-01.png" alt={t.firstImageAlt} />
          </figure>
          <div className="project-story-copy">
            <p>{t.intro}</p>
          </div>
        </div>
      </article>

      {t.sections.map(([title, body, image, alt], index) => (
        <article
          className={`project-story project-story--light project-story--middle ${index === 0 ? 'project-story--reverse project-story--edge-right project-story--middle-first' : 'project-story--middle-second'}`}
          key={title}
        >
          <div className="project-story-inner">
            <figure className="project-story-media">
              <img src={image} alt={alt} loading="lazy" />
            </figure>
            <div className="project-story-copy">
              <h2>{title}</h2>
              <p>{body}</p>
            </div>
          </div>
        </article>
      ))}

      <section className="project-gallery" aria-label={t.eyebrow}>
        <p className="project-gallery-keyword">{t.galleryKeyword}</p>
        <div className="project-gallery-inner">
          {[
            ['/assets/projekt-04.jpg', t.galleryAlts[0]],
            ['/assets/projekt-05.png', t.galleryAlts[1]],
            ['/assets/projekt-06.jpg', t.galleryAlts[2]],
          ].map(([image, alt]) => (
            <figure key={image}>
              <img src={image} alt={alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}

function Approach({ t }) {
  return (
    <>
      <PageIntro eyebrow={t.eyebrow} title={t.title} intro={t.intro} />
      <section className="section value-grid">
        {t.values.map(([title, body]) => (
          <article key={title}>
            <h2>{title}</h2>
            <p>{body}</p>
          </article>
        ))}
      </section>
    </>
  );
}

function Events({ t }) {
  return (
    <>
      <PageIntro eyebrow={t.eyebrow} title={t.title} intro={t.intro} />
      <section className="section timeline">
        {t.events.map(([title, date, body]) => (
          <article key={title}>
            <time>{date}</time>
            <div>
              <h2>{title}</h2>
              <p>{body}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

function Contact({ t, lang }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const mailto = useMemo(() => {
    const subject = encodeURIComponent(lang === 'de' ? 'Kontakt zu Morgenhain' : 'Contact for Morgenhain');
    const body = encodeURIComponent(`${t.name}: ${form.name}\n${t.email}: ${form.email}\n\n${form.message}`);
    return `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  }, [form, lang, t.email, t.name]);

  const update = (key) => (event) => setForm({ ...form, [key]: event.target.value });

  return (
    <section className="contact-page">
      <aside className="contact-prompt">
        <p>{t.intro}</p>
      </aside>
      <div className="contact-form-area">
        <form
          className="contact-form"
          onSubmit={(event) => {
            event.preventDefault();
            window.location.href = mailto;
          }}
        >
          <h1>{t.title}</h1>
          <label htmlFor="contact-name">{t.name}</label>
          <input id="contact-name" value={form.name} onChange={update('name')} autoComplete="name" required />
          <label htmlFor="contact-email">{t.email}</label>
          <input id="contact-email" type="email" value={form.email} onChange={update('email')} autoComplete="email" required />
          <label htmlFor="contact-message">{t.message}</label>
          <textarea id="contact-message" rows="7" value={form.message} onChange={update('message')} required />
          <p className="privacy-note">{t.privacy}</p>
          <button className="button primary" type="submit">{t.submit}</button>
        </form>
      </div>
    </section>
  );
}

function TextPage({ t }) {
  return (
    <>
      <PageIntro eyebrow={t.eyebrow} title={t.title} intro={t.intro} />
      <section className="section legal">
        {t.blocks.map(([title, body]) => (
          <article key={title}>
            <h2>{title}</h2>
            <p>{body}</p>
          </article>
        ))}
      </section>
    </>
  );
}

function PageHero({ eyebrow, title, intro, image, alt }) {
  return (
    <section className="page-hero">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="lead">{intro}</p>
      </div>
      <img src={image} alt={alt} />
    </section>
  );
}

function PageIntro({ eyebrow, title, intro }) {
  return (
    <section className="page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="lead">{intro}</p>
    </section>
  );
}

function Footer({ t, setRoute }) {
  return (
    <footer className="site-footer">
      <div className="footer-rule" />
      <div className="footer-inner">
        <div>
          <h2>{t.footer.title}</h2>
          <p>{t.footer.copyright}</p>
        </div>
        <div className="footer-links" aria-label="Footer navigation">
          {t.footer.links.map(([id, label]) => (
            <button key={id} onClick={() => setRoute(id)}>{label}</button>
          ))}
        </div>
      </div>
    </footer>
  );
}

createRoot(document.getElementById('root')).render(<App />);
