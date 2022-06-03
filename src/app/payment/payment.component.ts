import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor() { }

  tabState: string = 'debit_card';

  ngOnInit(): void {
  }

  changeTab(value: string): void {
    this.tabState = value;
  }

  debitCardSubmit(){
    alert('debit card payment');
  }

  creditCardSubmit(){
    alert('credit card payment');
  }

  upiSubmit(){
    alert('upi payment');
  }

  codSubmit(){
    alert('cod');
  }
}
