import { Component, OnDestroy, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../app/services/language.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnDestroy {
  currentRoleIndex = 0;
  displayedRole = '';
  isDeleting = false;
  private typeTimeout: ReturnType<typeof setTimeout> | null = null;

  constructor(public ls: LanguageService) {
    effect(() => {
      ls.lang(); // track language changes
      this.displayedRole = '';
      this.currentRoleIndex = 0;
      this.isDeleting = false;
      if (this.typeTimeout) clearTimeout(this.typeTimeout);
      this.typeTimeout = setTimeout(() => this.startTyping(), 150);
    });
  }

  ngOnDestroy() {
    if (this.typeTimeout) clearTimeout(this.typeTimeout);
  }

  startTyping() {
    const roles = this.ls.t().hero.roles;
    const fullText = roles[this.currentRoleIndex];
    const speed = this.isDeleting ? 40 : 75;

    if (!this.isDeleting && this.displayedRole === fullText) {
      this.typeTimeout = setTimeout(() => { this.isDeleting = true; this.startTyping(); }, 2200);
      return;
    }
    if (this.isDeleting && this.displayedRole === '') {
      this.isDeleting = false;
      this.currentRoleIndex = (this.currentRoleIndex + 1) % roles.length;
      this.typeTimeout = setTimeout(() => this.startTyping(), 400);
      return;
    }

    this.displayedRole = this.isDeleting
      ? fullText.substring(0, this.displayedRole.length - 1)
      : fullText.substring(0, this.displayedRole.length + 1);

    this.typeTimeout = setTimeout(() => this.startTyping(), speed);
  }
}
