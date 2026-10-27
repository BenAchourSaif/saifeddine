import { Component, inject } from '@angular/core';
import { LangService } from '../../core/i18n';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  c = inject(LangService).c;
}
