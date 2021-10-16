import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";
import { Post } from "./post.model";

@Injectable({
  providedIn: 'root'
})

export class PostService {

  // use to store error from http call
  errMsg = new Subject<string>();

  constructor(private http: HttpClient) { }

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title: title, content: content };
    /* We are using firebase db for communicating with backend and posts is the end point as in firebase it will just
    create a folder name post and .json is a firebase requirement*/
    this.http.post<{ name: string }>(`https://myhttpproject-c813e-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json`, postData,
    {
      // observe with value response, by default observe value is body is use to get the full response from the api response
      observe: 'response'
    }).
      subscribe(response => {
        // console.log(response);
        console.log(response.body);
      }, error => {
        this.errMsg.next(error?.error?.error);
      });
  }

  fetchPost() {
    // adding multiple params if needed
    let parameters = new HttpParams();
    parameters = parameters.append('print', 'pretty');
    parameters = parameters.append('custom', 'new');
    return this.http.get<{ [key: string]: Post }>(`https://myhttpproject-c813e-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json`,
      {
        /* passing headers with request and params if needed and the params will be appended to the url end or we set directly set param in url
         by adding ? mark*/
        headers: new HttpHeaders({
          'custom-header': 'hello'
        }),
        // params: new HttpParams().set('print', 'pretty') // single parameter
        params: parameters // multiple parameter
      }).pipe(
        map((resData) => {
          const arr: Post[] = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              arr.push({ ...resData[key], id: key })
            }
          }
          return arr;
        }),
        // catchError is used to send error to the backend api if we want to send an error report
        catchError(errRes => {
          return throwError(errRes);
        })
      )
  }

  deleteAllPost() {
    return this.http.delete(`https://myhttpproject-c813e-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json`,
    {
      /* observe events is used to get granunal controls over the app,
      these are used to know the events and response of api */
      observe: 'events',
      responseType: 'text' // we can also change the response type of an api by using response type default responseType is json
    }).pipe(tap( event => {
      console.log('event', event);
      if (event.type === HttpEventType.Sent){
        /// ...
      }
      if (event.type === HttpEventType.Response){
        console.log(event.body);
      }
    }));
  }
}
