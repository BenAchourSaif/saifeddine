import { Injectable, computed, effect, signal } from '@angular/core';
import { CONTENT } from './content';

export type Lang = 'en' | 'fr' | 'ar';

export const LANGS: { code: Lang; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'ar', label: 'AR' },
];

function initialLang(): Lang {
  try {
    const stored = localStorage.getItem('lang');
    if (stored === 'en' || stored === 'fr' || stored === 'ar') return stored;
  } catch {
    // storage unavailable (private mode) — fall through to the browser language
  }
  const nav = (navigator.language || 'en').slice(0, 2);
  return nav === 'fr' || nav === 'ar' ? nav : 'en';
}

@Injectable({ providedIn: 'root' })
export class LangService {
  readonly lang = signal<Lang>(initialLang());
  readonly c = computed(() => CONTENT[this.lang()]);

  constructor() {
    effect(() => {
      const l = this.lang();
      document.documentElement.lang = l;
      document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
      document.title = CONTENT[l].meta.title;
      try {
        localStorage.setItem('lang', l);
      } catch {
        // ignore
      }
    });
  }

  set(l: Lang) {
    this.lang.set(l);
  }
}
