import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
})
export class CountdownComponent implements OnInit {
  public dDay: Date = new Date('Sept 09 2021 00:00:00');

  public timeDifference: number;
  public secondsToDday: number;
  public minutesToDday: number;
  public hoursToDday: number;
  public daysToDday: number;

  private getTimeDifference() {
    this.timeDifference = this.dDay.getTime() - new Date().getTime();
    this.allocateTimeUnits(this.timeDifference);
  }

  private allocateTimeUnits(timeDifference: number) {
    this.secondsToDday = Math.floor((timeDifference / 1000) % 60);
    this.minutesToDday = Math.floor((timeDifference / (1000 * 60)) % 60);
    this.hoursToDday = Math.floor((timeDifference / (1000 * 3600)) % 24);
    this.daysToDday = Math.floor(timeDifference / (1000 * 3600 * 24));
  }

  ngOnInit() {
    interval(1000).subscribe((x) => this.getTimeDifference());
  }
}
