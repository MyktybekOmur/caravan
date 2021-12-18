import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  myScriptElement!: HTMLScriptElement;
  myScriptElement2!: HTMLScriptElement;
  constructor() {}

  ngOnInit(): void {}
}
