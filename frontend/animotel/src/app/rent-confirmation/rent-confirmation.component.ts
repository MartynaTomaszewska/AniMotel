import { Component, OnInit } from '@angular/core';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';

@Component({
  selector: 'app-rent-confirmation',
  templateUrl: './rent-confirmation.component.html',
  styleUrls: ['./rent-confirmation.component.css']
})
export class RentConfirmationComponent implements OnInit {

  public payPalConfig?: IPayPalConfig;

  constructor() { }

  ngOnInit() {
    this.initPayPalConfig();
  }

  private initPayPalConfig(): void {
    this.payPalConfig = {
      currency: 'PLN',
      clientId: 'sb',
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'PLN',
              value: '1.00',
              breakdown: {
                item_total: {
                  currency_code: 'PLN',
                  value: '1.00'
                }
              }
            },
            items: [
              {
                name: 'Enterprise Subscription',
                quantity: '1',
                category: 'DIGITAL_GOODS',
                unit_amount: {
                  currency_code: 'PLN',
                  value: '1.00',
                },
              }
            ]
          }
        ]
      },
      advanced: {
      },
      style: {
        label: 'pay',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then(details => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
        });
      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
        //this.showSuccess = true;
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onError: err => {
        console.log('OnError', err);
      },
      onClick: () => {
        console.log('onClick');
      },
    };
  }

}
