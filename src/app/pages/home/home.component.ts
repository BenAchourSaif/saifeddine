import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LangService } from '../../core/i18n';
import { SGHARTOON_SHOTS, SITE } from '../../core/site-config';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  site = SITE;
  shots = SGHARTOON_SHOTS;
  i18n = inject(LangService);
  c = this.i18n.c;
  cvUrl = computed(() => SITE.cv[this.i18n.lang()]);
}
