import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camp',
  templateUrl: './camp.component.html',
  styleUrls: ['./camp.component.scss'],
})
export class CampComponent implements OnInit {
  myScriptElement!: HTMLScriptElement;
  myScriptElement2!: HTMLScriptElement;
  modelActive = false;
  constructor() {
    this.myScriptElement = document.createElement('script');
    this.myScriptElement.src = 'assets/js/flickity.pkgd.js';
    document.body.appendChild(this.myScriptElement);
    this.myScriptElement2 = document.createElement('script');
    this.myScriptElement2.src = 'assets/js/fullscreen.js';
    document.body.appendChild(this.myScriptElement2);
  }

  ngOnInit(): void {}
  open360Modal() {
    this.modelActive = !this.modelActive;
  }
}
