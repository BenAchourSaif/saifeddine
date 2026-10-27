// Non-translatable site constants (URLs, contact details, names). All
// translatable copy lives in content.ts. Anything marked TODO is a placeholder
// that must be replaced with real, verifiable information.

export const SITE = {
  candidateName: 'Saif Eddine Ben Achour',
  portfolioUrl: 'https://benachoursaif.github.io/saifeddine/',
  task1DemoVideoUrl: 'https://www.youtube.com/embed/4vozrgZzjwQ' as string | null,
  task2DemoVideoUrl: 'https://www.youtube.com/embed/6t-hOJ-K-GM' as string | null,
  repoStoryforge: 'storyforge-webgl',
  repoStoryforgeUrl: 'https://github.com/BenAchourSaif/storyforge-webgl' as string | null,
  repoContentDiscovery: 'content-discovery-webgl',
  // TODO: push content-discovery-webgl to GitHub and paste its URL here.
  repoContentDiscoveryUrl: null as string | null,
  sghartoonUrl: 'https://sghartoon.com',
  linkedinUrl: 'https://www.linkedin.com/in/saif-eddine-ben-achour/' as string | null,
  githubUrl: null as string | null,
  email: 'saifeddine.benachour@gmail.com' as string | null,
  phone: '+216 50 989 000' as string | null,
  sghartoonDemoVideoUrl: 'https://youtu.be/kp5x0duiZLI' as string | null,
  // General CV, one PDF per language (Arabic readers get the English one).
  // Web3Forms public access key (same one the previous portfolio used); it only delivers to the email below.
  web3formsKey: '605194e3-c8e7-4ab8-ba5f-5a786c4723b2',
  cv: { en: 'cv/Saif_Eddine_Ben_Achour_CV_EN.pdf', fr: 'cv/Saif_Eddine_Ben_Achour_CV_FR.pdf', ar: 'cv/Saif_Eddine_Ben_Achour_CV_EN.pdf' },
};

// Screenshots of the public pages of sghartoon.com (private therapist/parent spaces are not shown).
export const SGHARTOON_SHOTS = [
  'img/sghartoon-home.jpg',
  'img/sghartoon-parents.jpg',
  'img/sghartoon-therapeutes.jpg',
  'img/sghartoon-b2b.jpg',
  'img/sghartoon-mobile.jpg',
];
