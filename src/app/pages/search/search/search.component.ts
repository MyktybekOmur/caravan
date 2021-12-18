import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  modelActive = false;
  constructor() {}

  ngOnInit(): void {}
  open360Modal() {
    this.modelActive = !this.modelActive;
  }
}
