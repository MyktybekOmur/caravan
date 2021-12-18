import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CampService {
  extraHizmet: any = [
    {
      name: 'Yakacak Odun',
      price: '50',
      desc: 'Kamp ateşiniz için bir demet yakacak odun.',
      img: 'assets/img/fire.svg',
    },
    {
      name: 'Kayık Kiralama',
      price: '85',
      desc: 'Kamp alanınızda kullanmak için günlük kayık kiralama hizmeti',
      img: 'assets/img/kayak.svg',
    },
    {
      name: 'Pizza',
      price: '80',
      desc: 'Vardığınız gün sizin için sıcak pizza hazır olacaktır.',
      img: 'assets/img/pizza.svg',
    },
    {
      name: 'Balıkcılık Ekipmanı',
      price: '200',
      desc: 'Konaklamanız için Balık tutma ekipmanı sağlanacaktır.',
      img: 'assets/img/fish.svg',
    },
  ];
  pageCon = '';
  totalPrice = 0;
  deilyPrice = 0;
  totatDay = 0;
  totalDailyPrice = 0;
  ext: any;
  constructor() {}
  getExtra() {
    return this.extraHizmet;
  }
  setData(
    totalPrice: number,
    deilyPrice: number,
    totatDay: number,
    totalDailyPrice: number,
    ext: any
  ) {
    this.totalPrice = totalPrice;
    this.deilyPrice = deilyPrice;
    this.totatDay = totatDay;
    this.totalDailyPrice = totalDailyPrice;
    this.ext = ext;
  }
  setPage(id: string) {
    this.pageCon = id;
  }
  getPage() {
    return this.pageCon;
  }
}
