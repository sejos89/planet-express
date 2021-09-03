import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-price-calculator',
  templateUrl: './price-calculator.component.html',
  styleUrls: ['./price-calculator.component.scss'],
})
export class PriceCalculatorComponent implements OnInit {
  calculatorForm: FormGroup;
  submitted: boolean = false;
  wrong: boolean = false;
  finalPrice: number;
  constructor(fb: FormBuilder) {
    this.calculatorForm = fb.group({
      quantity: [null, Validators.required],
      weight: [null, Validators.required],
    });
  }
  ngOnInit(): void {}

  onSubmit() {
    if (this.calculatorForm.valid) {
      const { quantity, weight } = this.calculatorForm.value;
      this.submitted = true;
      this.finalPrice = quantity * weight;
    } else this.wrong = true;
  }
}
