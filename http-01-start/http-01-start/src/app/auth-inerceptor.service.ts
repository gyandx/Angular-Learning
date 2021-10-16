import {  HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

export class AuthInterceptor implements HttpInterceptor{

  /* Interceptors allow us to intercept incoming or outgoing HTTP requests using the HttpClient.
  By intercepting the HTTP request, we can modify or change the value of the request.*/

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

    const modifiedRequest = req.clone({
      headers: req.headers.append('auth', '123')
    });
    console.log('request on the way');
    // return next.handle(req);

    return next.handle(modifiedRequest);
    // we can also manipulate with the response in the interceptor
    // return next.handle(modifiedRequest).pipe(tap(event => {
    //   console.log(event);
    //   if (event.type === HttpEventType.Response) {
    //     console.log('Response Body');
    //     console.log(event.body)
    //   }
    // }));
  }
}
