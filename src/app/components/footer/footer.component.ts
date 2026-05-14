import { Component } from '@angular/core';
import { LanguageService } from '../../../app/services/language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  year = new Date().getFullYear();
  constructor(public ls: LanguageService) {}
}
