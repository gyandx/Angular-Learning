import { ActivatedRouteSnapshot, CanActivate, CanActivateChild,
   Router, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate, CanActivateChild{

  constructor(private authService: AuthService, private router: Router){}

  // canActivate always checks the condition before rendering any component if condition is true then the component will render otherwise the else condition
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
  {
    return this.authService.isAuthenticated().then((auth: boolean) => {
      if (auth){
        return true;
      }else{
        this.router.navigate(['/']);
      }
    })
  }

  // canActivateChild always checks the condition before rendering any child component if condition is true then the child component will render otherwise the else condition
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
  {
    return this.canActivate(route, state);
  }
}
