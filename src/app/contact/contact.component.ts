import {Component} from '@angular/core';
import {getFunctions, httpsCallable} from "@angular/fire/functions";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  providers: [],
  templateUrl: './contact.component.html',
})


export class ContactComponent {
  contactForm: FormGroup;

  loading = false;
  error = false;
  success = false;

  constructor(private fb: FormBuilder) {

    this.contactForm = this.fb.group({
      'subject': ['', [Validators.required]],
      'name': ['', [Validators.required]],
      'email': ['', [Validators.email, Validators.required]],
      'phone': ['', [Validators.required]]
    })
  }

  sendEmail() {
    if (this.contactForm.invalid) return;
    this.loading = true;
    const functions = getFunctions();
    const sendEmailCallable = httpsCallable(functions, 'send_email');
    sendEmailCallable({
      message: this.contactForm.controls['subject'].value,
      name: this.contactForm.controls['name'].value,
      email: this.contactForm.controls['name'].value,
      phone: this.contactForm.controls['phone'].value
    })
      .then((result) => {
        this.success = true;
        this.loading = false;
      })
      .catch((error) => {
        this.error = true;
        this.loading = false;
      }).finally(() => this.reset());
  }

  reset() {
    setTimeout(() => {
        this.loading = false;

        if (this.success) {
          this.contactForm.reset();
        }
        this.success = false;
        this.error = false;
      }, 3000
    )
  }
}
