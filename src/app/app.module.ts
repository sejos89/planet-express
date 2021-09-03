import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { WorkersDataComponent } from './components/workers-data/workers-data.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PriceCalculatorComponent } from './components/price-calculator/price-calculator.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CountdownComponent,
    WorkersDataComponent,
    NewsletterComponent,
    PriceCalculatorComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
