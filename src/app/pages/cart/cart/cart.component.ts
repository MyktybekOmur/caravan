import { Component, OnInit } from '@angular/core';
import { CampService } from 'src/app/service/camp/camp.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  extra: any = [];
  addExtra: any = [];

  dailyPrice = 270;
  bookingPrice = 120;
  servicePrice = 120;
  totalPrice = 0;
  totalDailyPrice = 0;
  totalDay = 0;
  totalActive = false;
  fromDate = '';
  toDate = '';

  araToplam = 0;
  chect = '';

  calcExtraPrice: any = [];

  constructor(private apiCamp: CampService) {
    this.getExCamp();
  }

  ngOnInit(): void {}

  calculate() {
    let temp = 0;

    for (let i = 0; i < this.calcExtraPrice.length; i++) {
      temp = temp + Number(this.calcExtraPrice[i].price);
    }

    if (temp == 0) this.araToplam = this.totalDailyPrice + 0;
    else this.araToplam = this.totalDailyPrice + temp;
    this.totalPrice = this.araToplam + this.bookingPrice;
    this.totalActive = true;
  }
  getExCamp() {
    this.chect = this.apiCamp.pageCon;
    this.totalDailyPrice = this.apiCamp.totalPrice;
    this.extra = this.apiCamp.getExtra();
    console.log(this.extra);
    this.calculate();
  }

  addExtraPrice(extra: any) {
    this.calcExtraPrice.push(extra);
    console.log(this.calcExtraPrice);
    this.calculate();
  }
}
