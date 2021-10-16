import { Component, OnInit } from '@angular/core';
import { from, interval, Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private firstSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    // interval(1000).subscribe(count => {
    //   console.log(count++);
    // })

    //custom observable
    const customObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 2){
          observer.complete();
        }
        if (count > 3){
          observer.error(new Error('Greater than 2'));
        }
        count++;
      }, 1000);
    })

    // using rxjs operators
    this.firstSubscription = customObservable.pipe(filter(data => {
      return data > 0;
    }), map((data) => {
      return 'Round '+ data;
    })).subscribe(count => {
      console.log(count);
    }, error => {    //subscribing to error in observable
      alert(error.message);
    }, () => {
      console.log('completed');
    })
  }

}
