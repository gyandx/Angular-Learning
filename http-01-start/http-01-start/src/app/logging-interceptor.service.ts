import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

export class LoggingInterceptor implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    console.log(req.url);
    console.log(req.headers);
    return next.handle(req).pipe(tap(event => {
      console.log(event)
      if (event.type === HttpEventType.Response){
        console.log('Logging Response');
        console.log(event.body)
      }
    }));
  }
}
