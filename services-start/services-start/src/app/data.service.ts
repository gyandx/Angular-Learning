import { Injectable, EventEmitter } from "@angular/core";
import { LoginService } from "./logging.service";

/*Injectable decorator in a service is required to inject a service in that service, without injectable decorator the injected service,
will not work on that service,
we can use providedIn in injectable decorator for lazy loading for better performance & speed, as it will also do the sma thing,
insert the DataService class service in providers in app.module */
@Injectable({
  providedIn:'root'
})

export class DataService{

  constructor(private loginService: LoginService ){}

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  //cross-component communication using services
  statusUpdated = new EventEmitter<string>();

  accountAdd(name: string, status: string): void{
    this.accounts.push({name: name, status: status});
    this.loginService.loginStatusChange(status);
  }

  updateAccount(id: number, status: string) : void{
    this.accounts[id].status = status;
    this.loginService.loginStatusChange(status);
  }
}
