// All translatable copy, one block per language. Anything that is not text
// (URLs, email, tech chips) lives in site-config.ts.
import type { Lang } from './i18n';

export interface Content {
  meta: { title: string };
  ui: {
    menu: string;
    navProjects: string;
    navExperience: string;
    navAbout: string;
    seeWork: string;
    experience: string;
    contact: string;
    mainProject: string;
    visit: string;
    myRoles: string;
    stackEyebrow: string;
    stackTitle: string;
    leadershipEyebrow: string;
    seeExperience: string;
    projectsEyebrow: string;
    projectsTitle: string;
    projectsIntro: string;
    architectureLink: string;
    confidential: string;
    watchDemo: string;
    downloadCv: string;
    formTitle: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formSend: string;
    formSending: string;
    formSent: string;
    formError: string;
    screenshotsTitle: string;
    screenshotsNote: string;
    experienceEyebrow: string;
    experienceTitle: string;
    agileEyebrow: string;
    agileTitle: string;
    educationEyebrow: string;
    educationTitle: string;
    aboutEyebrow: string;
    contactTitle: string;
    teachingTitle: string;
    recognitionTitle: string;
    deliverablesTitle: string;
    unityDemoLink: string;
    notPushed: string;
    emailLabel: string;
    phoneLabel: string;
    footerSub: string;
    demosNote: string;
  };
  hero: { role: string; location: string; lead: string };
  stats: { value: string; label: string }[];
  skillGroups: { title: string; items: string[] }[];
  sghartoon: {
    tagline: string;
    summary: string;
    products: { name: string; tech: string; body: string }[];
    roles: string[];
    highlights: { title: string; body: string }[];
    shotCaptions: string[];
    projectKind: string;
    projectRoles: string[];
  };
  bio: { paragraphs: string[]; facts: { label: string; value: string }[] };
  leadership: { summary: string; points: { value: string; label: string }[] };
  experience: { title: string; org: string; period: string; points: string[]; stack?: string[] }[];
  education: { title: string; period: string }[];
  projects: {
    title: string;
    period: string;
    kind: string;
    summary: string;
    stack?: string[];
    confidential?: boolean;
    route?: string;
    linkLabel?: string;
  }[];
  agile: { title: string; body: string }[];
  teaching: string;
  recognition: { title: string; org: string; year: string }[];
}

const en: Content = {
  meta: { title: 'Saif Eddine Ben Achour — Full Stack Developer · Tech Lead' },
  ui: {
    menu: 'Menu',
    navProjects: 'Projects',
    navExperience: 'Experience',
    navAbout: 'About & contact',
    seeWork: 'See my work →',
    experience: 'Experience',
    contact: 'Contact',
    mainProject: 'Main project',
    visit: 'Visit sghartoon.com ↗',
    myRoles: 'My roles:',
    stackEyebrow: 'Stack',
    stackTitle: 'What I work with',
    leadershipEyebrow: 'Leadership',
    seeExperience: 'See the full experience →',
    projectsEyebrow: 'Projects',
    projectsTitle: 'Selected work',
    projectsIntro:
      'Client work under NDA is described without names or details. The Unity demos at the bottom are technical-test builds, with live WebGL and walkthrough videos.',
    architectureLink: 'Read the architecture notes for the Unity demos →',
    confidential: 'confidential',
    watchDemo: 'Watch the SgharToon demo ↗',
    downloadCv: 'Download CV (PDF) ↓',
    formTitle: 'Send a message',
    formName: 'Your name',
    formEmail: 'Your email',
    formMessage: 'Your message',
    formSend: 'Send message',
    formSending: 'Sending…',
    formSent: 'Thanks! Your message has been sent.',
    formError: 'Something went wrong. Please email me directly.',
    screenshotsTitle: 'Screenshots',
    screenshotsNote: 'Public pages of sghartoon.com. The therapist and parent spaces are private and not shown.',
    experienceEyebrow: 'Experience',
    experienceTitle: 'From product to leadership',
    agileEyebrow: 'Agile',
    agileTitle: 'How I run delivery',
    educationEyebrow: 'Education',
    educationTitle: 'Education',
    aboutEyebrow: 'About & contact',
    contactTitle: 'Contact',
    teachingTitle: 'Teaching',
    recognitionTitle: 'Recognition',
    deliverablesTitle: 'Unity technical-test deliverables',
    unityDemoLink: 'live demo and video →',
    notPushed: 'not yet pushed to GitHub',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    footerSub: 'Angular · React · .NET / C# · Unity — Tunis, Tunisia.',
    demosNote: 'This page is available in English only.',
  },
  hero: {
    role: 'Full Stack Developer · Tech Lead',
    location: 'Tunis, Tunisia',
    lead: '8 years building and leading the delivery of web and mobile products with Angular, React, .NET / C# and Unity. Team lead and tech lead.',
  },
  stats: [
    { value: '8 yrs', label: 'of C# / .NET' },
    { value: '2,400+', label: 'SgharToon users' },
    { value: '170+', label: 'modules shipped' },
    { value: '99.7%', label: 'measured uptime' },
  ],
  skillGroups: [
    { title: 'Front end', items: ['Angular', 'React', 'TypeScript'] },
    { title: 'Back end', items: ['C# / .NET', 'REST APIs', 'Node.js', 'PostgreSQL'] },
    { title: 'Unity & mobile', items: ['Unity (C#)', 'WebGL', 'Android (Java)', 'Socket.IO'] },
    {
      title: 'Leadership & method',
      items: ['Team lead', 'Tech lead', 'Agile', 'Code review', 'CI/CD', 'Docker', 'JIRA / ClickUp'],
    },
  ],
  sghartoon: {
    tagline: 'Online pre-diagnosis and therapy for children with learning disorders, built on video games.',
    summary:
      'A platform with three connected products: a Unity mobile app where children play the diagnostic and therapeutic games, a web tool for therapists, and a web app for parents. Available on the App Store, Google Play and the web at sghartoon.com, used by 2,400+ people and 60+ healthcare professionals.',
    products: [
      { name: 'Children’s app', tech: 'Unity', body: 'Video games for pre-diagnosis and therapy, on iOS, Android and WebGL.' },
      { name: 'Therapist tool', tech: 'Web', body: 'The web tool used by therapists, with real-time supervision.' },
      { name: 'Parent app', tech: 'Web', body: 'The web app used by parents.' },
    ],
    roles: ['Tech lead & co-founder', 'Tech lead · Unity', 'Second developer · .NET', 'Second developer · Angular'],
    highlights: [
      { title: 'Data-driven runtime', body: '170+ modules driven by remote JSON content, with no module-specific code.' },
      { title: 'Server-authoritative networking', body: 'Delta sync with full state-snapshot recovery on reconnection, and parallel therapist sessions with no cross-contamination.' },
      { title: 'Memory-constrained performance', body: 'Stable 60fps on low-end Android tablets, with centralised destruction pipelines and no GC stalls in the main loop.' },
      { title: 'Resilient services', body: 'Async REST layer with retry, timeout and fallback: 99.7% availability measured in production.' },
    ],
    shotCaptions: ['Home page', 'Parents page', 'Therapists page', 'B2B partnership page', 'Mobile view'],
    projectKind: 'Product · Unity + .NET + Angular',
    projectRoles: ['Tech lead & co-founder', 'Tech lead — Unity', 'Second developer — .NET and Angular'],
  },
  bio: {
    paragraphs: [
      'Full stack developer and tech lead with 8 years of experience, based in Tunis. I build and lead the delivery of web and mobile products across Angular, React, .NET / C# and Unity.',
      'I was tech lead and co-founder of SgharToon, a platform used in production by more than 2,400 people, and I now work as a freelance consultant on management and reporting tools. Alongside delivery, I mentor developers and have taught computer science students.',
    ],
    facts: [
      { label: 'Experience', value: '8 years' },
      { label: 'Location', value: 'Tunis, Tunisia' },
      { label: 'Languages', value: 'Arabic & French (native) · English (professional)' },
    ],
  },
  leadership: {
    summary: 'Team lead and tech lead across product, consulting and teaching work.',
    points: [
      { value: '~10', label: 'developers who joined the SgharToon team over the years' },
      { value: '~20', label: 'students supervised at ISAMM' },
    ],
  },
  experience: [
    {
      title: 'Freelance consultant & developer',
      org: 'Tunis',
      period: 'Jan 2026 – present',
      points: [
        'Management tool and Value Stream Mapping (VSM) dashboard for a bank — confidential client, React and .NET Core.',
        'Retail Flow (May – Jun 2026): industrial retail management prototype designed and built alone in six weeks.',
        'Adeeb (Aug 2026): illustrated children’s story editor for an Omani start-up, with story sharing.',
      ],
      stack: ['React', '.NET Core', 'PostgreSQL', 'Unity', 'Firebase'],
    },
    {
      title: 'Tech lead & co-founder',
      org: 'SgharToon',
      period: 'Oct 2017 – Dec 2025',
      points: [
        'Led a team of developers: task distribution, code reviews, mentoring. About ten people joined over the years.',
        'Technical direction since the start (roadmap, prioritisation) and a data-driven architecture: 170+ modules driven by remote JSON content.',
        'Server-authoritative networking with state-snapshot recovery, and a memory pipeline holding 60fps on low-end Android.',
        'Real-time Angular supervision dashboard for therapists, designed and integrated with the developer of that part.',
        'Asynchronous REST service layer with retry, timeout and fallback: 99.7% availability in production.',
        'Platform CI/CD. Docker on several projects, including Jitsi and an ERP installation.',
      ],
      stack: ['Unity', 'C#', '.NET', 'Angular', 'Socket.IO', 'Docker'],
    },
    {
      title: 'Trainer & head of training',
      org: 'WeCode Land',
      period: '2022 – 2023',
      points: ['Eight-week intensive Unity 2D programme for junior profiles, delivered with a working prototype.'],
    },
    {
      title: 'Lecturer & project supervisor',
      org: 'ISAMM, University of Manouba',
      period: '2022 – 2024',
      points: [
        'Lectures and labs in C#, Java, native Android and software architecture.',
        'Supervised about twenty students: engineering and bachelor final-year projects, summer internships.',
      ],
    },
    {
      title: 'C# developer — simulation & integration',
      org: 'Badiya — interactive WebGL application',
      period: '2022 – 2023',
      points: [
        'Configurable simulation engine: parameterisable behaviour and on-demand scenario generation behind an extensible API.',
        'Unity rendering pipeline tuned for a stable 60fps on mid-range browsers, plus a C#–JavaScript bridge to the web layer.',
      ],
      stack: ['Unity', 'WebGL', 'C#', 'JavaScript'],
    },
    {
      title: 'Unity developer — virtual visit for a digital fair',
      org: 'Team of three with a 3D designer and a web developer',
      period: '2022 · 4 months',
      points: ['Sole Unity developer: designed and built the interactive visit experience.'],
      stack: ['Unity', 'C#'],
    },
    {
      title: 'Developer — industrial quality-control solution',
      org: 'Deployed at the client',
      period: '2019 – 2022',
      points: [
        '3D visualization in Unity WebGL: loading CAD models (STP), full camera navigation, and geometric annotations (points, lines, polygons) linked to business indicators.',
        'Latest version delivered in 2022.',
      ],
      stack: ['Unity', 'WebGL', 'C#', 'CAD'],
    },
  ],
  education: [
    { title: 'Engineering degree (Bac+5) — Digital Imaging & Virtual Reality, ISAMM', period: '2015 – 2018' },
    { title: 'Bachelor’s in Multimedia Computer Science, ISAMM', period: '2012 – 2015' },
  ],
  projects: [
    {
      title: 'SgharToon',
      period: '2017 – 2025',
      kind: 'Product · Unity + .NET + Angular',
      summary:
        'Online pre-diagnosis and therapy for children with learning disorders: a Unity mobile app, a therapist tool and a parent app, in production for 2,400+ users.',
      stack: ['Unity', 'C#', '.NET', 'Angular'],
    },
    {
      title: 'Management tool & VSM dashboard',
      period: '2026',
      kind: 'Consulting · Banking',
      summary:
        'A management tool and a Value Stream Mapping dashboard for a bank, with tracking and reporting. The client and content are confidential, so no details are shown here.',
      stack: ['React', '.NET Core'],
      confidential: true,
    },
    {
      title: 'Retail Flow',
      period: 'May – Jun 2026',
      kind: 'Consulting · Industrial retail',
      summary: 'A management prototype for industrial retail, designed and built alone in six weeks. The client is confidential.',
      stack: ['React', '.NET Core', 'PostgreSQL'],
      confidential: true,
    },
    {
      title: 'Industrial quality-control — 3D viewer',
      period: '2019 – 2022',
      kind: 'Industrial software · Unity WebGL',
      summary:
        'CAD (STP) models loaded in the browser, with camera navigation, geometric annotations and indicator flags placed on the model surface.',
      stack: ['Unity', 'WebGL', 'C#'],
    },
    {
      title: 'Badiya',
      period: '2022 – 2023',
      kind: 'Unity WebGL',
      summary: 'An interactive WebGL application with a configurable simulation engine and a C#–JavaScript bridge.',
      stack: ['Unity', 'WebGL', 'C#', 'JavaScript'],
    },
    {
      title: 'Virtual visit for a digital fair',
      period: '2022',
      kind: 'Unity',
      summary: 'An interactive virtual visit built as the sole Unity developer in a team of three.',
      stack: ['Unity', 'C#'],
    },
    {
      title: 'StoryStudio — Adeeb',
      period: 'Aug 2026',
      kind: 'Unity WebGL · Firebase',
      summary:
        'An illustrated story editor for young children: add pages, choose backgrounds, place, move, rotate and resize elements, write the text, and share the stories. Live build and walkthrough video included.',
      stack: ['Unity', 'C#', 'Firebase'],
      route: '/task-1-story-creation',
      linkLabel: 'Open the demo →',
    },
    {
      title: 'Search & Content Discovery',
      period: 'Technical test',
      kind: 'Unity WebGL · Firebase',
      summary: 'Full-text search over a Firebase catalog with unstructured metadata parsing. Live build and walkthrough video included.',
      stack: ['Unity', 'C#', 'Firebase'],
      route: '/task-2-search',
      linkLabel: 'Open the demo →',
    },
  ],
  agile: [
    {
      title: 'Agile delivery at SgharToon',
      body: 'Roadmap and prioritisation owned by the tech lead, work split across the team, tracked in ClickUp and JIRA, with code reviews on every change.',
    },
    { title: 'Continuous delivery', body: 'CI/CD on the platform and production supervision, so changes reach users in small, safe steps.' },
    { title: 'Mentoring', body: 'Mentoring developers on the team and supervising students and junior trainees.' },
  ],
  teaching: 'Lecturer at ISAMM (2022 – 2024): C#, Java, native Android and software architecture, supervising about 20 students. Unity 2D trainer at WeCode Land (2022 – 2023).',
  recognition: [
    { title: 'Google for Startups', org: 'Tunisia accelerator programme', year: '2022' },
    { title: 'Westerwelle Foundation', org: 'Berlin Young Founders fellowship', year: '2024' },
    { title: 'LEAP Riyadh', org: 'Selected exhibitor', year: '2025' },
    { title: 'Soft Landing Marseille', org: 'French government-backed relocation programme', year: '2025' },
  ],
};

const fr: Content = {
  meta: { title: 'Saif Eddine Ben Achour — Développeur Full Stack · Tech Lead' },
  ui: {
    menu: 'Menu',
    navProjects: 'Projets',
    navExperience: 'Expérience',
    navAbout: 'À propos & contact',
    seeWork: 'Voir mes travaux →',
    experience: 'Expérience',
    contact: 'Me contacter',
    mainProject: 'Projet principal',
    visit: 'Visiter sghartoon.com ↗',
    myRoles: 'Mes rôles :',
    stackEyebrow: 'Stack',
    stackTitle: 'Avec quoi je travaille',
    leadershipEyebrow: 'Leadership',
    seeExperience: 'Voir toute l’expérience →',
    projectsEyebrow: 'Projets',
    projectsTitle: 'Réalisations choisies',
    projectsIntro:
      'Les missions sous NDA sont décrites sans nom ni détail. Les démos Unity en bas de page sont des tests techniques, avec build WebGL en ligne et vidéo de présentation.',
    architectureLink: 'Lire les notes d’architecture des démos Unity →',
    confidential: 'confidentiel',
    watchDemo: 'Voir la démo SgharToon ↗',
    downloadCv: 'Télécharger le CV (PDF) ↓',
    formTitle: 'Envoyer un message',
    formName: 'Votre nom',
    formEmail: 'Votre email',
    formMessage: 'Votre message',
    formSend: 'Envoyer',
    formSending: 'Envoi…',
    formSent: 'Merci ! Votre message a bien été envoyé.',
    formError: 'Une erreur est survenue. Écrivez-moi directement par email.',
    screenshotsTitle: 'Captures d’écran',
    screenshotsNote: 'Pages publiques de sghartoon.com. Les espaces thérapeute et parent sont privés et ne sont pas montrés.',
    experienceEyebrow: 'Expérience',
    experienceTitle: 'Du produit au leadership',
    agileEyebrow: 'Agile',
    agileTitle: 'Ma façon de piloter la livraison',
    educationEyebrow: 'Formation',
    educationTitle: 'Formation',
    aboutEyebrow: 'À propos & contact',
    contactTitle: 'Contact',
    teachingTitle: 'Enseignement',
    recognitionTitle: 'Distinctions',
    deliverablesTitle: 'Livrables des tests techniques Unity',
    unityDemoLink: 'démo en ligne et vidéo →',
    notPushed: 'pas encore publié sur GitHub',
    emailLabel: 'Email',
    phoneLabel: 'Téléphone',
    footerSub: 'Angular · React · .NET / C# · Unity — Tunis, Tunisie.',
    demosNote: 'Cette page est disponible en anglais uniquement.',
  },
  hero: {
    role: 'Développeur Full Stack · Tech Lead',
    location: 'Tunis, Tunisie',
    lead: '8 ans à concevoir des produits web et mobile et à piloter leur livraison avec Angular, React, .NET / C# et Unity. Team lead et tech lead.',
  },
  stats: [
    { value: '8 ans', label: 'de C# / .NET' },
    { value: '2 400+', label: 'utilisateurs SgharToon' },
    { value: '170+', label: 'modules livrés' },
    { value: '99,7 %', label: 'de disponibilité mesurée' },
  ],
  skillGroups: [
    { title: 'Front end', items: ['Angular', 'React', 'TypeScript'] },
    { title: 'Back end', items: ['C# / .NET', 'API REST', 'Node.js', 'PostgreSQL'] },
    { title: 'Unity & mobile', items: ['Unity (C#)', 'WebGL', 'Android (Java)', 'Socket.IO'] },
    {
      title: 'Leadership & méthode',
      items: ['Team lead', 'Tech lead', 'Agile', 'Revues de code', 'CI/CD', 'Docker', 'JIRA / ClickUp'],
    },
  ],
  sghartoon: {
    tagline: 'Pré-diagnostic et thérapie en ligne pour les enfants ayant des troubles d’apprentissage, à base de jeux vidéo.',
    summary:
      'Une plateforme de trois produits connectés : une application mobile Unity où les enfants jouent aux jeux de diagnostic et de thérapie, un outil web pour les thérapeutes et une application web pour les parents. Disponible sur l’App Store, Google Play et le web sur sghartoon.com, utilisée par plus de 2 400 personnes et plus de 60 professionnels de santé.',
    products: [
      { name: 'Application enfants', tech: 'Unity', body: 'Jeux vidéo de pré-diagnostic et de thérapie, sur iOS, Android et WebGL.' },
      { name: 'Outil thérapeutes', tech: 'Web', body: 'L’outil web des thérapeutes, avec supervision en temps réel.' },
      { name: 'Application parents', tech: 'Web', body: 'L’application web des parents.' },
    ],
    roles: ['Tech lead & co-fondateur', 'Tech lead · Unity', '2ᵉ développeur · .NET', '2ᵉ développeur · Angular'],
    highlights: [
      { title: 'Runtime orienté données', body: 'Plus de 170 modules pilotés par du contenu JSON distant, sans code spécifique par module.' },
      { title: 'Réseau server-authoritative', body: 'Synchronisation delta avec reprise complète par snapshot à la reconnexion, et sessions de thérapeutes parallèles sans contamination.' },
      { title: 'Performance à mémoire contrainte', body: '60 fps stables sur tablettes Android d’entrée de gamme, avec pipelines de destruction centralisés et aucun gel du GC en boucle principale.' },
      { title: 'Services résilients', body: 'Couche REST asynchrone avec reprise sur erreur, délai d’attente et repli : 99,7 % de disponibilité mesurée en production.' },
    ],
    shotCaptions: ['Page d’accueil', 'Page parents', 'Page thérapeutes', 'Page partenariat B2B', 'Vue mobile'],
    projectKind: 'Produit · Unity + .NET + Angular',
    projectRoles: ['Tech lead & co-fondateur', 'Tech lead — Unity', '2ᵉ développeur — .NET et Angular'],
  },
  bio: {
    paragraphs: [
      'Développeur full stack et tech lead avec 8 ans d’expérience, basé à Tunis. Je conçois des produits web et mobile et pilote leur livraison avec Angular, React, .NET / C# et Unity.',
      'J’ai été tech lead et co-fondateur de SgharToon, une plateforme utilisée en production par plus de 2 400 personnes, et je travaille aujourd’hui comme consultant freelance sur des outils de gestion et de reporting. En parallèle de la livraison, j’accompagne des développeurs et j’ai enseigné à des étudiants en informatique.',
    ],
    facts: [
      { label: 'Expérience', value: '8 ans' },
      { label: 'Localisation', value: 'Tunis, Tunisie' },
      { label: 'Langues', value: 'Arabe & français (natifs) · anglais (professionnel)' },
    ],
  },
  leadership: {
    summary: 'Team lead et tech lead, en produit, en conseil et en enseignement.',
    points: [
      { value: '~10', label: 'développeurs ayant rejoint l’équipe SgharToon au fil des années' },
      { value: '~20', label: 'étudiants encadrés à l’ISAMM' },
    ],
  },
  experience: [
    {
      title: 'Consultant et développeur freelance',
      org: 'Tunis',
      period: 'Janv. 2026 – présent',
      points: [
        'Outil de gestion et tableau de bord Value Stream Mapping (VSM) pour une banque — client confidentiel, React et .NET Core.',
        'Retail Flow (mai – juin 2026) : prototype de gestion pour le retail industriel, conçu et réalisé seul en six semaines.',
        'Adeeb (août 2026) : éditeur d’histoires illustrées pour enfants, pour une startup omanaise, avec partage des histoires.',
      ],
      stack: ['React', '.NET Core', 'PostgreSQL', 'Unity', 'Firebase'],
    },
    {
      title: 'Tech lead & co-fondateur',
      org: 'SgharToon',
      period: 'Oct. 2017 – déc. 2025',
      points: [
        'Encadrement d’une équipe de développeurs : répartition des tâches, revues de code, mentorat. Une dizaine de profils intégrés au fil des années.',
        'Direction technique depuis la création (roadmap, priorisation) et architecture orientée données : plus de 170 modules pilotés par du contenu JSON distant.',
        'Réseau server-authoritative avec reprise par snapshot, et pipeline mémoire tenant 60 fps sur Android d’entrée de gamme.',
        'Tableau de bord Angular de supervision en temps réel pour les thérapeutes, conçu et intégré avec le développeur de cette partie.',
        'Couche de services REST asynchrones avec reprise sur erreur, délai d’attente et repli : 99,7 % de disponibilité en production.',
        'CI/CD de la plateforme. Docker sur plusieurs projets, dont l’installation de Jitsi et d’un ERP.',
      ],
      stack: ['Unity', 'C#', '.NET', 'Angular', 'Socket.IO', 'Docker'],
    },
    {
      title: 'Formateur & responsable pédagogique',
      org: 'WeCode Land',
      period: '2022 – 2023',
      points: ['Parcours intensif Unity 2D de huit semaines pour profils juniors, livré avec un prototype fonctionnel.'],
    },
    {
      title: 'Enseignant & encadrant de projets',
      org: 'ISAMM, Université de la Manouba',
      period: '2022 – 2024',
      points: [
        'Cours et travaux pratiques en C#, Java, Android natif et architecture logicielle.',
        'Environ vingt étudiants encadrés : projets de fin d’études en ingénierie et en licence, stages d’été.',
      ],
    },
    {
      title: 'Développeur C# — simulation & intégration',
      org: 'Badiya — application WebGL interactive',
      period: '2022 – 2023',
      points: [
        'Moteur de simulation configurable : comportement paramétrable et génération de scénarios à la demande derrière une API extensible.',
        'Pipeline de rendu Unity optimisé pour 60 fps stables sur navigateurs de milieu de gamme, et pont C#–JavaScript avec la couche web.',
      ],
      stack: ['Unity', 'WebGL', 'C#', 'JavaScript'],
    },
    {
      title: 'Développeur Unity — visite virtuelle pour une foire numérique',
      org: 'Équipe de trois avec un designer 3D et un développeur web',
      period: '2022 · 4 mois',
      points: ['Seul développeur Unity : conception et développement de l’expérience de visite interactive.'],
      stack: ['Unity', 'C#'],
    },
    {
      title: 'Développeur — solution de contrôle qualité industriel',
      org: 'Déployée chez le client',
      period: '2019 – 2022',
      points: [
        'Visualisation 3D en Unity WebGL : chargement de modèles CAO (STP), navigation caméra complète et annotations géométriques (points, lignes, polygones) reliées à des indicateurs métier.',
        'Dernière version livrée en 2022.',
      ],
      stack: ['Unity', 'WebGL', 'C#', 'CAO'],
    },
  ],
  education: [
    { title: 'Diplôme d’ingénieur (Bac+5) — Imagerie numérique & réalité virtuelle, ISAMM', period: '2015 – 2018' },
    { title: 'Licence en informatique multimédia, ISAMM', period: '2012 – 2015' },
  ],
  projects: [
    {
      title: 'SgharToon',
      period: '2017 – 2025',
      kind: 'Produit · Unity + .NET + Angular',
      summary:
        'Pré-diagnostic et thérapie en ligne pour les enfants ayant des troubles d’apprentissage : une application mobile Unity, un outil thérapeutes et une application parents, en production pour plus de 2 400 utilisateurs.',
      stack: ['Unity', 'C#', '.NET', 'Angular'],
    },
    {
      title: 'Outil de gestion & tableau de bord VSM',
      period: '2026',
      kind: 'Conseil · Banque',
      summary:
        'Un outil de gestion et un tableau de bord Value Stream Mapping pour une banque, avec suivi et reporting. Le client et le contenu sont confidentiels : aucun détail n’est montré ici.',
      stack: ['React', '.NET Core'],
      confidential: true,
    },
    {
      title: 'Retail Flow',
      period: 'Mai – juin 2026',
      kind: 'Conseil · Retail industriel',
      summary: 'Un prototype de gestion pour le retail industriel, conçu et réalisé seul en six semaines. Le client est confidentiel.',
      stack: ['React', '.NET Core', 'PostgreSQL'],
      confidential: true,
    },
    {
      title: 'Contrôle qualité industriel — visionneuse 3D',
      period: '2019 – 2022',
      kind: 'Logiciel industriel · Unity WebGL',
      summary:
        'Modèles CAO (STP) chargés dans le navigateur, avec navigation caméra, annotations géométriques et repères d’indicateurs posés sur la surface du modèle.',
      stack: ['Unity', 'WebGL', 'C#'],
    },
    {
      title: 'Badiya',
      period: '2022 – 2023',
      kind: 'Unity WebGL',
      summary: 'Une application WebGL interactive avec un moteur de simulation configurable et un pont C#–JavaScript.',
      stack: ['Unity', 'WebGL', 'C#', 'JavaScript'],
    },
    {
      title: 'Visite virtuelle pour une foire numérique',
      period: '2022',
      kind: 'Unity',
      summary: 'Une visite virtuelle interactive, réalisée comme seul développeur Unity dans une équipe de trois.',
      stack: ['Unity', 'C#'],
    },
    {
      title: 'StoryStudio — Adeeb',
      period: 'Août 2026',
      kind: 'Unity WebGL · Firebase',
      summary:
        'Un éditeur d’histoires illustrées pour jeunes enfants : ajouter des pages, choisir le fond, placer, déplacer, faire pivoter et redimensionner les éléments, saisir le texte et partager les histoires. Build en ligne et vidéo de présentation inclus.',
      stack: ['Unity', 'C#', 'Firebase'],
      route: '/task-1-story-creation',
      linkLabel: 'Ouvrir la démo →',
    },
    {
      title: 'Recherche & découverte de contenu',
      period: 'Test technique',
      kind: 'Unity WebGL · Firebase',
      summary: 'Recherche plein texte sur un catalogue Firebase avec analyse de métadonnées non structurées. Build en ligne et vidéo de présentation inclus.',
      stack: ['Unity', 'C#', 'Firebase'],
      route: '/task-2-search',
      linkLabel: 'Ouvrir la démo →',
    },
  ],
  agile: [
    {
      title: 'Livraison agile chez SgharToon',
      body: 'Roadmap et priorisation portées par le tech lead, travail réparti dans l’équipe, suivi dans ClickUp et JIRA, avec revue de code sur chaque changement.',
    },
    { title: 'Livraison continue', body: 'CI/CD sur la plateforme et supervision de la production : les changements arrivent chez les utilisateurs par petites étapes sûres.' },
    { title: 'Mentorat', body: 'Accompagnement des développeurs de l’équipe et encadrement d’étudiants et de stagiaires juniors.' },
  ],
  teaching: 'Enseignant à l’ISAMM (2022 – 2024) : C#, Java, Android natif et architecture logicielle, avec environ 20 étudiants encadrés. Formateur Unity 2D chez WeCode Land (2022 – 2023).',
  recognition: [
    { title: 'Google for Startups', org: 'Programme d’accélération Tunisie', year: '2022' },
    { title: 'Westerwelle Foundation', org: 'Bourse Berlin Young Founders', year: '2024' },
    { title: 'LEAP Riyadh', org: 'Exposant sélectionné', year: '2025' },
    { title: 'Soft Landing Marseille', org: 'Programme de relocalisation soutenu par l’État français', year: '2025' },
  ],
};

const ar: Content = {
  meta: { title: 'سيف الدين بن عاشور — مطوّر Full Stack · قائد تقني' },
  ui: {
    menu: 'القائمة',
    navProjects: 'المشاريع',
    navExperience: 'الخبرة',
    navAbout: 'نبذة وتواصل',
    seeWork: 'اطّلع على أعمالي ←',
    experience: 'الخبرة',
    contact: 'تواصل معي',
    mainProject: 'المشروع الرئيسي',
    visit: 'زيارة sghartoon.com ↗',
    myRoles: 'أدواري:',
    stackEyebrow: 'التقنيات',
    stackTitle: 'التقنيات التي أعمل بها',
    leadershipEyebrow: 'القيادة',
    seeExperience: 'عرض الخبرة كاملة ←',
    projectsEyebrow: 'المشاريع',
    projectsTitle: 'أعمال مختارة',
    projectsIntro:
      'أعمال العملاء المشمولة باتفاقيات سرّية موصوفة دون أسماء أو تفاصيل. عروض Unity في الأسفل هي اختبارات تقنية، مع نسخة WebGL مباشرة وفيديو شرح.',
    architectureLink: 'اقرأ ملاحظات المعمارية لعروض Unity ←',
    confidential: 'سرّي',
    watchDemo: 'شاهد عرض SgharToon ↗',
    downloadCv: 'تحميل السيرة الذاتية (PDF) ↓',
    formTitle: 'أرسل رسالة',
    formName: 'اسمك',
    formEmail: 'بريدك الإلكتروني',
    formMessage: 'رسالتك',
    formSend: 'إرسال',
    formSending: 'جارٍ الإرسال…',
    formSent: 'شكراً! تم إرسال رسالتك.',
    formError: 'حدث خطأ. يرجى مراسلتي مباشرة عبر البريد الإلكتروني.',
    screenshotsTitle: 'لقطات الشاشة',
    screenshotsNote: 'الصفحات العامة لموقع sghartoon.com. فضاءا المعالج والأهل خاصان ولا يظهران هنا.',
    experienceEyebrow: 'الخبرة',
    experienceTitle: 'من المنتج إلى القيادة',
    agileEyebrow: 'Agile',
    agileTitle: 'كيف أدير التسليم',
    educationEyebrow: 'التعليم',
    educationTitle: 'التعليم',
    aboutEyebrow: 'نبذة وتواصل',
    contactTitle: 'التواصل',
    teachingTitle: 'التدريس',
    recognitionTitle: 'التكريمات',
    deliverablesTitle: 'مخرجات الاختبارات التقنية لـ Unity',
    unityDemoLink: 'عرض مباشر وفيديو ←',
    notPushed: 'لم يُنشر على GitHub بعد',
    emailLabel: 'البريد الإلكتروني',
    phoneLabel: 'الهاتف',
    footerSub: 'Angular · React · .NET / C# · Unity — تونس.',
    demosNote: 'هذه الصفحة متاحة بالإنجليزية فقط.',
  },
  hero: {
    role: 'مطوّر Full Stack · قائد تقني',
    location: 'تونس',
    lead: '8 سنوات في بناء منتجات الويب والموبايل وقيادة تسليمها باستخدام Angular وReact و.NET / C# وUnity. قائد فريق وقائد تقني.',
  },
  stats: [
    { value: '8 سنوات', label: 'مع C# / .NET' },
    { value: '2,400+', label: 'مستخدم لـ SgharToon' },
    { value: '170+', label: 'وحدة مُسلَّمة' },
    { value: '99.7%', label: 'وقت تشغيل مقاس' },
  ],
  skillGroups: [
    { title: 'الواجهة الأمامية', items: ['Angular', 'React', 'TypeScript'] },
    { title: 'الخلفية', items: ['C# / .NET', 'REST APIs', 'Node.js', 'PostgreSQL'] },
    { title: 'Unity والموبايل', items: ['Unity (C#)', 'WebGL', 'Android (Java)', 'Socket.IO'] },
    {
      title: 'القيادة والمنهجية',
      items: ['قيادة فريق', 'قيادة تقنية', 'Agile', 'مراجعة الكود', 'CI/CD', 'Docker', 'JIRA / ClickUp'],
    },
  ],
  sghartoon: {
    tagline: 'تشخيص أولي وعلاج عبر الإنترنت للأطفال ذوي صعوبات التعلّم، قائم على ألعاب الفيديو.',
    summary:
      'منصة من ثلاثة منتجات مترابطة: تطبيق موبايل بـ Unity يلعب فيه الأطفال ألعاب التشخيص والعلاج، وأداة ويب للمعالجين، وتطبيق ويب للأهل. متاحة على App Store وGoogle Play والويب عبر sghartoon.com، ويستخدمها أكثر من 2,400 شخص وأكثر من 60 متخصصاً في الرعاية الصحية.',
    products: [
      { name: 'تطبيق الأطفال', tech: 'Unity', body: 'ألعاب فيديو للتشخيص الأولي والعلاج، على iOS وAndroid وWebGL.' },
      { name: 'أداة المعالجين', tech: 'Web', body: 'أداة الويب التي يستخدمها المعالجون، مع إشراف فوري.' },
      { name: 'تطبيق الأهل', tech: 'Web', body: 'تطبيق الويب الذي يستخدمه الأهل.' },
    ],
    roles: ['قائد تقني وشريك مؤسس', 'قائد تقني · Unity', 'مطوّر ثانٍ · .NET', 'مطوّر ثانٍ · Angular'],
    highlights: [
      { title: 'بيئة تشغيل مدفوعة بالبيانات', body: 'أكثر من 170 وحدة تعمل بمحتوى JSON بعيد، دون كود خاص بكل وحدة.' },
      { title: 'شبكات بسلطة الخادم', body: 'مزامنة تفاضلية مع استرداد كامل عبر Snapshot عند إعادة الاتصال، وجلسات معالجين متوازية دون تداخل.' },
      { title: 'أداء في ذاكرة محدودة', body: '60 إطاراً في الثانية بثبات على أجهزة Android المنخفضة، مع مسارات تدمير مركزية ودون توقفات GC في الحلقة الرئيسية.' },
      { title: 'خدمات مرنة', body: 'طبقة REST غير متزامنة مع إعادة المحاولة والمهلة والبديل: توفّر مقاس بنسبة 99.7% في الإنتاج.' },
    ],
    shotCaptions: ['الصفحة الرئيسية', 'صفحة الأهل', 'صفحة المعالجين', 'صفحة الشراكات B2B', 'عرض الموبايل'],
    projectKind: 'منتج · Unity + .NET + Angular',
    projectRoles: ['قائد تقني وشريك مؤسس', 'قائد تقني — Unity', 'مطوّر ثانٍ — .NET وAngular'],
  },
  bio: {
    paragraphs: [
      'مطوّر Full Stack وقائد تقني بخبرة 8 سنوات، مقيم في تونس. أبني منتجات الويب والموبايل وأقود تسليمها باستخدام Angular وReact و.NET / C# وUnity.',
      'كنت قائداً تقنياً وشريكاً مؤسساً في SgharToon، وهي منصة يستخدمها في الإنتاج أكثر من 2,400 شخص، وأعمل اليوم مستشاراً مستقلاً على أدوات الإدارة والتقارير. إلى جانب التسليم، أوجّه المطوّرين وقد درّست طلاب الإعلامية.',
    ],
    facts: [
      { label: 'الخبرة', value: '8 سنوات' },
      { label: 'الموقع', value: 'تونس' },
      { label: 'اللغات', value: 'العربية والفرنسية (لغة أم) · الإنجليزية (مهنية)' },
    ],
  },
  leadership: {
    summary: 'قائد فريق وقائد تقني في المنتجات والاستشارات والتدريس.',
    points: [
      { value: '~10', label: 'مطوّرين انضموا إلى فريق SgharToon على مرّ السنوات' },
      { value: '~20', label: 'طالباً أشرفت عليهم في ISAMM' },
    ],
  },
  experience: [
    {
      title: 'مستشار ومطوّر مستقل',
      org: 'تونس',
      period: 'جانفي 2026 – الآن',
      points: [
        'أداة إدارة ولوحة تحكم Value Stream Mapping (VSM) لبنك — عميل سرّي، React و.NET Core.',
        'Retail Flow (ماي – جوان 2026): نموذج أولي لإدارة التجزئة الصناعية، صمّمته ونفّذته وحدي في ستة أسابيع.',
        'Adeeb (أوت 2026): محرّر قصص مصوّرة للأطفال لشركة ناشئة عُمانية، مع مشاركة القصص.',
      ],
      stack: ['React', '.NET Core', 'PostgreSQL', 'Unity', 'Firebase'],
    },
    {
      title: 'قائد تقني وشريك مؤسس',
      org: 'SgharToon',
      period: 'أكتوبر 2017 – ديسمبر 2025',
      points: [
        'قيادة فريق من المطوّرين: توزيع المهام ومراجعة الكود والتوجيه. انضم حوالي عشرة أشخاص على مرّ السنوات.',
        'التوجيه التقني منذ البداية (خارطة الطريق وترتيب الأولويات) ومعمارية مدفوعة بالبيانات: أكثر من 170 وحدة بمحتوى JSON بعيد.',
        'شبكات بسلطة الخادم مع استرداد عبر Snapshot، ومسار ذاكرة يحافظ على 60 إطاراً في الثانية على Android المنخفض.',
        'لوحة تحكم Angular للإشراف الفوري على المعالجين، صمّمتها ودمجتها مع مطوّر هذا الجزء.',
        'طبقة خدمات REST غير متزامنة مع إعادة المحاولة والمهلة والبديل: توفّر 99.7% في الإنتاج.',
        'CI/CD للمنصة. Docker في عدة مشاريع، منها تثبيت Jitsi ونظام ERP.',
      ],
      stack: ['Unity', 'C#', '.NET', 'Angular', 'Socket.IO', 'Docker'],
    },
    {
      title: 'مدرّب ومسؤول التكوين',
      org: 'WeCode Land',
      period: '2022 – 2023',
      points: ['برنامج مكثّف لـ Unity 2D لمدة ثمانية أسابيع للمبتدئين، سُلِّم مع نموذج أولي يعمل.'],
    },
    {
      title: 'أستاذ ومشرف على المشاريع',
      org: 'ISAMM، جامعة منوبة',
      period: '2022 – 2024',
      points: [
        'دروس وأعمال تطبيقية في C# وJava وAndroid الأصلي ومعمارية البرمجيات.',
        'الإشراف على حوالي عشرين طالباً: مشاريع تخرّج في الهندسة والإجازة وتربّصات صيفية.',
      ],
    },
    {
      title: 'مطوّر C# — محاكاة وتكامل',
      org: 'Badiya — تطبيق WebGL تفاعلي',
      period: '2022 – 2023',
      points: [
        'محرّك محاكاة قابل للضبط: سلوك قابل للتعيين وتوليد سيناريوهات عند الطلب عبر واجهة قابلة للتوسّع.',
        'تحسين مسار العرض في Unity لثبات 60 إطاراً في الثانية على متصفحات متوسطة المستوى، وجسر C#–JavaScript مع طبقة الويب.',
      ],
      stack: ['Unity', 'WebGL', 'C#', 'JavaScript'],
    },
    {
      title: 'مطوّر Unity — جولة افتراضية لمعرض رقمي',
      org: 'فريق من ثلاثة: مصمّم ثلاثي الأبعاد ومطوّر ويب',
      period: '2022 · 4 أشهر',
      points: ['مطوّر Unity الوحيد: صمّمت وطوّرت تجربة الزيارة التفاعلية.'],
      stack: ['Unity', 'C#'],
    },
    {
      title: 'مطوّر — حل مراقبة الجودة الصناعية',
      org: 'منشورة لدى العميل',
      period: '2019 – 2022',
      points: [
        'عرض ثلاثي الأبعاد في Unity WebGL: تحميل نماذج CAD (STP)، وتنقّل كامل للكاميرا، وتعليقات هندسية (نقاط وخطوط ومضلّعات) مرتبطة بمؤشرات العمل.',
        'آخر إصدار سُلِّم في 2022.',
      ],
      stack: ['Unity', 'WebGL', 'C#', 'CAD'],
    },
  ],
  education: [
    { title: 'دبلوم مهندس (Bac+5) — التصوير الرقمي والواقع الافتراضي، ISAMM', period: '2015 – 2018' },
    { title: 'إجازة في الإعلامية متعددة الوسائط، ISAMM', period: '2012 – 2015' },
  ],
  projects: [
    {
      title: 'SgharToon',
      period: '2017 – 2025',
      kind: 'منتج · Unity + .NET + Angular',
      summary:
        'تشخيص أولي وعلاج عبر الإنترنت للأطفال ذوي صعوبات التعلّم: تطبيق موبايل بـ Unity وأداة للمعالجين وتطبيق للأهل، في الإنتاج لأكثر من 2,400 مستخدم.',
      stack: ['Unity', 'C#', '.NET', 'Angular'],
    },
    {
      title: 'أداة إدارة ولوحة تحكم VSM',
      period: '2026',
      kind: 'استشارات · بنك',
      summary: 'أداة إدارة ولوحة تحكم Value Stream Mapping لبنك، مع متابعة وتقارير. العميل والمحتوى سرّيان، لذلك لا تُعرض أي تفاصيل هنا.',
      stack: ['React', '.NET Core'],
      confidential: true,
    },
    {
      title: 'Retail Flow',
      period: 'ماي – جوان 2026',
      kind: 'استشارات · تجزئة صناعية',
      summary: 'نموذج أولي لإدارة التجزئة الصناعية، صمّمته ونفّذته وحدي في ستة أسابيع. العميل سرّي.',
      stack: ['React', '.NET Core', 'PostgreSQL'],
      confidential: true,
    },
    {
      title: 'مراقبة الجودة الصناعية — عارض ثلاثي الأبعاد',
      period: '2019 – 2022',
      kind: 'برمجيات صناعية · Unity WebGL',
      summary: 'تحميل نماذج CAD (STP) في المتصفح مع تنقّل الكاميرا وتعليقات هندسية وعلامات مؤشرات على سطح النموذج.',
      stack: ['Unity', 'WebGL', 'C#'],
    },
    {
      title: 'Badiya',
      period: '2022 – 2023',
      kind: 'Unity WebGL',
      summary: 'تطبيق WebGL تفاعلي بمحرّك محاكاة قابل للضبط وجسر C#–JavaScript.',
      stack: ['Unity', 'WebGL', 'C#', 'JavaScript'],
    },
    {
      title: 'جولة افتراضية لمعرض رقمي',
      period: '2022',
      kind: 'Unity',
      summary: 'جولة افتراضية تفاعلية، طوّرتها بصفتي مطوّر Unity الوحيد في فريق من ثلاثة.',
      stack: ['Unity', 'C#'],
    },
    {
      title: 'StoryStudio — Adeeb',
      period: 'أوت 2026',
      kind: 'Unity WebGL · Firebase',
      summary:
        'محرّر قصص مصوّرة للأطفال الصغار: إضافة صفحات، واختيار الخلفية، ووضع العناصر وتحريكها وتدويرها وتغيير حجمها، وكتابة النص، ومشاركة القصص. تتضمن نسخة مباشرة وفيديو شرح.',
      stack: ['Unity', 'C#', 'Firebase'],
      route: '/task-1-story-creation',
      linkLabel: 'افتح العرض ←',
    },
    {
      title: 'البحث واكتشاف المحتوى',
      period: 'اختبار تقني',
      kind: 'Unity WebGL · Firebase',
      summary: 'بحث نصي كامل في كتالوج Firebase مع تحليل بيانات وصفية غير منظّمة. تتضمن نسخة مباشرة وفيديو شرح.',
      stack: ['Unity', 'C#', 'Firebase'],
      route: '/task-2-search',
      linkLabel: 'افتح العرض ←',
    },
  ],
  agile: [
    {
      title: 'تسليم Agile في SgharToon',
      body: 'خارطة الطريق وترتيب الأولويات بيد القائد التقني، والعمل موزّع على الفريق ومتابع في ClickUp وJIRA، مع مراجعة كود لكل تغيير.',
    },
    { title: 'التسليم المستمر', body: 'CI/CD على المنصة ومراقبة الإنتاج، فتصل التغييرات إلى المستخدمين بخطوات صغيرة وآمنة.' },
    { title: 'التوجيه', body: 'توجيه مطوّري الفريق والإشراف على الطلاب والمتدرّبين المبتدئين.' },
  ],
  teaching: 'أستاذ في ISAMM (2022 – 2024): C# وJava وAndroid الأصلي ومعمارية البرمجيات، مع الإشراف على حوالي 20 طالباً. مدرّب Unity 2D في WeCode Land (2022 – 2023).',
  recognition: [
    { title: 'Google for Startups', org: 'برنامج التسريع في تونس', year: '2022' },
    { title: 'Westerwelle Foundation', org: 'زمالة Berlin Young Founders', year: '2024' },
    { title: 'LEAP Riyadh', org: 'عارض مختار', year: '2025' },
    { title: 'Soft Landing Marseille', org: 'برنامج انتقال بدعم من الحكومة الفرنسية', year: '2025' },
  ],
};

export const CONTENT: Record<Lang, Content> = { en, fr, ar };
