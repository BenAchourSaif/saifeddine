import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from '../../../app/pipes/safe-html.pipe';
import { LanguageService } from '../../../app/services/language.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SafeHtmlPipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  constructor(public ls: LanguageService) {}
}
