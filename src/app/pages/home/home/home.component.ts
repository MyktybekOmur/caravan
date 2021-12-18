import { Component, OnInit } from '@angular/core';
declare var addPhoto: any;
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
  constructor() {
    this.myScriptElement = document.createElement('script');
    this.myScriptElement.src = '../../../../assets/js/flickity.pkgd.js';
    document.body.appendChild(this.myScriptElement);
    this.myScriptElement2 = document.createElement('script');
    this.myScriptElement2.src = '../../../../assets/js/fullscreen.js';
    document.body.appendChild(this.myScriptElement2);

    this.myScriptElement3 = document.createElement('script');
    this.myScriptElement3.src = '../../../../assets/js/main.js';
    document.body.appendChild(this.myScriptElement3);
  }

  ngOnInit(): void {}
  open360Modal() {
    this.modelActive = !this.modelActive;
    this.myScriptElement3 = document.createElement('script');
    this.myScriptElement3.src = '../../../../assets/js/main.js';
    document.body.appendChild(this.myScriptElement3);
  }
}
