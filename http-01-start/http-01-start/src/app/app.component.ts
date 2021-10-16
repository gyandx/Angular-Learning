import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';
import { PostService } from './post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching: boolean = false;
  error = null;
  errSub: Subscription;

  constructor(private http: HttpClient, private postService: PostService) {}

  ngOnInit() {
    // using subject to forward http errors from post.service
    this.errSub = this.postService.errMsg.subscribe(res => {
      this.error = res;
    });
    this.isFetching = true;
    // we have to subscribe the observable to interact with db otherwise api call will not happen
    this.postService.fetchPost().subscribe(res => {
      this.isFetching = false;
      this.loadedPosts = res;
    }, error => {
      this.isFetching = false;
      this.error = error?.error?.error;
    });
  }

  onCreatePost(postData: Post) {
    // Send Http request
    // assign types with http methods that will get in response
    this.postService.createAndStorePost(postData.title, postData.content);
    this.onFetchPosts();
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.postService.fetchPost().subscribe(res => {
      this.isFetching = false;
      this.loadedPosts = res;
    }, error => {
      this.isFetching = false;
      this.error = error?.error?.error;
    });
  }

  onClearPosts() {
    // Send Http request
    this.postService.deleteAllPost().subscribe(res => {
      this.loadedPosts = [];
    }, error => {
      this.error = error?.error?.error;
    })
  }

  onHandleError() {
    this.error = null;
  }

  ngOnDestroy(){
    this.errSub.unsubscribe();
  }

}
