import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    //by using snapshot-> params property of activatedRoute  we can access the parameters of an Url
    this.user = {
      id: this.activatedRoute.snapshot.params['id'],
      name: this.activatedRoute.snapshot.params['name']
    }

    // params is observable which is used to update the params if the change after once
    this.activatedRoute.params.subscribe((param: Params) => {
      // console.log(param, 'param')
      this.user.id = param.id;
      this.user.name = param.name;
    })
  }

}
