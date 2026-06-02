import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../../app/services/language.service';
import emailjs from '@emailjs/browser';

// ── EmailJS credentials ──────────────────────────────────────────────────────
// 1. Create a free account at https://www.emailjs.com
// 2. Add a Gmail service  →  copy the Service ID below
// 3. Create an email template (see template variables below) → copy Template ID
// 4. Go to Account → General → copy your Public Key
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';   // e.g. 'user_XXXXXXXXXXXX'
// ─────────────────────────────────────────────────────────────────────────────
// Template variables used (set them in your EmailJS template):
//   {{from_name}}    → sender's name
//   {{from_email}}   → sender's email
//   {{message}}      → message body
//   {{to_email}}     → saifeddine.benachour@gmail.com  (set as constant in template)

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

    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name:  this.form.name,
        from_email: this.form.email,
        message:    this.form.message,
        to_email:   'saifeddine.benachour@gmail.com',
      },
      EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      this.sending   = false;
      this.submitted = true;
    })
    .catch(() => {
      this.sending = false;
      this.error   = true;
    });
  }
}
