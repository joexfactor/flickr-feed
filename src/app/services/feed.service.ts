import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  apiRoot = 'https://api.flickr.com/services/feeds/photos_public.gne';

  constructor(private http: HttpClient) { }

  getAllFeeds() {
    const apiURL = `${this.apiRoot}?format=json&jsoncallback=JSONP_CALLBACK`;
    return this.http.jsonp(apiURL, 'JSONP_CALLBACK');
  }

  getFeedsByUserId(id) {
    const apiURL = `${this.apiRoot}?format=json&jsoncallback=JSONP_CALLBACK&id=${id}`;
    console.log(apiURL);
    return this.http.jsonp(apiURL, 'JSONP_CALLBACK');
  }

  getFeedsByTags(tags) {
    const apiURL = `${this.apiRoot}?format=json&jsoncallback=JSONP_CALLBACK&tags=${tags}`;
    return this.http.jsonp(apiURL, 'JSONP_CALLBACK');
  }
}
