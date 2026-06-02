export const translations = {
  en: {
    nav: { about: 'About', skills: 'Skills', projects: 'Projects', experience: 'Experience', contact: 'Contact', connect: 'Connect' },
    hero: {
      greeting: "Hi, I'm",
      roles: ['Unity Systems Engineer', 'Runtime & Tools Architect'],
      tagline: 'Building modular, data-driven runtime architectures for Unity, WebGL & mobile.<br>8+ years shipping production systems — from gaming to serious games.',
      btnWork: 'View My Work', btnContact: 'Get In Touch', btnPortfolio: 'Portfolio', btnCV: 'CV',
      location: 'Tunis, Tunisia · Open to relocation worldwide', linkedin: 'LinkedIn', demo: 'Portfolio Demo',
    },
    about: {
      label: 'About Me',
      title: 'Runtime systems.<br>Real users. Real production.',
      body1: "I'm a <strong>Unity Systems Engineer</strong> based in Tunis with 8+ years of production experience. My focus: <strong>data-driven runtime architectures</strong>, <strong>memory-constrained performance</strong>, and <strong>real-time networking</strong> on Unity, WebGL, and mobile.",
      body2: "I co-founded and lead engineering on <strong>SgharToon</strong> — a live therapeutic platform published on App Store, Google Play, and WebGL. I designed every layer: the data-driven runtime powering 170+ modules, the server-authoritative networking with snapshot recovery, the memory pipeline holding 60fps on low-end devices, and the Angular dashboard for therapists.",
      body3: "I also teach <strong>C#, Java, and Unity at Master's level (ISAMM, Université de la Manouba)</strong>. My belief: <em>good architecture makes the wrong thing structurally impossible, not just discouraged</em>.",
      highlights: [
        'Production: 2,400+ users · 99.7% uptime · 60fps on low-end Android',
        "Master's-level lecturer: C#, Java, Unity (ISAMM, Tunisia)",
        'Open to relocation worldwide — Soft Landing Marseille 2025 alumnus',
      ],
      stats: [
        { value: '8+', label: 'Years Experience' },
        { value: '170+', label: 'Interactive Modules Shipped' },
        { value: '2,400+', label: 'Active Users in Production' },
        { value: '60+', label: 'Healthcare Professionals' },
      ],
      badge: { title: 'SgharToon Platform', sub: 'Live in Production · iOS · Android · WebGL' },
    },
    skills: {
      label: 'Expertise', title: 'Skills & Technologies',
      subtitle: 'Focused on runtime systems, real-time networking, and memory-constrained environments across Unity, WebGL, and mobile.',
      categories: [
        {
          name: 'Core Stack', icon: '⚙️',
          skills: [
            { name: 'Unity (C#)', note: '8+ years, production' },
            { name: 'WebGL', note: 'Production · mobile-grade' },
            { name: 'Mobile (iOS/Android)', note: 'Shipped on App Store & Play' },
            { name: 'Java', note: 'Teaching at Master level' },
            { name: 'Angular / TypeScript', note: 'Dashboards' },
            { name: 'Socket.IO', note: 'Real-time multiplayer' },
          ],
        },
        {
          name: 'Architecture', icon: '🏗️',
          skills: [
            { name: 'Data-Driven Runtime' },
            { name: 'Layered Component Systems' },
            { name: 'Session Lifecycle Management' },
            { name: 'Server-Authoritative Networking' },
            { name: 'Delta Sync & State Snapshots' },
            { name: 'Versioned Asset Pipelines' },
          ],
        },
        {
          name: 'Performance', icon: '⚡',
          skills: [
            { name: 'Unity Profiler · GC optimization' },
            { name: 'Object Pooling' },
            { name: 'Memory engineering (WebGL/mobile)' },
            { name: 'Async patterns · retry/timeout/fallback' },
            { name: 'Stable 60fps on low-end hardware' },
          ],
        },
      ],
      languagesLabel: 'Languages',
      languages: ['French — Native (C1)', 'Arabic — Native', 'English — Professional (B2+)'],
    },
    projects: {
      label: 'Work', title: 'Projects & Systems',
      subtitle: 'Every system below was designed from first principles — architecture that enforces correctness structurally, not by convention.',
      featuredBadge: 'Featured Project', watchDemo: 'Watch Demo',
      items: [
        {
          title: 'SgharToon Platform', subtitle: 'Lead Systems Architect',
          description: 'A digital therapeutic platform connecting parents, children, and therapists through structured care pathways. Built from scratch as the sole systems architect.',
          highlights: [
            '170+ interactive modules shipped from a single data-driven runtime',
            'Live in production: 2,400+ active users · 60+ healthcare professionals',
            'Published on App Store (id1625583473), Google Play, and WebGL',
            '99.7% measured uptime · stable 60fps on low-end Android tablets',
            'Full reconnection recovery via state snapshots — zero data loss on network drops',
            'Zero GC stalls in main loop (Unity Profiler validated across 10k+ frames)',
          ],
          tags: ['Unity', 'WebGL', 'C#', 'Angular', 'Socket.IO', 'Mobile'], demoUrl: 'https://youtu.be/kp5x0duiZLI', featured: true, accentColor: '#4f8ef7',
        },
        {
          title: 'Server-Authoritative Networking Layer', subtitle: 'Systems Engineering',
          description: "Transport-agnostic networking system where the therapist client holds authority over session state. Implements delta sync with full state-snapshot recovery on reconnection, plus parallel concurrent sessions with zero cross-contamination.",
          highlights: [
            'Therapist authority enforced at Logic Layer',
            'Delta sync + full snapshot reconnection',
            'Parallel concurrent therapist sessions',
            'Zero cross-session contamination',
          ],
          tags: ['Networking', 'C#', 'Socket.IO', 'State Management'], featured: false, accentColor: '#3ecf8e',
        },
        {
          title: 'Memory-Constrained Runtime Engine', subtitle: 'Performance Engineering',
          description: 'Production memory engineering for WebGL and low-end Android. Centralized destruction pipelines eliminate allocation spikes; dedicated JSON deserialization classes resolve parsing bottlenecks; deterministic initialization across all 170+ modules.',
          highlights: [
            'Stable 60fps on low-end Android tablets (validated in production)',
            'Centralized destruction pipelines · zero allocation spikes in main loop',
            'Async REST layer with retry, timeout, and fallback · 99.7% uptime',
            'Deterministic module initialization across 170+ variants',
          ],
          tags: ['Unity', 'WebGL', 'Mobile', 'Performance', 'Memory'], featured: false, accentColor: '#f59e0b',
        },
      ],
    },
    experience: {
      label: 'Career', title: 'Experience & Education',
      subtitle: 'Building systems that matter — from architectural design to production deployment.',
      currentBadge: 'Current', teachingLabel: 'Teaching', recognitionLabel: 'Recognition', educationLabel: 'Education',
      items: [
        {
          role: 'Co-founder & Lead Unity Engineer', company: 'SgharToon', location: 'Tunis, Tunisia', period: 'Oct. 2017 – Dec. 2025', current: false,
          description: 'Lead systems architect on the SgharToon Platform — a therapeutic digital system for children with learning disorders. Responsible for the full technical architecture from initial design to production deployment.',
          achievements: [
            'Architected a data-driven runtime powering 170+ interactive modules from a single codebase',
            'Live platform serving 2,400+ active users and 60+ healthcare professionals',
            'Published on Apple App Store (id1625583473), Google Play, and WebGL',
            'Engineered zero-GC-stall memory pipeline for WebGL and Android (low-end devices)',
            'Built server-authoritative networking with full reconnection recovery via state snapshots',
            'Achieved 99.7% measured uptime in production',
            'Designed and integrated the Angular dashboard for real-time therapist supervision',
          ],
          tags: ['Unity', 'C#', 'WebGL', 'Angular', 'Socket.IO', 'Architecture'],
        },
        {
          role: 'C# Developer — Simulation & Integration', company: 'Badiya — Interactive WebGL Application', location: '', period: '2022 – 2023', current: false,
          description: 'WebGL application with a configurable simulation engine and performance constraints close to embedded/mobile context.',
          achievements: [
            'Designed a configurable simulation engine: parameterizable behavioral logic, on-demand scenario generation — extensible API-driven architecture',
            'Optimized Unity rendering pipeline for stable 60fps on mid-range browsers',
            'Implemented C#–JavaScript bridge for real-time interoperability with the web layer',
          ],
          tags: ['Unity', 'WebGL', 'C#', 'Simulation', 'JavaScript'],
        },
        {
          role: 'Client Project — Industrial 3D WebGL Viewer', company: 'Industrial Quality Management Solution', location: '', period: '2019', current: false,
          description: 'Loading and visualization of CAD models (STP format) in the browser via Unity WebGL — with full camera navigation and a geometric annotation system.',
          achievements: [
            'CAD model loading and real-time visualization of STP files in Unity WebGL',
            'Camera navigation system: zoom, rotation, pan',
            'Geometric primitive drawing system: points, lines, polygons',
            'Indicator flags placed directly on 3D model surfaces',
          ],
          tags: ['Unity', 'WebGL', 'C#', '3D Viewer', 'CAD'],
        },
      ],
      teaching: [
        {
          role: 'Lecturer — Game Development & Software Engineering',
          institution: 'ISAMM — Université de la Manouba',
          level: "Master's level · C#, Java, Unity",
          period: '2022 – 2024',
        },
        {
          role: 'Unity 2D Trainer',
          institution: 'WeCode Land',
          level: 'Intensive bootcamp · zero-to-prototype in 8 weeks',
          period: '2022 – 2023',
        },
      ],
      recognition: [
        { title: 'Google for Startups', year: '2022', context: 'Tunisia accelerator program' },
        { title: 'Westerwelle Foundation', year: '2024', context: 'Berlin Young Founders fellowship' },
        { title: 'LEAP Riyadh', year: '2025', context: "MENA's largest tech event — selected exhibitor" },
        { title: 'Soft Landing Marseille', year: '2025', context: 'French government-backed startup relocation program' },
      ],
      education: [
        {
          degree: 'Engineering Degree (Bac+5) — Digital Imaging & Virtual Reality (INREV)',
          institution: 'ISAMM — Institut Supérieur des Arts Multimédia de la Manouba',
          period: '2015 – 2018',
          focus: 'Real-time 3D, virtual reality, game systems, software engineering',
        },
        {
          degree: 'Bachelor — Multimedia Computer Science',
          institution: 'ISAMM — Institut Supérieur des Arts Multimédia de la Manouba',
          period: '2012 – 2015',
          focus: 'Multimedia development, interactive systems, digital arts',
        },
      ],
    },
    contact: {
      label: 'Contact', title: "Let's Work Together",
      subtitle: 'Open to senior Unity / C# engineering roles. Immediately available — open to remote or relocation.',
      formTitle: 'Send a Message', nameLabel: 'Name', emailLabel: 'Email', messageLabel: 'Message',
      namePlaceholder: 'Your name', emailPlaceholder: 'your@email.com', messagePlaceholder: 'Tell me about the opportunity…',
      submit: 'Send Message', sentTitle: 'Message sent!', sentBody: "Thanks for reaching out. I'll get back to you shortly.",
      links: [
        { label: 'LinkedIn', value: 'linkedin.com/in/saif-eddine-ben-achour', href: 'https://linkedin.com/in/saif-eddine-ben-achour', icon: 'li' },
        { label: 'YouTube Demo', value: 'SgharToon Portfolio', href: 'https://youtu.be/kp5x0duiZLI', icon: 'yt' },
        { label: 'Location', value: 'Tunis, Tunisia · Open to relocation worldwide', href: null, icon: 'loc' },
      ],
      downloads: [
        { label: 'Watch Portfolio Demo', href: 'https://youtu.be/kp5x0duiZLI', download: false },
        { label: 'Download CV (PDF)', href: '/cv-saif-ben-achour.pdf', download: true },
      ],
    },
    footer: { name: 'Saif Eddine Ben Achour', role: 'Unity Systems Engineer · Tunis → France', built: 'Built with Angular' },
  },

  fr: {
    nav: { about: 'À propos', skills: 'Compétences', projects: 'Projets', experience: 'Expérience', contact: 'Contact', connect: 'Se connecter' },
    hero: {
      greeting: "Bonjour, je suis",
      roles: ['Ingénieur Unity Systèmes', 'Architecte Runtime & Outils'],
      tagline: "Conception d'architectures runtime modulaires et orientées données pour Unity, WebGL et mobile.<br>8+ ans à livrer des systèmes en production — du jeu vidéo aux serious games.",
      btnWork: 'Voir mes travaux', btnContact: 'Me contacter', btnPortfolio: 'Portfolio', btnCV: 'CV',
      location: 'Tunis, Tunisie · Ouvert à la relocalisation partout dans le monde', linkedin: 'LinkedIn', demo: 'Démo Portfolio',
    },
    about: {
      label: 'À propos',
      title: 'Systèmes runtime.<br>Vrais utilisateurs. Vraie production.',
      body1: "Je suis <strong>Ingénieur Unity Systèmes</strong> basé à Tunis avec 8+ ans d'expérience en production. Mon focus : <strong>architectures runtime orientées données</strong>, <strong>performance en environnement à mémoire contrainte</strong>, et <strong>réseau temps réel</strong> sur Unity, WebGL et mobile.",
      body2: "Je suis co-fondateur et lead engineering de <strong>SgharToon</strong> — une plateforme thérapeutique live publiée sur App Store, Google Play et WebGL. J'ai conçu chaque couche : le runtime data-driven alimentant 170+ modules, le réseau server-authoritative avec reprise par snapshot, le pipeline mémoire qui tient 60fps sur tablettes bas de gamme, et le tableau de bord Angular pour thérapeutes.",
      body3: "J'enseigne également <strong>C#, Java et Unity au niveau Master (ISAMM, Université de la Manouba)</strong>. Ma conviction : <em>une bonne architecture rend la chose incorrecte structurellement impossible, pas seulement déconseillée</em>.",
      highlights: [
        'Production : 2 400+ utilisateurs · 99,7% uptime · 60fps sur Android bas de gamme',
        'Enseignant niveau Master : C#, Java, Unity (ISAMM, Tunisie)',
        'Mobilité internationale — alumnus Soft Landing Marseille 2025',
      ],
      stats: [
        { value: '8+', label: "Années d'expérience" },
        { value: '170+', label: 'Modules interactifs livrés' },
        { value: '2 400+', label: 'Utilisateurs actifs en production' },
        { value: '60+', label: 'Professionnels de santé' },
      ],
      badge: { title: 'Plateforme SgharToon', sub: 'Live en production · iOS · Android · WebGL' },
    },
    skills: {
      label: 'Expertise', title: 'Compétences & Technologies',
      subtitle: "Axé sur les systèmes runtime, le réseau en temps réel et les environnements à mémoire contrainte, à travers Unity, WebGL et mobile.",
      categories: [
        {
          name: 'Pile Technique', icon: '⚙️',
          skills: [
            { name: 'Unity (C#)', note: '8+ ans, production' },
            { name: 'WebGL', note: 'Production · grade mobile' },
            { name: 'Mobile (iOS/Android)', note: 'App Store & Play' },
            { name: 'Java', note: 'Enseignement niveau Master' },
            { name: 'Angular / TypeScript', note: 'Tableaux de bord' },
            { name: 'Socket.IO', note: 'Multijoueur temps réel' },
          ],
        },
        {
          name: 'Architecture', icon: '🏗️',
          skills: [
            { name: 'Runtime Orienté Données' },
            { name: 'Layered Component Systems' },
            { name: 'Session Lifecycle Management' },
            { name: 'Server-Authoritative Networking' },
            { name: 'Delta Sync & State Snapshots' },
            { name: 'Versioned Asset Pipelines' },
          ],
        },
        {
          name: 'Performance', icon: '⚡',
          skills: [
            { name: 'Unity Profiler · optimisation GC' },
            { name: 'Object Pooling' },
            { name: 'Ingénierie mémoire (WebGL/mobile)' },
            { name: 'Patterns async · retry/timeout/fallback' },
            { name: '60fps stable sur matériel bas de gamme' },
          ],
        },
      ],
      languagesLabel: 'Langues',
      languages: ['Français — Natif (C1)', 'Arabe — Natif', 'Anglais — Professionnel (B2+)'],
    },
    projects: {
      label: 'Travaux', title: 'Projets & Systèmes',
      subtitle: "Chaque système ci-dessous a été conçu à partir de premiers principes — une architecture qui impose la justesse structurellement, non par convention.",
      featuredBadge: 'Projet Phare', watchDemo: 'Voir la démo',
      items: [
        {
          title: 'Plateforme SgharToon', subtitle: 'Architecte Systèmes Principal',
          description: "Une plateforme thérapeutique numérique connectant parents, enfants et thérapeutes via des parcours de soins structurés. Conçue de zéro en tant que seul architecte systèmes.",
          highlights: [
            '170+ modules interactifs livrés depuis un runtime unique orienté données',
            'En production : 2 400+ utilisateurs actifs · 60+ professionnels de santé',
            'Publié sur App Store (id1625583473), Google Play, et WebGL',
            '99,7% uptime mesuré · 60fps stable sur tablettes Android bas de gamme',
            "Reprise complète sur reconnexion via snapshots — zéro perte de données",
            'Zéro gel GC en boucle principale (validé Unity Profiler sur 10k+ frames)',
          ],
          tags: ['Unity', 'WebGL', 'C#', 'Angular', 'Socket.IO', 'Mobile'], demoUrl: 'https://youtu.be/kp5x0duiZLI', featured: true, accentColor: '#4f8ef7',
        },
        {
          title: 'Couche Réseau Server-Authoritative', subtitle: 'Ingénierie Systèmes',
          description: "Système réseau indépendant du transport où le client thérapeute fait autorité sur l'état de session. Sync delta avec reprise par snapshot complet à la reconnexion, et sessions concurrentes parallèles sans contamination croisée.",
          highlights: [
            'Autorité thérapeute imposée à la couche logique',
            'Sync delta + reconnexion par instantané complet',
            'Sessions thérapeutes concurrentes parallèles',
            'Zéro contamination entre sessions',
          ],
          tags: ['Networking', 'C#', 'Socket.IO', 'State Management'], featured: false, accentColor: '#3ecf8e',
        },
        {
          title: 'Moteur Runtime à Mémoire Contrainte', subtitle: 'Ingénierie Performance',
          description: "Ingénierie mémoire en production pour WebGL et Android bas de gamme. Pipelines de destruction centralisés éliminant les pics d'allocation ; classes de désérialisation JSON dédiées résolvant les goulots de parsing ; initialisation déterministe sur les 170+ modules.",
          highlights: [
            '60fps stable sur tablettes Android bas de gamme (validé en production)',
            "Pipelines de destruction centralisés · zéro pic d'allocation en boucle principale",
            'Couche REST async avec retry, timeout, fallback · 99,7% uptime',
            'Initialisation déterministe de module sur les 170+ variantes',
          ],
          tags: ['Unity', 'WebGL', 'Mobile', 'Performance', 'Memory'], featured: false, accentColor: '#f59e0b',
        },
      ],
    },
    experience: {
      label: 'Parcours', title: 'Expérience & Formation',
      subtitle: "Concevoir des systèmes qui comptent — de la conception architecturale au déploiement en production.",
      currentBadge: 'En cours', teachingLabel: 'Enseignement', recognitionLabel: 'Distinctions', educationLabel: 'Formation',
      items: [
        {
          role: 'Co-fondateur & Lead Unity Engineer', company: 'SgharToon', location: 'Tunis, Tunisie', period: 'Oct. 2017 – Déc. 2025', current: false,
          description: "Architecte systèmes principal de SgharToon — un système thérapeutique numérique pour les enfants ayant des troubles d'apprentissage. Responsable de l'architecture technique complète.",
          achievements: [
            "Architecturé un runtime orienté données alimentant 170+ modules interactifs depuis une seule base de code",
            'Plateforme live servant 2 400+ utilisateurs actifs et 60+ professionnels de santé',
            'Publiée sur App Store (id1625583473), Google Play et WebGL',
            "Ingénierie d'un pipeline mémoire sans gel GC pour WebGL et Android bas de gamme",
            'Réseau server-authoritative avec reprise complète sur reconnexion via snapshots',
            '99,7% uptime mesuré en production',
            'Conception et intégration du tableau de bord Angular pour supervision en temps réel',
          ],
          tags: ['Unity', 'C#', 'WebGL', 'Angular', 'Socket.IO', 'Architecture'],
        },
        {
          role: 'Développeur C# Simulation & Intégration', company: 'Badiya — Application Interactive WebGL', location: '', period: '2022 – 2023', current: false,
          description: "Application déployée via WebGL avec moteur de simulation configurable et contraintes de performance proches du contexte embarqué/mobile.",
          achievements: [
            "Conception d'un moteur de simulation configurable : logique comportementale paramétrable, génération de scénarios à la demande — architecture API-driven extensible",
            'Optimisation du pipeline de rendu Unity pour 60 FPS stable sur navigateurs mid-range',
            'Implémentation du bridge C#–JavaScript pour interopérabilité temps réel avec la couche web',
          ],
          tags: ['Unity', 'WebGL', 'C#', 'Simulation', 'JavaScript'],
        },
        {
          role: 'Projet Client — Visualiseur 3D WebGL Industriel', company: 'Solution Contrôle Qualité Industriel', location: '', period: '2019', current: false,
          description: "Chargement et visualisation de modèles CAO (format STP) dans le navigateur via Unity WebGL — avec navigation caméra complète et système d'annotation géométrique.",
          achievements: [
            'Chargement et visualisation en temps réel de fichiers STP dans Unity WebGL',
            'Navigation caméra : zoom, rotation, panoramique',
            'Dessin de primitives géométriques : points, lignes, polygones',
            "Indicateurs positionnés directement sur les surfaces du modèle 3D",
          ],
          tags: ['Unity', 'WebGL', 'C#', '3D Viewer', 'CAD'],
        },
      ],
      teaching: [
        {
          role: 'Enseignant — Développement Jeux & Génie Logiciel',
          institution: 'ISAMM — Université de la Manouba',
          level: 'Niveau Master · C#, Java, Unity',
          period: '2022 – 2024',
        },
        {
          role: 'Formateur Unity 2D',
          institution: 'WeCode Land',
          level: 'Bootcamp intensif · zéro-à-prototype en 8 semaines',
          period: '2022 – 2023',
        },
      ],
      recognition: [
        { title: 'Google for Startups', year: '2022', context: 'Programme accélérateur Tunisie' },
        { title: 'Westerwelle Foundation', year: '2024', context: 'Bourse Young Founders, Berlin' },
        { title: 'LEAP Riyadh', year: '2025', context: 'Plus grand événement tech du MENA — exposant sélectionné' },
        { title: 'Soft Landing Marseille', year: '2025', context: "Programme officiel français d'accompagnement à la relocation" },
      ],
      education: [
        {
          degree: "Diplôme d'Ingénieur (Bac+5) — Spécialisation INREV",
          institution: 'ISAMM — Institut Supérieur des Arts Multimédia de la Manouba',
          period: '2015 – 2018',
          focus: '3D temps réel, réalité virtuelle, game systems, génie logiciel',
        },
        {
          degree: 'Licence en Informatique Multimédia',
          institution: 'ISAMM — Institut Supérieur des Arts Multimédia de la Manouba',
          period: '2012 – 2015',
          focus: 'Développement multimédia, systèmes interactifs, arts numériques',
        },
      ],
    },
    contact: {
      label: 'Contact', title: 'Travaillons ensemble',
      subtitle: "Disponible immédiatement — ouvert au full remote ou à la relocalisation.",
      formTitle: 'Envoyer un message', nameLabel: 'Nom', emailLabel: 'Email', messageLabel: 'Message',
      namePlaceholder: 'Votre nom', emailPlaceholder: 'vous@email.com', messagePlaceholder: "Parlez-moi de l'opportunité…",
      submit: 'Envoyer le message', sentTitle: 'Message envoyé !', sentBody: "Merci de m'avoir contacté. Je vous répondrai rapidement.",
      links: [
        { label: 'LinkedIn', value: 'linkedin.com/in/saif-eddine-ben-achour', href: 'https://linkedin.com/in/saif-eddine-ben-achour', icon: 'li' },
        { label: 'Démo YouTube', value: 'Portfolio SgharToon', href: 'https://youtu.be/kp5x0duiZLI', icon: 'yt' },
        { label: 'Localisation', value: 'Tunis, Tunisie · Mobilité internationale', href: null, icon: 'loc' },
      ],
      downloads: [
        { label: 'Voir la démo portfolio', href: 'https://youtu.be/kp5x0duiZLI', download: false },
        { label: 'Télécharger le CV (PDF)', href: '/cv-saif-ben-achour.pdf', download: true },
      ],
    },
    footer: { name: 'Saif Eddine Ben Achour', role: 'Ingénieur Unity Systèmes · Tunis → France', built: 'Créé avec Angular' },
  },

  ar: {
    nav: { about: 'عني', skills: 'المهارات', projects: 'المشاريع', experience: 'الخبرة', contact: 'التواصل', connect: 'تواصل' },
    hero: {
      greeting: "مرحباً، أنا",
      roles: ['مهندس أنظمة Unity', 'مهندس Runtime وأدوات'],
      tagline: 'بناء معماريات تشغيل معيارية تعتمد على البيانات لـ Unity وWebGL والهاتف المحمول.<br>أكثر من 8 سنوات في تطوير أنظمة إنتاج — من الألعاب إلى الألعاب الجادة.',
      btnWork: 'اطّلع على أعمالي', btnContact: 'تواصل معي', btnPortfolio: 'ملف الأعمال', btnCV: 'السيرة الذاتية',
      location: 'تونس · منفتح على الانتقال إلى أي مكان في العالم', linkedin: 'LinkedIn', demo: 'عرض ملف الأعمال',
    },
    about: {
      label: 'نبذة عني',
      title: 'أنظمة تشغيل.<br>مستخدمون حقيقيون. إنتاج حقيقي.',
      body1: 'أنا <strong>مهندس أنظمة Unity</strong> مقيم في تونس مع أكثر من 8 سنوات من الخبرة في الإنتاج. تركيزي على: <strong>معماريات التشغيل المدفوعة بالبيانات</strong>، <strong>الأداء في البيئات ذات الذاكرة المحدودة</strong>، و<strong>الشبكات الفورية</strong> على Unity وWebGL والهاتف المحمول.',
      body2: 'أنا شريك مؤسس ومدير هندسة <strong>SgharToon</strong> — منصة علاجية حية منشورة على App Store وGoogle Play وWebGL. صمّمت كل طبقة: بيئة التشغيل المدفوعة بالبيانات التي تشغّل 170+ وحدة، والشبكات ذات السلطة على الخادم مع استرداد بالـSnapshot، وأنبوب الذاكرة الذي يحافظ على 60fps على الأجهزة المنخفضة المستوى، ولوحة تحكم Angular للمعالجين.',
      body3: 'أدرّس أيضاً <strong>C# وJava وUnity على مستوى الماجستير (ISAMM، جامعة منوبة)</strong>. قناعتي: <em>المعمارية الجيدة تجعل الشيء الخاطئ مستحيلاً هيكلياً، لا مجرد غير مستحسن</em>.',
      highlights: [
        'الإنتاج: 2,400+ مستخدم · 99.7% وقت تشغيل · 60fps على Android المنخفض',
        'محاضر على مستوى الماجستير: C# وJava وUnity (ISAMM، تونس)',
        'منفتح على الانتقال إلى أي مكان — خريج Soft Landing Marseille 2025',
      ],
      stats: [
        { value: '8+', label: 'سنوات خبرة' },
        { value: '170+', label: 'وحدة تفاعلية مُسلَّمة' },
        { value: '2,400+', label: 'مستخدم نشط في الإنتاج' },
        { value: '60+', label: 'متخصص رعاية صحية' },
      ],
      badge: { title: 'منصة SgharToon', sub: 'في الإنتاج · iOS · Android · WebGL' },
    },
    skills: {
      label: 'الخبرة', title: 'المهارات والتقنيات',
      subtitle: 'متخصص في أنظمة التشغيل والشبكات الفورية والبيئات ذات الذاكرة المحدودة عبر Unity وWebGL والهاتف المحمول.',
      categories: [
        {
          name: 'المكدس الأساسي', icon: '⚙️',
          skills: [
            { name: 'Unity (C#)', note: '8+ سنوات، إنتاج' },
            { name: 'WebGL', note: 'إنتاج · مستوى الجوال' },
            { name: 'Mobile (iOS/Android)', note: 'App Store & Play' },
            { name: 'Java', note: 'تدريس على مستوى الماجستير' },
            { name: 'Angular / TypeScript', note: 'لوحات تحكم' },
            { name: 'Socket.IO', note: 'لعب جماعي فوري' },
          ],
        },
        {
          name: 'المعمارية', icon: '🏗️',
          skills: [
            { name: 'Runtime مدفوع بالبيانات' },
            { name: 'Layered Component Systems' },
            { name: 'Session Lifecycle Management' },
            { name: 'Server-Authoritative Networking' },
            { name: 'Delta Sync & State Snapshots' },
            { name: 'Versioned Asset Pipelines' },
          ],
        },
        {
          name: 'الأداء', icon: '⚡',
          skills: [
            { name: 'Unity Profiler · تحسين GC' },
            { name: 'Object Pooling' },
            { name: 'هندسة الذاكرة (WebGL/mobile)' },
            { name: 'أنماط async · retry/timeout/fallback' },
            { name: '60fps مستقر على أجهزة منخفضة المستوى' },
          ],
        },
      ],
      languagesLabel: 'اللغات',
      languages: ['الفرنسية — لغة أم (C1)', 'العربية — لغة أم', 'الإنجليزية — مهني (B2+)'],
    },
    projects: {
      label: 'الأعمال', title: 'المشاريع والأنظمة',
      subtitle: 'كل نظام أدناه صُمِّم من مبادئ أولى — معمارية تفرض الصحة هيكلياً، لا بالاتفاقية.',
      featuredBadge: 'مشروع مميز', watchDemo: 'شاهد العرض',
      items: [
        {
          title: 'منصة SgharToon', subtitle: 'المهندس المعماري الرئيسي للأنظمة',
          description: 'منصة علاجية رقمية تربط الآباء والأطفال والمعالجين عبر مسارات رعاية منظّمة. بُنيت من الصفر بوصفي المهندس المعماري الوحيد.',
          highlights: [
            '170+ وحدة تفاعلية مُسلَّمة من بيئة تشغيل واحدة مدفوعة بالبيانات',
            'في الإنتاج: 2,400+ مستخدم نشط · 60+ متخصص رعاية صحية',
            'منشور على App Store (id1625583473) وGoogle Play وWebGL',
            '99.7% وقت تشغيل مقاس · 60fps مستقر على أجهزة Android منخفضة',
            'استرداد كامل عند إعادة الاتصال عبر Snapshots — لا فقدان بيانات',
            'لا توقفات GC في الحلقة الرئيسية (موثّق بـ Unity Profiler على 10k+ إطار)',
          ],
          tags: ['Unity', 'WebGL', 'C#', 'Angular', 'Socket.IO', 'Mobile'], demoUrl: 'https://youtu.be/kp5x0duiZLI', featured: true, accentColor: '#4f8ef7',
        },
        {
          title: 'طبقة الشبكة بسلطة الخادم', subtitle: 'هندسة الأنظمة',
          description: 'نظام شبكي مستقل عن وسيلة النقل حيث يحمل عميل المعالج سلطة حالة الجلسة. ينفّذ المزامنة التفاضلية مع استرداد كامل بالـSnapshot عند إعادة الاتصال، وجلسات متوازية دون تلوّث متقاطع.',
          highlights: [
            'سلطة المعالج مفروضة على طبقة المنطق',
            'مزامنة تفاضلية + استرداد كامل عند إعادة الاتصال',
            'جلسات معالج متوازية ومتزامنة',
            'لا تلوّث بين الجلسات',
          ],
          tags: ['Networking', 'C#', 'Socket.IO', 'State Management'], featured: false, accentColor: '#3ecf8e',
        },
        {
          title: 'محرك التشغيل ذو الذاكرة المحدودة', subtitle: 'هندسة الأداء',
          description: 'هندسة ذاكرة إنتاجية لـ WebGL وAndroid المنخفض. أنابيب التدمير المركزية تُلغي ارتفاعات التخصيص؛ فئات تحليل JSON مخصصة تحل اختناقات التحليل؛ تهيئة حتمية عبر 170+ وحدة.',
          highlights: [
            '60fps مستقر على أجهزة Android منخفضة (موثّق في الإنتاج)',
            'أنابيب تدمير مركزية · لا ارتفاعات تخصيص في الحلقة الرئيسية',
            'طبقة REST غير متزامنة مع retry وtimeout وfallback · 99.7% وقت تشغيل',
            'تهيئة حتمية للوحدة عبر 170+ متغيّر',
          ],
          tags: ['Unity', 'WebGL', 'Mobile', 'Performance', 'Memory'], featured: false, accentColor: '#f59e0b',
        },
      ],
    },
    experience: {
      label: 'المسيرة', title: 'الخبرة والتعليم',
      subtitle: 'بناء أنظمة ذات أهمية — من التصميم المعماري إلى النشر في بيئة الإنتاج.',
      currentBadge: 'حالياً', teachingLabel: 'التدريس', recognitionLabel: 'التكريمات', educationLabel: 'التعليم',
      items: [
        {
          role: 'شريك مؤسس ومهندس Unity رئيسي', company: 'SgharToon', location: 'تونس', period: 'أكت. 2017 – ديس. 2025', current: false,
          description: 'المهندس المعماري الرئيسي لمنصة SgharToon — نظام علاجي رقمي للأطفال ذوي صعوبات التعلم. مسؤول عن المعمارية التقنية الكاملة من التصميم الأولي حتى النشر.',
          achievements: [
            'بناء بيئة تشغيل مدفوعة بالبيانات تشغّل 170+ وحدة تفاعلية من قاعدة كود واحدة',
            'منصة حية تخدم 2,400+ مستخدم نشط و60+ متخصص رعاية صحية',
            'منشورة على App Store (id1625583473) وGoogle Play وWebGL',
            'هندسة أنبوب ذاكرة بدون توقفات GC لـ WebGL وAndroid المنخفض',
            'شبكات server-authoritative مع استرداد كامل عند إعادة الاتصال عبر Snapshots',
            '99.7% وقت تشغيل مقاس في الإنتاج',
            'تصميم ودمج لوحة تحكم Angular للإشراف الفوري للمعالجين',
          ],
          tags: ['Unity', 'C#', 'WebGL', 'Angular', 'Socket.IO', 'Architecture'],
        },
        {
          role: 'مطور C# محاكاة وتكامل', company: 'Badiya — تطبيق WebGL تفاعلي', location: '', period: '2022 – 2023', current: false,
          description: 'تطبيق WebGL مع محرك محاكاة قابل للضبط وقيود أداء قريبة من السياق المدمج/الجوّال.',
          achievements: [
            'تصميم محرك محاكاة قابل للضبط: منطق سلوكي معامِلي، توليد سيناريوهات عند الطلب — معمارية API-driven قابلة للتوسع',
            '60fps مستقر على المتصفحات متوسطة المستوى عبر تحسين أنبوب عرض Unity',
            'تنفيذ جسر C#–JavaScript للتشغيل البيني الفوري مع طبقة الويب',
          ],
          tags: ['Unity', 'WebGL', 'C#', 'Simulation', 'JavaScript'],
        },
        {
          role: 'مشروع عميل — عارض ثلاثي الأبعاد WebGL صناعي', company: 'حل إدارة الجودة الصناعية', location: '', period: '2019', current: false,
          description: 'تحميل وتصوير نماذج CAD بصيغة STP في المتصفح عبر Unity WebGL مع نظام ملاحة كاملة للكاميرا ونظام تعليق هندسي.',
          achievements: [
            'تحميل نماذج CAD وتصوير ملفات STP فوري في Unity WebGL',
            'نظام ملاحة الكاميرا: تكبير، دوران، تحريك',
            'نظام رسم أشكال هندسية: نقاط، خطوط، مضلعات',
            'أعلام مؤشر مثبّتة مباشرة على أسطح النموذج ثلاثي الأبعاد',
          ],
          tags: ['Unity', 'WebGL', 'C#', '3D Viewer', 'CAD'],
        },
      ],
      teaching: [
        {
          role: 'محاضر — تطوير الألعاب وهندسة البرمجيات',
          institution: 'ISAMM — جامعة منوبة',
          level: 'مستوى الماجستير · C# وJava وUnity',
          period: '2022 – 2024',
        },
        {
          role: 'مدرّب Unity 2D',
          institution: 'WeCode Land',
          level: 'معسكر مكثّف · من الصفر إلى نموذج أولي في 8 أسابيع',
          period: '2022 – 2023',
        },
      ],
      recognition: [
        { title: 'Google for Startups', year: '2022', context: 'برنامج التسريع في تونس' },
        { title: 'Westerwelle Foundation', year: '2024', context: 'زمالة Young Founders، برلين' },
        { title: 'LEAP Riyadh', year: '2025', context: 'أكبر حدث تقني في منطقة MENA — عارض مختار' },
        { title: 'Soft Landing Marseille', year: '2025', context: 'برنامج الانتقال الرسمي الفرنسي للشركات الناشئة' },
      ],
      education: [
        {
          degree: 'شهادة مهندس (Bac+5) — تخصص INREV',
          institution: 'ISAMM — المعهد العالي للفنون الوسائطية بمنوبة',
          period: '2015 – 2018',
          focus: 'ثلاثية الأبعاد الفورية، الواقع الافتراضي، أنظمة الألعاب، هندسة البرمجيات',
        },
        {
          degree: 'إجازة في الإعلامية الوسائطية',
          institution: 'ISAMM — المعهد العالي للفنون الوسائطية بمنوبة',
          period: '2012 – 2015',
          focus: 'التطوير الوسائطي، الأنظمة التفاعلية، الفنون الرقمية',
        },
      ],
    },
    contact: {
      label: 'التواصل', title: 'لنعمل معاً',
      subtitle: 'متاح فوراً — منفتح على العمل عن بُعد أو الانتقال.',
      formTitle: 'أرسل رسالة', nameLabel: 'الاسم', emailLabel: 'البريد الإلكتروني', messageLabel: 'الرسالة',
      namePlaceholder: 'اسمك', emailPlaceholder: 'بريدك@الإلكتروني', messagePlaceholder: 'أخبرني عن الفرصة...',
      submit: 'إرسال الرسالة', sentTitle: 'تم إرسال الرسالة!', sentBody: 'شكراً على تواصلك. سأعود إليك قريباً.',
      links: [
        { label: 'LinkedIn', value: 'linkedin.com/in/saif-eddine-ben-achour', href: 'https://linkedin.com/in/saif-eddine-ben-achour', icon: 'li' },
        { label: 'عرض YouTube', value: 'محفظة SgharToon', href: 'https://youtu.be/kp5x0duiZLI', icon: 'yt' },
        { label: 'الموقع', value: 'تونس · منفتح على الانتقال إلى أي مكان', href: null, icon: 'loc' },
      ],
      downloads: [
        { label: 'مشاهدة عرض ملف الأعمال', href: 'https://youtu.be/kp5x0duiZLI', download: false },
        { label: 'تحميل السيرة الذاتية (PDF)', href: '/cv-saif-ben-achour.pdf', download: true },
      ],
    },
    footer: { name: 'سيف الدين بن عاشور', role: 'مهندس أنظمة Unity · تونس → فرنسا', built: 'أُنشئ بـ Angular' },
  },
};

export type Lang = 'en' | 'fr' | 'ar';
export type Translation = typeof translations.en;
