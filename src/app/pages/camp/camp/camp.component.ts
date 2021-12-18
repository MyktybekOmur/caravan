import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CampService } from 'src/app/service/camp/camp.service';

@Component({
  selector: 'app-camp',
  templateUrl: './camp.component.html',
  styleUrls: ['./camp.component.scss'],
})
export class CampComponent implements OnInit {
  myScriptElement!: HTMLScriptElement;
  myScriptElement2!: HTMLScriptElement;
  selectedIndex: any;

  extra: any = [];
  addExtra: any = [];

  dailyPrice = 270;
  bookingPrice = 120;
  servicePrice = 80;
  totalPrice = 0;
  totalDailyPrice = 0;
  totalDay = 0;
  totalActive = false;
  fromDate = '';
  toDate = '';

  calcExtraPrice: any = [
    {
      name: 'Rezervasyon Ücreti',
      price: '120',
    },
  ];

  modelActive = false;
  constructor(private apiCamp: CampService, private router: Router) {
    this.myScriptElement = document.createElement('script');
    this.myScriptElement.src = 'assets/js/flickity.pkgd.js';
    document.body.appendChild(this.myScriptElement);
    this.myScriptElement2 = document.createElement('script');
    this.myScriptElement2.src = 'assets/js/fullscreen.js';
    document.body.appendChild(this.myScriptElement2);
    this.getExCamp();
  }

  ngOnInit(): void {}
  open360Modal() {
    this.modelActive = !this.modelActive;
  }

  calculate() {
    let date1: Date = new Date(this.fromDate);
    let date2: Date = new Date(this.toDate);
    var temp = 0;

    let timeInMilisec: number = date2.getTime() - date1.getTime();
    let daysBetweenDates: number = Math.ceil(
      timeInMilisec / (1000 * 60 * 60 * 24)
    );
    this.totalDay = daysBetweenDates;
    this.totalDailyPrice = this.totalDay * this.dailyPrice;

    for (let i = 0; i < this.calcExtraPrice.length; i++) {
      temp = temp + Number(this.calcExtraPrice[i].price);
    }

    this.totalPrice = this.totalDailyPrice + temp;
    this.totalActive = true;
  }
  getExCamp() {
    this.extra = this.apiCamp.getExtra();
    console.log(this.extra);
  }

  addExtraPrice(extra: any) {
    this.calcExtraPrice.push(extra);
    console.log(this.calcExtraPrice);
    this.calculate();
  }
  openPage() {
    this.apiCamp.setData(
      this.totalPrice,
      this.dailyPrice,
      this.totalDay,
      this.totalDailyPrice,
      this.calcExtraPrice
    );
    this.apiCamp.setPage('2');
    this.router.navigate(['cart']);
  }
}
