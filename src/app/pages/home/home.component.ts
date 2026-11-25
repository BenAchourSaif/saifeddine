import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LangService } from '../../core/i18n';
import { SGHARTOON_SHOTS, SITE } from '../../core/site-config';
import { VideoEmbedComponent } from '../../shared/video-embed/video-embed.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, VideoEmbedComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  site = SITE;
  shots = SGHARTOON_SHOTS;
  i18n = inject(LangService);
  c = this.i18n.c;
  cvUrl = computed(() => SITE.cv[this.i18n.lang()]);
  // '' = combined home page, 'unity' = Unity / XR portfolio, 'fullstack' = Full-Stack portfolio.
  profile: '' | 'unity' | 'fullstack' = inject(ActivatedRoute).snapshot.data['profile'] ?? '';
  view = computed(() => {
    const t = this.c();
    const p = this.profile ? t.profiles[this.profile] : null;
    return {
      role: p ? p.role : t.hero.role,
      lead: p ? p.lead : t.hero.lead,
      stats: p ? p.stats : t.stats,
      skillGroups: p ? p.skillGroups : t.skillGroups,
    };
  });
}
