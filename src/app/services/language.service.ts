import { Injectable, signal, computed } from '@angular/core';
import { translations, Lang, Translation } from '../i18n/translations';
export type { Lang };

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private _lang = signal<Lang>('en');

  lang = this._lang.asReadonly();
  t = computed<Translation>(() => translations[this._lang()]);

  setLang(lang: Lang): void {
    this._lang.set(lang);
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  }
}
