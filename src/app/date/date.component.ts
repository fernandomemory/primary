import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  constructor() { }
  date:any;
  hours:any;
  ngOnInit(): void {
    const d = new Date();
    const h = this.addZero(d.getHours());
    const m = this.addZero(d.getMinutes());
    const dd = String(d.getDate()).padStart(2, '0');
    const mm = String(d.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = d.getFullYear();
    const today = dd + '/' + mm + '/' + yyyy;
    this.date = "Acessando em "+today+" as "+h + ":" + m+ " hrs";
  }

   addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  
}
