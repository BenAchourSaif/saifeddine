export const translations = {
  en: {
    nav: { about: 'About', skills: 'Skills', projects: 'Projects', experience: 'Experience', contact: 'Contact', connect: 'Connect' },
    hero: {
      greeting: "Hi, I'm",
      roles: ['Senior Unity Systems Engineer', 'Runtime Architecture Specialist', 'WebGL & Mobile Expert', 'Therapeutic Platform Builder'],
      tagline: 'Building modular, data-driven runtime architectures.<br>Specializing in therapeutic platforms for children with learning disorders.',
      btnWork: 'View My Work', btnContact: 'Get In Touch', btnPortfolio: 'Portfolio', btnCV: 'CV',
      location: 'Tunis, Tunisia · Open to Relocation', linkedin: 'LinkedIn', demo: 'Portfolio Demo',
    },
    about: {
      label: 'About Me',
      title: 'Systems thinker.<br>Platform builder.',
      body1: "I'm a Senior Unity Systems Engineer based in Tunis, Tunisia. My work sits at the intersection of <strong>runtime architecture</strong>, <strong>therapeutic technology</strong>, and <strong>memory-constrained environments</strong>.",
      body2: "Over the past several years, I've been the lead architect behind <strong>SgharToon</strong> — a digital therapeutic platform for children with learning disorders. I designed every layer of its architecture: from the modular component model and session lifecycle, to the therapist-authoritative networking system and WebGL memory pipeline.",
      body3: "My philosophy is simple: <em>clinical requirements should be enforced structurally, not by convention</em>. The architecture should make the wrong thing impossible, not just discouraged.",
      highlights: [
        'Therapist-Authoritative · Transport-Agnostic · Data-Driven',
        'Zero mid-session GC stalls, stable 60fps on WebGL',
        'Open to relocation — Tunis, Tunisia',
      ],
      stats: [
        { value: '8+', label: 'Years Experience' }, { value: '87', label: 'Game Variants Built' },
        { value: '3', label: 'Platform Roles' }, { value: '0', label: 'Mid-Session GC Stalls' },
      ],
      badge: { title: 'SgharToon Platform', sub: 'v9.0 — Production' },
    },
    skills: {
      label: 'Expertise', title: 'Skills & Technologies',
      subtitle: 'Focused on runtime systems, real-time networking, and memory-constrained environments across Unity, WebGL, and mobile.',
      categories: [
        { name: 'Core Stack', icon: '⚙️', skills: [{ name: 'Unity (C#)', level: 98 }, { name: 'WebGL', level: 92 }, { name: 'Mobile (iOS/Android)', level: 88 }, { name: 'Angular / TypeScript', level: 80 }, { name: 'Socket.IO', level: 85 }] },
        { name: 'Architecture', icon: '🏗️', skills: [{ name: 'Layered Component Systems', level: 97 }, { name: 'Data-Driven Runtime', level: 95 }, { name: 'Session Lifecycle Management', level: 96 }, { name: 'Transport-Agnostic Networking', level: 90 }, { name: 'Delta Sync & Snapshots', level: 92 }] },
        { name: 'Performance', icon: '⚡', skills: [{ name: 'Memory Engineering', level: 94 }, { name: 'GC Optimization', level: 95 }, { name: 'Object Pooling', level: 92 }, { name: 'JSON Deserialization', level: 88 }, { name: 'Stable 60fps (WebGL)', level: 93 }] },
      ],
      languagesLabel: 'Languages',
      languages: ['French', 'English', 'Arabic', 'Tunisian Dialect'],
    },
    projects: {
      label: 'Work', title: 'Projects & Systems',
      subtitle: 'Every system below was designed from first principles — architecture that enforces correctness structurally, not by convention.',
      featuredBadge: 'Featured Project', watchDemo: 'Watch Demo',
      items: [
        {
          title: 'SgharToon Platform', subtitle: 'Lead Systems Architect',
          description: 'A digital therapeutic platform connecting parents, children, and therapists through structured care pathways. Built from scratch as the sole systems architect.',
          highlights: ['87 therapeutic game variants from a single codebase', 'Modular Data-Driven Runtime with 30–100+ components per game', 'Network-resilient evaluation with auto-save per question', 'Therapist-directed multiplayer with zero scene reloads', 'Full reconnection recovery via state snapshots', 'Zero mid-session GC stalls, stable 60fps on WebGL'],
          tags: ['Unity', 'WebGL', 'C#', 'Angular', 'Socket.IO', 'Mobile'], demoUrl: 'https://youtu.be/kp5x0duiZLI', featured: true, accentColor: '#4f8ef7',
        },
        {
          title: 'Therapist-Authoritative Network Layer', subtitle: 'Systems Engineering',
          description: "Transport-agnostic networking system where the therapist's actions are authoritative. Implements delta sync with full snapshot reconnection and parallel concurrent sessions with zero cross-contamination.",
          highlights: ['Therapist authority enforced at Logic Layer', 'Delta sync + full snapshot reconnection', 'Parallel concurrent therapist sessions', 'Zero cross-session contamination'],
          tags: ['Networking', 'C#', 'Socket.IO', 'State Management'], featured: false, accentColor: '#3ecf8e',
        },
        {
          title: 'Memory-Constrained Runtime Engine', subtitle: 'Performance Engineering',
          description: 'Production memory engineering system for WebGL and mobile. Centralized destruction pipelines eliminate allocation spikes, with dedicated deserialization classes resolving JSON parsing bottlenecks.',
          highlights: ['Centralized destruction pipelines', 'Dedicated JSON deserialization classes', 'IdentityComponent-first initialization pattern', 'Deterministic init across all 87 variants'],
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
          role: 'Senior Unity Systems Engineer', company: 'SgharToon', location: 'Tunis, Tunisia', period: '2020 – Present', current: true,
          description: 'Lead systems architect on the SgharToon Platform — a therapeutic digital system for children with learning disorders. Responsible for the full technical architecture from initial design to production deployment.',
          achievements: ['Designed and implemented the Modular Data-Driven Runtime Architecture', 'Built 87 therapeutic game variants from a single unified codebase', 'Engineered zero-GC-stall memory systems for WebGL and mobile', 'Developed transport-agnostic networking with therapist-authoritative sessions', 'Achieved deterministic session management across all platform variants', 'Integrated Angular web dashboard for real-time therapist supervision'],
          tags: ['Unity', 'C#', 'WebGL', 'Angular', 'Socket.IO', 'Architecture'],
        },
        {
          role: 'Client Project — Industrial 3D WebGL Viewer', company: 'Industrial Quality Management Solution', location: '', period: '2019', current: false,
          description: 'Loading and visualization of CAD models (STP format) in the browser via Unity WebGL — with full camera navigation and a geometric annotation system.',
          achievements: ['CAD model loading and real-time visualization of STP files in Unity WebGL', 'Camera navigation system: zoom, rotation, pan', 'Geometric primitive drawing system: points, lines, polygons', 'Indicator flags placed directly on 3D model surfaces'],
          tags: ['Unity', 'WebGL', 'C#', '3D Viewer', 'CAD'],
        },
      ],
      teaching: [
        { role: 'Lecturer — Video Game Development', institution: 'ISAMM – Univ. de la Manouba', level: "Master's · Unity, C#, Java", period: '2022 – 2024' },
        { role: 'Unity 2D Trainer', institution: 'WeCode Land', level: 'Unity 2D Training', period: '2022 – 2023' },
      ],
      recognition: [{ title: 'Google for Startups', year: '2022' }, { title: 'Westerwelle Foundation', year: '2024' }, { title: 'LEAP Riyadh', year: '2025' }, { title: 'Soft Landing Marseille', year: '2025' }],
      education: [{ degree: 'Engineering Degree — Computer Science', institution: 'Tunisia', period: '2015 – 2020', focus: 'Software engineering, systems design, algorithms' }],
    },
    contact: {
      label: 'Contact', title: "Let's Work Together",
      subtitle: 'Open to senior engineering roles, architecture consulting, and relocation. Feel free to reach out.',
      formTitle: 'Send a Message', nameLabel: 'Name', emailLabel: 'Email', messageLabel: 'Message',
      namePlaceholder: 'Your name', emailPlaceholder: 'your@email.com', messagePlaceholder: 'Tell me about the opportunity…',
      submit: 'Send Message', sentTitle: 'Message sent!', sentBody: "Thanks for reaching out. I'll get back to you shortly.",
      links: [
        { label: 'LinkedIn', value: 'linkedin.com/in/saif-eddine-ben-achour', href: 'https://linkedin.com/in/saif-eddine-ben-achour', icon: 'li' },
        { label: 'YouTube Demo', value: 'SgharToon Portfolio', href: 'https://youtu.be/kp5x0duiZLI', icon: 'yt' },
        { label: 'Location', value: 'Tunis, Tunisia · Open to Relocation', href: null, icon: 'loc' },
      ],
      downloads: [
        { label: 'View Portfolio', href: 'https://drive.google.com/drive/folders/1QMaTn0J3C9qaPpUFgWIoHplKZEC_4XZr', download: false },
        { label: 'Download CV', href: 'https://drive.google.com/drive/folders/1QMaTn0J3C9qaPpUFgWIoHplKZEC_4XZr', download: false },
      ],
    },
    footer: { name: 'Saif Eddine Ben Achour', role: 'Senior Unity Systems Engineer', built: 'Built with Angular' },
  },

  fr: {
    nav: { about: 'À propos', skills: 'Compétences', projects: 'Projets', experience: 'Expérience', contact: 'Contact', connect: 'Se connecter' },
    hero: {
      greeting: "Bonjour, je suis",
      roles: ['Ingénieur Unity Senior', 'Spécialiste Architecture Runtime', 'Expert WebGL & Mobile', 'Créateur de Plateformes Thérapeutiques'],
      tagline: "Conception d'architectures runtime modulaires et orientées données.<br>Spécialisé dans les plateformes thérapeutiques pour enfants ayant des troubles d'apprentissage.",
      btnWork: 'Voir mes travaux', btnContact: 'Me contacter', btnPortfolio: 'Portfolio', btnCV: 'CV',
      location: 'Tunis, Tunisie · Ouvert aux déplacements', linkedin: 'LinkedIn', demo: 'Démo Portfolio',
    },
    about: {
      label: 'À propos',
      title: 'Penseur systémique.<br>Créateur de plateformes.',
      body1: "Je suis un Ingénieur Unity Senior basé à Tunis, Tunisie. Mon travail se situe à l'intersection de l'<strong>architecture runtime</strong>, de la <strong>technologie thérapeutique</strong> et des <strong>environnements à mémoire contrainte</strong>.",
      body2: "Depuis plusieurs années, je suis l'architecte principal de <strong>SgharToon</strong> — une plateforme thérapeutique numérique pour les enfants ayant des troubles d'apprentissage. J'ai conçu chaque couche de son architecture : du modèle de composants modulaires et du cycle de vie des sessions, jusqu'au système réseau à autorité thérapeute et au pipeline mémoire WebGL.",
      body3: "Ma philosophie est simple : <em>les exigences cliniques doivent être imposées structurellement, non par convention</em>. L'architecture doit rendre la chose incorrecte impossible, pas seulement déconseillée.",
      highlights: ["Autorité Thérapeute · Indépendant du Transport · Orienté Données", "Zéro gel GC en cours de session, 60fps stable sur WebGL", "Ouvert aux déplacements — Tunis, Tunisie"],
      stats: [{ value: '8+', label: "Années d'expérience" }, { value: '87', label: 'Variantes créées' }, { value: '3', label: 'Rôles plateforme' }, { value: '0', label: 'Gels GC en session' }],
      badge: { title: 'Plateforme SgharToon', sub: 'v9.0 — Production' },
    },
    skills: {
      label: 'Expertise', title: 'Compétences & Technologies',
      subtitle: "Axé sur les systèmes runtime, le réseau en temps réel et les environnements à mémoire contrainte, à travers Unity, WebGL et mobile.",
      categories: [
        { name: 'Pile Technique', icon: '⚙️', skills: [{ name: 'Unity (C#)', level: 98 }, { name: 'WebGL', level: 92 }, { name: 'Mobile (iOS/Android)', level: 88 }, { name: 'Angular / TypeScript', level: 80 }, { name: 'Socket.IO', level: 85 }] },
        { name: 'Architecture', icon: '🏗️', skills: [{ name: 'Layered Component Systems', level: 97 }, { name: 'Data-Driven Runtime', level: 95 }, { name: 'Session Lifecycle Management', level: 96 }, { name: 'Transport-Agnostic Networking', level: 90 }, { name: 'Delta Sync & Snapshots', level: 92 }] },
        { name: 'Performance', icon: '⚡', skills: [{ name: 'Memory Engineering', level: 94 }, { name: 'GC Optimization', level: 95 }, { name: 'Object Pooling', level: 92 }, { name: 'JSON Deserialization', level: 88 }, { name: 'Stable 60fps (WebGL)', level: 93 }] },
      ],
      languagesLabel: 'Langues',
      languages: ['Français', 'Anglais', 'Arabe', 'Dialecte Tunisien'],
    },
    projects: {
      label: 'Travaux', title: 'Projets & Systèmes',
      subtitle: "Chaque système ci-dessous a été conçu à partir de premiers principes — une architecture qui impose la justesse structurellement, non par convention.",
      featuredBadge: 'Projet Phare', watchDemo: 'Voir la démo',
      items: [
        {
          title: 'Plateforme SgharToon', subtitle: 'Architecte Systèmes Principal',
          description: "Une plateforme thérapeutique numérique connectant parents, enfants et thérapeutes via des parcours de soins structurés. Conçue de zéro en tant que seul architecte systèmes.",
          highlights: ['87 variantes de jeux thérapeutiques depuis une seule base de code', 'Runtime Modulaire Orienté Données avec 30 à 100+ composants par jeu', 'Évaluation résistante au réseau avec sauvegarde automatique par question', 'Multijoueur dirigé par le thérapeute sans rechargement de scène', "Reprise complète sur reconnexion via instantanés d'état", 'Zéro gel GC en session, 60fps stable sur WebGL'],
          tags: ['Unity', 'WebGL', 'C#', 'Angular', 'Socket.IO', 'Mobile'], demoUrl: 'https://youtu.be/kp5x0duiZLI', featured: true, accentColor: '#4f8ef7',
        },
        {
          title: 'Couche Réseau à Autorité Thérapeute', subtitle: 'Ingénierie Systèmes',
          description: "Système réseau indépendant du transport où les actions du thérapeute font autorité. Sync delta avec reconnexion par instantané complet et sessions concurrentes sans contamination croisée.",
          highlights: ['Autorité thérapeute imposée à la couche logique', 'Sync delta + reconnexion par instantané complet', 'Sessions thérapeutes concurrentes parallèles', 'Zéro contamination entre sessions'],
          tags: ['Networking', 'C#', 'Socket.IO', 'State Management'], featured: false, accentColor: '#3ecf8e',
        },
        {
          title: 'Moteur Runtime à Mémoire Contrainte', subtitle: 'Ingénierie Performance',
          description: "Système d'ingénierie mémoire pour WebGL et mobile. Les pipelines de destruction centralisés éliminent les pics d'allocation, avec des classes de désérialisation dédiées résolvant les goulots JSON.",
          highlights: ['Pipelines de destruction centralisés', 'Classes de désérialisation JSON dédiées', "Pattern d'initialisation IdentityComponent-first", 'Init déterministe sur les 87 variantes'],
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
          role: 'Ingénieur Unity Senior', company: 'SgharToon', location: 'Tunis, Tunisie', period: '2020 – Présent', current: true,
          description: "Architecte systèmes principal de SgharToon — un système thérapeutique numérique pour les enfants ayant des troubles d'apprentissage. Responsable de l'architecture technique complète.",
          achievements: ["Conception et implémentation de l'Architecture Runtime Modulaire Orientée Données", '87 variantes de jeux depuis une seule base de code', "Ingénierie de systèmes mémoire sans gel GC pour WebGL et mobile", "Développement du réseau indépendant du transport avec sessions à autorité thérapeute", "Gestion déterministe des sessions sur toutes les variantes", "Intégration du tableau de bord Angular pour la supervision en temps réel"],
          tags: ['Unity', 'C#', 'WebGL', 'Angular', 'Socket.IO', 'Architecture'],
        },
        {
          role: 'Projet Client — Visualiseur 3D WebGL Industriel', company: 'Solution Contrôle Qualité Industriel', location: '', period: '2019', current: false,
          description: "Chargement et visualisation de modèles CAO (format STP) dans le navigateur via Unity WebGL — avec navigation caméra complète et système d'annotation géométrique.",
          achievements: ['Chargement et visualisation en temps réel de fichiers STP dans Unity WebGL', 'Navigation caméra : zoom, rotation, panoramique', 'Dessin de primitives géométriques : points, lignes, polygones', "Indicateurs positionnés directement sur les surfaces du modèle 3D"],
          tags: ['Unity', 'WebGL', 'C#', '3D Viewer', 'CAD'],
        },
      ],
      teaching: [
        { role: 'Chargé de cours — Développement Jeux Vidéo', institution: 'ISAMM – Univ. de la Manouba', level: "Master · Unity, C#, Java", period: '2022 – 2024' },
        { role: 'Formateur Unity 2D', institution: 'WeCode Land', level: 'Formation Unity 2D', period: '2022 – 2023' },
      ],
      recognition: [{ title: 'Google for Startups', year: '2022' }, { title: 'Westerwelle Foundation', year: '2024' }, { title: 'LEAP Riyadh', year: '2025' }, { title: 'Soft Landing Marseille', year: '2025' }],
      education: [{ degree: "Diplôme d'Ingénieur — Informatique", institution: 'Tunisie', period: '2015 – 2020', focus: "Génie logiciel, conception de systèmes, algorithmique" }],
    },
    contact: {
      label: 'Contact', title: 'Travaillons ensemble',
      subtitle: "Ouvert aux postes d'ingénierie senior, au conseil en architecture et aux déplacements. N'hésitez pas à me contacter.",
      formTitle: 'Envoyer un message', nameLabel: 'Nom', emailLabel: 'Email', messageLabel: 'Message',
      namePlaceholder: 'Votre nom', emailPlaceholder: 'vous@email.com', messagePlaceholder: "Parlez-moi de l'opportunité…",
      submit: 'Envoyer le message', sentTitle: 'Message envoyé !', sentBody: "Merci de m'avoir contacté. Je vous répondrai rapidement.",
      links: [
        { label: 'LinkedIn', value: 'linkedin.com/in/saif-eddine-ben-achour', href: 'https://linkedin.com/in/saif-eddine-ben-achour', icon: 'li' },
        { label: 'Démo YouTube', value: 'Portfolio SgharToon', href: 'https://youtu.be/kp5x0duiZLI', icon: 'yt' },
        { label: 'Localisation', value: 'Tunis, Tunisie · Ouvert aux déplacements', href: null, icon: 'loc' },
      ],
      downloads: [
        { label: 'Voir le Portfolio', href: 'https://drive.google.com/drive/folders/1QMaTn0J3C9qaPpUFgWIoHplKZEC_4XZr', download: false },
        { label: 'Télécharger le CV', href: 'https://drive.google.com/drive/folders/1QMaTn0J3C9qaPpUFgWIoHplKZEC_4XZr', download: false },
      ],
    },
    footer: { name: 'Saif Eddine Ben Achour', role: 'Ingénieur Unity Senior', built: 'Créé avec Angular' },
  },

  ar: {
    nav: { about: 'عني', skills: 'المهارات', projects: 'المشاريع', experience: 'الخبرة', contact: 'التواصل', connect: 'تواصل' },
    hero: {
      greeting: "مرحباً، أنا",
      roles: ['مهندس أنظمة Unity أول', 'متخصص في هندسة بيئات التشغيل', 'خبير WebGL والتطبيقات المحمولة', 'بانٍ لمنصات علاجية'],
      tagline: 'بناء معماريات تشغيل معيارية تعتمد على البيانات.<br>متخصص في المنصات العلاجية للأطفال ذوي صعوبات التعلم.',
      btnWork: 'اطّلع على أعمالي', btnContact: 'تواصل معي', btnPortfolio: 'ملف الأعمال', btnCV: 'السيرة الذاتية',
      location: 'تونس · منفتح على الانتقال', linkedin: 'LinkedIn', demo: 'عرض ملف الأعمال',
    },
    about: {
      label: 'نبذة عني',
      title: 'مفكّر في الأنظمة.<br>بانٍ للمنصات.',
      body1: 'أنا مهندس أنظمة Unity أول مقيم في تونس. يقع عملي عند تقاطع <strong>هندسة بيئة التشغيل</strong> و<strong>التقنية العلاجية</strong> و<strong>البيئات ذات الذاكرة المحدودة</strong>.',
      body2: 'على مدى السنوات الماضية، كنت المهندس المعماري الرئيسي لـ <strong>SgharToon</strong> — منصة علاجية رقمية للأطفال ذوي صعوبات التعلم. صمّمت كل طبقة من طبقاتها: من نموذج المكوّنات المعيارية ودورة حياة الجلسات، إلى نظام الشبكات ذي السلطة العلاجية وأنبوب الذاكرة WebGL.',
      body3: 'فلسفتي بسيطة: <em>يجب أن تُفرض المتطلبات السريرية هيكلياً، لا بالاتفاقية</em>. يجب أن تجعل المعمارية الشيء الخاطئ مستحيلاً، لا مجرد غير مستحسن.',
      highlights: ['سلطة المعالج · مستقل عن وسيلة النقل · مدفوع بالبيانات', 'لا توقفات GC أثناء الجلسة، 60fps مستقر على WebGL', 'منفتح على الانتقال — تونس'],
      stats: [{ value: '8+', label: 'سنوات خبرة' }, { value: '87', label: 'نسخة لعبة مطوّرة' }, { value: '3', label: 'أدوار على المنصة' }, { value: '0', label: 'توقفات GC في الجلسة' }],
      badge: { title: 'منصة SgharToon', sub: 'v9.0 — في الإنتاج' },
    },
    skills: {
      label: 'الخبرة', title: 'المهارات والتقنيات',
      subtitle: 'متخصص في أنظمة التشغيل والشبكات الفورية والبيئات ذات الذاكرة المحدودة عبر Unity وWebGL والهاتف المحمول.',
      categories: [
        { name: 'المكدس الأساسي', icon: '⚙️', skills: [{ name: 'Unity (C#)', level: 98 }, { name: 'WebGL', level: 92 }, { name: 'Mobile (iOS/Android)', level: 88 }, { name: 'Angular / TypeScript', level: 80 }, { name: 'Socket.IO', level: 85 }] },
        { name: 'المعمارية', icon: '🏗️', skills: [{ name: 'Layered Component Systems', level: 97 }, { name: 'Data-Driven Runtime', level: 95 }, { name: 'Session Lifecycle Management', level: 96 }, { name: 'Transport-Agnostic Networking', level: 90 }, { name: 'Delta Sync & Snapshots', level: 92 }] },
        { name: 'الأداء', icon: '⚡', skills: [{ name: 'Memory Engineering', level: 94 }, { name: 'GC Optimization', level: 95 }, { name: 'Object Pooling', level: 92 }, { name: 'JSON Deserialization', level: 88 }, { name: 'Stable 60fps (WebGL)', level: 93 }] },
      ],
      languagesLabel: 'اللغات',
      languages: ['الفرنسية', 'الإنجليزية', 'العربية', 'الدارجة التونسية'],
    },
    projects: {
      label: 'الأعمال', title: 'المشاريع والأنظمة',
      subtitle: 'كل نظام أدناه صُمِّم من مبادئ أولى — معمارية تفرض الصحة هيكلياً، لا بالاتفاقية.',
      featuredBadge: 'مشروع مميز', watchDemo: 'شاهد العرض',
      items: [
        {
          title: 'منصة SgharToon', subtitle: 'المهندس المعماري الرئيسي للأنظمة',
          description: 'منصة علاجية رقمية تربط الآباء والأطفال والمعالجين عبر مسارات رعاية منظّمة. بُنيت من الصفر بوصفي المهندس المعماري الوحيد.',
          highlights: ['87 نسخة لعبة علاجية من قاعدة كود واحدة', 'بيئة تشغيل معيارية مدفوعة بالبيانات مع 30–100+ مكوّن لكل لعبة', 'تقييم متحمّل للشبكة مع حفظ تلقائي لكل سؤال', 'لعب جماعي يديره المعالج دون إعادة تحميل المشهد', 'استرداد كامل عند إعادة الاتصال عبر لقطات الحالة', 'لا توقفات GC أثناء الجلسة، 60fps مستقر على WebGL'],
          tags: ['Unity', 'WebGL', 'C#', 'Angular', 'Socket.IO', 'Mobile'], demoUrl: 'https://youtu.be/kp5x0duiZLI', featured: true, accentColor: '#4f8ef7',
        },
        {
          title: 'طبقة الشبكة بسلطة المعالج', subtitle: 'هندسة الأنظمة',
          description: 'نظام شبكي مستقل عن وسيلة النقل حيث تكون أفعال المعالج ذات سلطة. ينفّذ المزامنة التفاضلية مع استرداد كامل وجلسات متوازية دون تلوّث متقاطع.',
          highlights: ['سلطة المعالج مفروضة على طبقة المنطق', 'مزامنة تفاضلية + استرداد كامل عند إعادة الاتصال', 'جلسات معالج متوازية ومتزامنة', 'لا تلوّث بين الجلسات'],
          tags: ['Networking', 'C#', 'Socket.IO', 'State Management'], featured: false, accentColor: '#3ecf8e',
        },
        {
          title: 'محرك التشغيل ذو الذاكرة المحدودة', subtitle: 'هندسة الأداء',
          description: 'نظام هندسة الذاكرة لبيئات WebGL والهاتف المحمول. أنابيب التدمير المركزية تُلغي ارتفاعات التخصيص، وفئات التحليل المخصصة تحل اختناقات JSON.',
          highlights: ['أنابيب تدمير مركزية', 'فئات تحليل JSON مخصصة', 'نمط تهيئة IdentityComponent-first', 'تهيئة حتمية عبر 87 نسخة'],
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
          role: 'مهندس أنظمة Unity أول', company: 'SgharToon', location: 'تونس', period: '2020 – الحاضر', current: true,
          description: 'المهندس المعماري الرئيسي لمنصة SgharToon — نظام علاجي رقمي للأطفال ذوي صعوبات التعلم. مسؤول عن المعمارية التقنية الكاملة من التصميم الأولي حتى النشر.',
          achievements: ['تصميم وتنفيذ المعمارية المعيارية المدفوعة بالبيانات', '87 نسخة لعبة علاجية من قاعدة كود موحّدة', 'هندسة أنظمة ذاكرة بدون توقفات GC لـ WebGL والهاتف المحمول', 'تطوير شبكة مستقلة عن وسيلة النقل مع جلسات بسلطة المعالج', 'إدارة جلسات حتمية عبر جميع نسخ المنصة', 'دمج لوحة تحكم Angular للإشراف الفوري'],
          tags: ['Unity', 'C#', 'WebGL', 'Angular', 'Socket.IO', 'Architecture'],
        },
        {
          role: 'مشروع عميل — عارض ثلاثي الأبعاد WebGL صناعي', company: 'حل إدارة الجودة الصناعية', location: '', period: '2019', current: false,
          description: 'تحميل وتصوير نماذج CAD بصيغة STP في المتصفح عبر Unity WebGL مع نظام ملاحة كاملة للكاميرا ونظام تعليق هندسي.',
          achievements: ['تحميل نماذج CAD وتصوير ملفات STP فوري في Unity WebGL', 'نظام ملاحة الكاميرا: تكبير، دوران، تحريك', 'نظام رسم أشكال هندسية: نقاط، خطوط، مضلعات', 'أعلام مؤشر مثبّتة مباشرة على أسطح النموذج ثلاثي الأبعاد'],
          tags: ['Unity', 'WebGL', 'C#', '3D Viewer', 'CAD'],
        },
      ],
      teaching: [
        { role: 'محاضر — تطوير ألعاب الفيديو', institution: 'ISAMM – جامعة منوبة', level: "ماستر · Unity, C#, Java", period: '2022 – 2024' },
        { role: 'مدرّب Unity 2D', institution: 'WeCode Land', level: 'تدريب Unity 2D', period: '2022 – 2023' },
      ],
      recognition: [{ title: 'Google for Startups', year: '2022' }, { title: 'Westerwelle Foundation', year: '2024' }, { title: 'LEAP Riyadh', year: '2025' }, { title: 'Soft Landing Marseille', year: '2025' }],
      education: [{ degree: 'شهادة مهندس — علوم الحاسوب', institution: 'تونس', period: '2015 – 2020', focus: 'هندسة البرمجيات، تصميم الأنظمة، الخوارزميات' }],
    },
    contact: {
      label: 'التواصل', title: 'لنعمل معاً',
      subtitle: 'منفتح على أدوار الهندسة الأولى، والاستشارة المعمارية، والانتقال. لا تتردد في التواصل.',
      formTitle: 'أرسل رسالة', nameLabel: 'الاسم', emailLabel: 'البريد الإلكتروني', messageLabel: 'الرسالة',
      namePlaceholder: 'اسمك', emailPlaceholder: 'بريدك@الإلكتروني', messagePlaceholder: 'أخبرني عن الفرصة...',
      submit: 'إرسال الرسالة', sentTitle: 'تم إرسال الرسالة!', sentBody: 'شكراً على تواصلك. سأعود إليك قريباً.',
      links: [
        { label: 'LinkedIn', value: 'linkedin.com/in/saif-eddine-ben-achour', href: 'https://linkedin.com/in/saif-eddine-ben-achour', icon: 'li' },
        { label: 'عرض YouTube', value: 'محفظة SgharToon', href: 'https://youtu.be/kp5x0duiZLI', icon: 'yt' },
        { label: 'الموقع', value: 'تونس · منفتح على الانتقال', href: null, icon: 'loc' },
      ],
      downloads: [
        { label: 'عرض ملف الأعمال', href: 'https://drive.google.com/drive/folders/1QMaTn0J3C9qaPpUFgWIoHplKZEC_4XZr', download: false },
        { label: 'تحميل السيرة الذاتية', href: 'https://drive.google.com/drive/folders/1QMaTn0J3C9qaPpUFgWIoHplKZEC_4XZr', download: false },
      ],
    },
    footer: { name: 'سيف الدين بن عاشور', role: 'مهندس أنظمة Unity أول', built: 'أُنشئ بـ Angular' },
  },
};

export type Lang = 'en' | 'fr' | 'ar';
export type Translation = typeof translations.en;
