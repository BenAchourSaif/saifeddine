import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService, Lang } from '../../../app/services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  scrolled = false;
  menuOpen = false;
  langs: Lang[] = ['en', 'fr', 'ar'];

  constructor(public ls: LanguageService) {}

  @HostListener('window:scroll')
  onScroll() { this.scrolled = window.scrollY > 50; }

  toggleMenu() { this.menuOpen = !this.menuOpen; }
  closeMenu() { this.menuOpen = false; }
  setLang(l: Lang) { this.ls.setLang(l); this.closeMenu(); }
}
