import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../../app/services/language.service';

// ── Web3Forms setup (takes 30 seconds) ───────────────────────────────────────
// 1. Go to https://web3forms.com
// 2. Enter:  saifeddine.benachour@gmail.com
// 3. Click "Create Access Key" → check your inbox
// 4. Paste the key below and push
const WEB3FORMS_KEY = '605194e3-c8e7-4ab8-ba5f-5a786c4723b2';
// ─────────────────────────────────────────────────────────────────────────────

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  form = { name: '', email: '', message: '' };
  submitted = false;
  sending   = false;
  error     = false;

  constructor(public ls: LanguageService) {}

  onSubmit() {
    this.sending = true;
    this.error   = false;

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        name:       this.form.name,
        email:      this.form.email,
        message:    this.form.message,
        subject:    `Portfolio contact from ${this.form.name}`,
      })
    })
    .then(res => res.json())
    .then(data => {
      this.sending = false;
      if (data.success) {
        this.submitted = true;
      } else {
        this.error = true;
      }
    })
    .catch(() => {
      this.sending = false;
      this.error   = true;
    });
  }
}
