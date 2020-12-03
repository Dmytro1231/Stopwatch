import { Component, Directive,HostListener  } from '@angular/core';
import { Button } from 'protractor';
import { interval, fromEvent, observable, Subscription, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'stopwatch';


  interval;
  time = new Date(null);

  startTimer() {
    this.interval = setInterval(() => {
      this.time.setSeconds(this.time.getSeconds() + 1);
    },1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  resetTimer() {
    this.time.setSeconds(0);
  }
}
