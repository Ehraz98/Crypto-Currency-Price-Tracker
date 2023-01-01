import { CurrencyService } from './service/currency.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  projectTitle: string = 'Crypto Checker';
  selectedCurrency: string  = 'INR';
  constructor(private currencyService : CurrencyService){

  }
  sendCurrency(event:string){
    this.currencyService.setCurrency(event);
  }
}