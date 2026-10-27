import { Component, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LangService } from '../../core/i18n';
import { SITE } from '../../core/site-config';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  site = SITE;
  i18n = inject(LangService);
  c = this.i18n.c;
  cvUrl = computed(() => SITE.cv[this.i18n.lang()]);

  form = { name: '', email: '', message: '' };
  status: 'idle' | 'sending' | 'sent' | 'error' = 'idle';

  async submit() {
    this.status = 'sending';
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: SITE.web3formsKey,
          name: this.form.name,
          email: this.form.email,
          message: this.form.message,
          subject: `Portfolio contact from ${this.form.name}`,
        }),
      });
      const data = await res.json();
      this.status = data.success ? 'sent' : 'error';
    } catch {
      this.status = 'error';
    }
  }
}
