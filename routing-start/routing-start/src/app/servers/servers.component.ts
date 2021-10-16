import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  reload(){
    // here it will not break the code as it does not know on which path it is as it assume the relative path is the base url
    this.router.navigate(['/servers']);
    // this.router.navigate(['servers']);

    /* here this will give an error as using relativeTo the navigate method the router will know which component it is
    and the utl become localhost:4200/servers/servers as it append the path with the relative part */
    // this.router.navigate(['servers'], {relativeTo: this.activatedRoute});

    /*here the navigation will be successfull as we have given the correct relative part */
    // this.router.navigate(['../servers'], {relativeTo: this.activatedRoute});
    // console.log(this.activatedRoute)
  }

}
