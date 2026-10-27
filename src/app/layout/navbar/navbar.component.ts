import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LANGS, LangService } from '../../core/i18n';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  open = false;
  i18n = inject(LangService);
  langs = LANGS;

  toggle() {
    this.open = !this.open;
  }

  close() {
    this.open = false;
  }
}
