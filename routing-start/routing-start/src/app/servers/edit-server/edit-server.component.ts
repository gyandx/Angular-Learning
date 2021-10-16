import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ServersService } from '../servers.service';
import { CanComponentDeactivate } from './canDeactivate.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  queryParam: any;
  fragments: string;
  allowEdit: boolean = false;
  changeSaved: boolean = true;
  serverId: string;

  constructor(private serversService: ServersService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //we can fetch queryParas and fragment in 2 ways one using snapshot and other using observables

    // 1st method using snapshot
    // this.queryParam = this.activatedRoute.snapshot.queryParams;
    // this.fragments = this.activatedRoute.snapshot.fragment;

    // 2nd method using observable
    this.activatedRoute.queryParams.subscribe((query) => {
      this.queryParam = query.allowed;
      this.allowEdit = this.queryParam === '1' ? true : false;
    })

    this.activatedRoute.fragment.subscribe((fragment) => {
      this.fragments = fragment;
    })
    // console.log('query ', this.queryParam, 'fragment ', this.fragments);

    this.serverId = this.activatedRoute.snapshot.params['id'];
    this.server = this.serversService.getServer(+this.serverId);
    this.activatedRoute.params.subscribe((param: Params) => {
      this.serverId = param['id'];
    })
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changeSaved = true;
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }

  // canDeactivate method is used to connect the component with the service
  canDeactivate() : Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit){
      return true;
    }
    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && this.changeSaved){
      return confirm("Do you want to leave?")
    }else{
      return true;
    }
  }

}
