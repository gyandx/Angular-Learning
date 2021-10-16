import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverIndex: string;
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private activatedRoute: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    // this.serverIndex = this.activatedRoute.snapshot.params.id;
    // this.server = this.serversService.getServer(+this.serverIndex);
    // this.activatedRoute.params.subscribe((param: Params) => {
    //   this.server = this.serversService.getServer(+param['id']);
    // })


    //use of resolver
    this.activatedRoute.data.subscribe((data: Data)  => {
      this.server = data['server'];
    })
  }

  onEditServer() {
    // this.route.navigate(['../', this.server.id, 'edit'], {relativeTo: this.activatedRoute, queryParams:{allowed : 1}, fragment: 'show'});
    // this.route.navigate(['edit'], {relativeTo: this.activatedRoute, queryParams:{allowed : this.server.id}, fragment: 'show'});

    // queryParams handling is used to store the old query params
    this.route.navigate(['edit'], {relativeTo: this.activatedRoute, queryParamsHandling:'preserve'});
    // this.route.navigate(['/servers', this.server.id, 'edit'], { queryParams:{allowed : 1}, fragment: 'show'});
  }

}
