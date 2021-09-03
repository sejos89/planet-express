import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
})
export class NewsletterComponent implements OnInit {
  signupForm: FormGroup;
  submitted: boolean = false;
  wrong: boolean = false;
  constructor(fb: FormBuilder) {
    this.signupForm = fb.group({
      email: [null, [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.signupForm.valid) {
      this.submitted = true;
    } else this.wrong = true;
  }
}
