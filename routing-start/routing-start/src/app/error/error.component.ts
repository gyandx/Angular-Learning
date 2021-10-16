import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errMsg: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.errMsg = this.activatedRoute.snapshot.data['message'];
    this.activatedRoute.data.subscribe(msg => {
      this.errMsg = msg['message'];
    })
  }

}
