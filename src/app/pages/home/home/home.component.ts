import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CampService } from 'src/app/service/camp/camp.service';

declare var addPhoto: any;
declare var deleteDiv: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  myScriptElement!: HTMLScriptElement;
  myScriptElement2!: HTMLScriptElement;
  myScriptElement3!: HTMLScriptElement;

  img = [
    {
      url: 'https://l13.alamy.com/360/2DA7XNF/minsk-belarus-may-2018-full-seamless-hdri-panorama-360-degrees-angle-view-in-interior-of-public-restroom-in-steampunk-style-in-equirectangular-pr-2DA7XNF.jpg',
    },
    {
      url: 'https://l13.alamy.com/360/T0EK6C/360-in-our-caravan-spot2-T0EK6C.jpg',
    },
  ];
  modelActive = false;

  dailyPrice = 270;
  bookingPrice = 120;
  servicePrice = 80;
  totalPrice = 0;
  totalDailyPrice = 0;
  totalDay = 0;
  totalActive = false;
  fromDate = '';
  toDate = '';

  constructor(private api: CampService, private router: Router) {
    addPhoto(this.img[1].url);
    this.myScriptElement = document.createElement('script');
    this.myScriptElement.src = 'assets/js/flickity.pkgd.js';
    document.body.appendChild(this.myScriptElement);
    this.myScriptElement2 = document.createElement('script');
    this.myScriptElement2.src = 'assets/js/fullscreen.js';
    document.body.appendChild(this.myScriptElement2);
  }

  ngOnInit(): void {}
  open360Modal() {
    if (this.modelActive) this.reloadPage();
    this.modelActive = !this.modelActive;
    this.myScriptElement3 = document.createElement('script');
    this.myScriptElement3.src = 'assets/js/main.js';
    document.body.appendChild(this.myScriptElement3);
  }
  calculate(fromDayT: any, toDayT: any) {
    let date1: Date = new Date(fromDayT);
    let date2: Date = new Date(toDayT);

    let timeInMilisec: number = date2.getTime() - date1.getTime();
    let daysBetweenDates: number = Math.ceil(
      timeInMilisec / (1000 * 60 * 60 * 24)
    );

    this.totalDay = daysBetweenDates;

    this.totalDailyPrice = this.totalDay * this.dailyPrice;
    this.totalPrice =
      this.totalDailyPrice + this.bookingPrice + this.servicePrice;
    this.totalActive = true;
  }
  openPage() {
    this.api.setPage('1');
    this.router.navigate(['cart']);
  }

  reloadPage() {
    //window.location.reload();
  }
}
