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
      heroAlt: 'Städtebauliches Modell eines grünen, gemeinschaftlich geprägten Quartiers',
      primary: [
        {
          title: 'Alltag, Pflege und Quartier zusammendenken',
          body: 'Morgenhain verbindet seniorengerechtes Wohnen, professionelle Pflege und gemeinschaftliches Leben zu einem offenen Haus im Quartier. Überschaubare Wege, vertraute Räume und gut erreichbare Angebote unterstützen Selbstständigkeit und geben im Alltag Sicherheit.',
          image: '/assets/leitbild-02.png',
          alt: 'Gemeinschaftlicher Aufenthaltsraum für ältere Menschen',
        },
        {
          title: 'Soziale Vielfalt trägt das Quartier',
          body: 'Morgenhain stärkt ein generationenübergreifendes Umfeld, in dem Wohnen, Pflege, Teilhabe und nachbarschaftliche Angebote einander ergänzen. So entsteht eine dauerhaft tragfähige soziale Infrastruktur für Dietenbach.',
          image: '/assets/leitbild-03.png',
          alt: 'Bewohnerinnen bei gemeinschaftlicher Gartenarbeit',
        },
      ],
      summary: {
        title: 'Orientierung, Grün und gelebte Nachbarschaft',
        body: 'Klare Adressen, kurze Wege und klimaaktive Freiräume verbinden selbstbestimmtes Leben mit verlässlicher Unterstützung. Pflege und Gemeinschaft werden dabei als selbstverständlicher Teil des Quartiers sichtbar.',
        smallImageAlt: 'Geschützter gemeinschaftlicher Hof einer altersgerechten Wohnanlage',
        largeImageAlt: 'Aktive ältere Menschen in einem barrierefreien Außenraum',
      },
    },
    termine: {
      title: 'Bevorstehende Termine',
      moreTitle: 'Zeitplan 1. Vermarktungsabschnitt',
      imageAlt: 'Inklusive Gemeinschaft in Freiburg-Dietenbach',
      upcoming: [
        ['03', 'Jul 2026', '9:30–17:00 Uhr', 'Projektmanagement Baugemeinschaften', 'Seminarreihe in drei Modulen zwischen Juli und Oktober'],
        ['03', 'Jun 2026', '18:30 Uhr', 'Best Practice: Afterworkabende', 'Das Dreierspann aus Bauherr*in, Projektsteuerung und Architekt*in berichtet'],
      ],
      events: [
        ['08', 'Dez 2026', 'Gemeinderat Vergabeentscheidung'],
        ['18', 'Sep 2026', 'Frist zur Abgabe der finalen Bewerbung'],
        ['15', 'Jul – 29. Jul', 'Gespräche mit den Bewerbern'],
        ['12', 'Jun 2026', 'Frist zur Abgabe der Erstbewerbung'],
        ['02', 'Mär – 15. Mai', 'Zeitraum für Rückfragen'],
        ['27', 'Feb 2026', 'Start der Bewerbungsphase'],
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
      title: 'Datenschutzerklärung',
      sections: [
        {
          title: '1. Verantwortlicher',
          paragraphs: [
            'Verantwortlich für diese Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:',
            'Morgenhain Baugruppe\n[Adresse]',
          ],
          email: 'info@morgenhain-dietenbach.de',
        },
        {
          title: '2. Allgemeine Hinweise zur Datenverarbeitung',
          paragraphs: [
            'Der Schutz Ihrer persönlichen Daten ist uns wichtig. Personenbezogene Daten werden auf dieser Website nur im technisch notwendigen Umfang verarbeitet.',
            'Diese Website dient ausschließlich der allgemeinen Information über das Projekt „Morgenhain“.',
            'Es werden keine Benutzerkonten angelegt, keine Newsletter angeboten und keine personenbezogenen Daten aktiv über Formulare erhoben oder gespeichert.',
          ],
        },
        {
          title: '3. Hosting und Server-Logfiles',
          paragraphs: [
            'Beim Besuch dieser Website werden durch den Hosting-Anbieter automatisch technische Informationen erfasst und temporär in sogenannten Server-Logfiles gespeichert. Dies umfasst insbesondere:',
          ],
          list: ['IP-Adresse', 'Datum und Uhrzeit des Zugriffs', 'aufgerufene Seiten', 'Browsertyp und Browserversion', 'Betriebssystem', 'Referrer-URL'],
          after: [
            'Die Verarbeitung erfolgt zur Gewährleistung der technischen Sicherheit und Stabilität der Website.',
            'Eine Zusammenführung dieser Daten mit anderen Datenquellen erfolgt nicht.',
          ],
        },
        {
          title: '4. Kontaktaufnahme per E-Mail',
          paragraphs: [
            'Auf dieser Website besteht die Möglichkeit, über einen E-Mail-Link Kontakt aufzunehmen.',
            'Wenn Sie uns per E-Mail kontaktieren, werden die von Ihnen übermittelten personenbezogenen Daten (z. B. Name, E-Mail-Adresse und Inhalt der Nachricht) ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.',
            'Eine Weitergabe an Dritte erfolgt nicht.',
          ],
        },
        {
          title: '5. SSL- bzw. TLS-Verschlüsselung',
          paragraphs: [
            'Diese Website verwendet aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Dadurch können übertragene Inhalte nicht von Dritten mitgelesen werden.',
          ],
        },
        {
          title: '6. Ihre Rechte',
          paragraphs: ['Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf:'],
          list: ['Auskunft über Ihre gespeicherten Daten', 'Berichtigung unrichtiger Daten', 'Löschung Ihrer Daten', 'Einschränkung der Verarbeitung', 'Widerspruch gegen die Verarbeitung', 'Datenübertragbarkeit'],
          after: ['Außerdem steht Ihnen ein Beschwerderecht bei der zuständigen Datenschutzaufsichtsbehörde zu.'],
        },
        {
          title: '7. Änderungen dieser Datenschutzerklärung',
          paragraphs: [
            'Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, damit sie den aktuellen rechtlichen Anforderungen entspricht.',
          ],
        },
      ],
    },
    impressum: {
      title: 'Impressum',
      sections: [
        {
          title: 'Angaben gemäß § 5 TMG',
          paragraphs: ['Baugruppe Morgenhain (Initiative in Gründung)\nFreiburg im Breisgau, Deutschland'],
        },
        {
          title: 'Kontakt',
          email: 'info@morgenhain-dietenbach.de',
        },
        {
          title: 'Verantwortlich für den Inhalt',
          paragraphs: ['Baugruppe Morgenhain Initiative\n(Kontakt über oben genannte E-Mail-Adresse)'],
        },
        {
          title: 'Haftung für Inhalte',
          paragraphs: [
            'Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Eine Haftung für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte wird jedoch im Rahmen der Projektphase ausgeschlossen.',
          ],
        },
        {
          title: 'EU-Streitschlichtung',
          paragraphs: ['Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:'],
          link: {
            href: 'https://ec.europa.eu/consumers/odr/',
            label: 'https://ec.europa.eu/consumers/odr/',
          },
        },
        {
          title: 'Hinweis',
          paragraphs: ['Dieses Projekt befindet sich in der Gründungs- und Konzeptphase. Inhalte und Angaben können sich zukünftig ändern.'],
        },
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
      heroAlt: 'Urban model of a green district shaped by community',
      primary: [
        {
          title: 'Connecting everyday life, care and the district',
          body: 'Morgenhain brings together age-friendly housing, professional care and community life in an open house within the neighbourhood. Clear routes, familiar spaces and accessible services support independence and provide confidence in daily life.',
          image: '/assets/leitbild-02.png',
          alt: 'Shared lounge for older residents',
        },
        {
          title: 'Social diversity sustains the district',
          body: 'Morgenhain supports an intergenerational setting in which housing, care, participation and neighbourhood services complement one another. This creates resilient social infrastructure for Dietenbach.',
          image: '/assets/leitbild-03.png',
          alt: 'Residents gardening together',
        },
      ],
      summary: {
        title: 'Orientation, greenery and neighbourhood life',
        body: 'Clear addresses, short routes and climate-active open spaces connect independent living with reliable support. Care and community become a visible and natural part of the district.',
        smallImageAlt: 'Sheltered shared courtyard of an age-friendly residential development',
        largeImageAlt: 'Active older residents in an accessible outdoor space',
      },
    },
    termine: {
      title: 'Upcoming Dates',
      moreTitle: 'Timeline: First Marketing Phase',
      imageAlt: 'Inclusive community in Freiburg-Dietenbach',
      upcoming: [
        ['03', 'Jul 2026', '9:30 am–5:00 pm', 'Project management for building groups', 'A three-module seminar series between July and October'],
        ['03', 'Jun 2026', '6:30 pm', 'Best Practice: After-work evenings', 'The client, project manager and architect report on their joint experience'],
      ],
      events: [
        ['08', 'Dec 2026', 'Municipal council award decision'],
        ['18', 'Sep 2026', 'Deadline for the final application'],
        ['15', 'Jul – 29 Jul', 'Interviews with applicants'],
        ['12', 'Jun 2026', 'Deadline for the initial application'],
        ['02', 'Mar – 15 May', 'Period for questions'],
        ['27', 'Feb 2026', 'Start of the application phase'],
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
      title: 'Privacy Policy',
      sections: [
        {
          title: '1. Controller',
          paragraphs: [
            'The controller responsible for this website within the meaning of the General Data Protection Regulation (GDPR) is:',
            'Morgenhain Baugruppe\n[Address]',
          ],
          email: 'info@morgenhain-dietenbach.de',
        },
        {
          title: '2. General information on data processing',
          paragraphs: [
            'Protecting your personal data is important to us. Personal data is processed on this website only to the extent technically necessary.',
            'This website is used exclusively to provide general information about the “Morgenhain” project.',
            'No user accounts are created, no newsletters are offered and no personal data is actively collected or stored through forms.',
          ],
        },
        {
          title: '3. Hosting and server log files',
          paragraphs: [
            'When you visit this website, the hosting provider automatically records technical information and stores it temporarily in server log files. This includes in particular:',
          ],
          list: ['IP address', 'Date and time of access', 'Pages accessed', 'Browser type and browser version', 'Operating system', 'Referrer URL'],
          after: [
            'This processing is carried out to ensure the technical security and stability of the website.',
            'This data is not combined with data from other sources.',
          ],
        },
        {
          title: '4. Contact by email',
          paragraphs: [
            'This website provides the option of contacting us via an email link.',
            'If you contact us by email, the personal data you provide (such as your name, email address and message content) will be used exclusively to process your enquiry.',
            'This information will not be passed on to third parties.',
          ],
        },
        {
          title: '5. SSL or TLS encryption',
          paragraphs: [
            'For security reasons, this website uses SSL or TLS encryption. This prevents transmitted content from being read by third parties.',
          ],
        },
        {
          title: '6. Your rights',
          paragraphs: ['Within the scope of the applicable legal provisions, you have the right at any time to:'],
          list: ['Access your stored data', 'Rectify incorrect data', 'Have your data deleted', 'Restrict processing', 'Object to processing', 'Data portability'],
          after: ['You also have the right to lodge a complaint with the competent data protection supervisory authority.'],
        },
        {
          title: '7. Changes to this privacy policy',
          paragraphs: [
            'We reserve the right to update this privacy policy where necessary so that it continues to comply with current legal requirements.',
          ],
        },
      ],
    },
    impressum: {
      title: 'Imprint',
      sections: [
        {
          title: 'Information pursuant to Section 5 TMG',
          paragraphs: ['Baugruppe Morgenhain (initiative in formation)\nFreiburg im Breisgau, Germany'],
        },
        {
          title: 'Contact',
          email: 'info@morgenhain-dietenbach.de',
        },
        {
          title: 'Responsible for content',
          paragraphs: ['Baugruppe Morgenhain Initiative\n(Contact via the email address stated above)'],
        },
        {
          title: 'Liability for content',
          paragraphs: [
            'As a service provider, we are responsible for our own content on these pages in accordance with Section 7 (1) TMG and general legislation. During the project phase, however, no liability is accepted for the accuracy, completeness or current validity of the content.',
          ],
        },
        {
          title: 'EU dispute resolution',
          paragraphs: ['The European Commission provides a platform for online dispute resolution (ODR):'],
          link: {
            href: 'https://ec.europa.eu/consumers/odr/',
            label: 'https://ec.europa.eu/consumers/odr/',
          },
        },
        {
          title: 'Notice',
          paragraphs: ['This project is currently in its formation and concept phase. Content and information may change in the future.'],
        },
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
    <header className={`site-header ${route === 'start' || route === 'ansatz' ? 'on-hero' : ''}`}>
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
    <div className="leitbild-page">
      <figure className="leitbild-visual">
        <img src="/assets/leitbild-01.png" alt={t.heroAlt} />
      </figure>

      <div className="leitbild-content">
        <section className="leitbild-primary">
          <div className="leitbild-primary-grid">
            <div className="leitbild-main-copy leitbild-copy">
              <h1>{t.primary[0].title}</h1>
              <p>{t.primary[0].body}</p>
            </div>
            <img className="leitbild-primary-image" src={t.primary[1].image} alt={t.primary[1].alt} />
            <img className="leitbild-primary-small" src={t.primary[0].image} alt={t.primary[0].alt} />
            <div className="leitbild-orientation leitbild-copy">
              <h2>{t.summary.title}</h2>
              <p>{t.summary.body}</p>
            </div>
          </div>
        </section>

        <section className="leitbild-summary">
          <div className="leitbild-summary-grid">
            <img className="leitbild-summary-small" src="/assets/leitbild-04.jpg" alt={t.summary.smallImageAlt} />
            <img className="leitbild-summary-image" src="/assets/leitbild-05.jpg" alt={t.summary.largeImageAlt} />
            <div className="leitbild-social leitbild-copy">
              <h2>{t.primary[1].title}</h2>
              <p>{t.primary[1].body}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function Events({ t }) {
  return (
    <section className="events-page">
      <div className="events-content">
        <h1>{t.title}</h1>
        <section className="events-featured" aria-label={t.title}>
          {t.upcoming.map(([day, month, time, title, body]) => (
            <article className="event-row event-row--featured" key={`${day}-${month}-${title}`}>
              <time className="event-date">
                <strong>{day}</strong>
                <span>{month}</span>
              </time>
              <div className="event-copy">
                <p className="event-time">{time}</p>
                <h2>{title}</h2>
                <p>{body}</p>
              </div>
            </article>
          ))}
        </section>

        <h2 className="events-more-title">{t.moreTitle}</h2>
        <section className="events-list" aria-label={t.moreTitle}>
          {t.events.map(([day, month, title]) => (
            <article className="event-row" key={`${day}-${month}-${title}`}>
              <time className="event-date">
                <strong>{day}</strong>
                <span>{month}</span>
              </time>
              <h2>{title}</h2>
            </article>
          ))}
        </section>
      </div>
      <img className="events-illustration" src="/assets/Termine-02.png" alt={t.imageAlt} />
    </section>
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
    <section className="legal-page">
      <div className="legal-inner">
        <h1>{t.title}</h1>
        <div className="legal-sections">
          {t.sections.map((section) => (
            <article key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.email && <a href={`mailto:${section.email}`}>{section.email}</a>}
              {section.list && (
                <ul>
                  {section.list.map((item) => <li key={item}>{item}</li>)}
                </ul>
              )}
              {section.after?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.link && (
                <a href={section.link.href} target="_blank" rel="noreferrer">
                  {section.link.label}
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
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
