import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  // flickr feed api from https://www.flickr.com/services/feeds/docs/photos_public/
  apiRoot = 'https://api.flickr.com/services/feeds/photos_public.gne';

  constructor(private http: HttpClient) { }

  // get all latest feeds, default size is 20
  getAllFeeds() {
    const apiURL = `${this.apiRoot}?format=json&jsoncallback=JSONP_CALLBACK`;
    return this.http.jsonp(apiURL, 'JSONP_CALLBACK');
  }

  // get feeds by a single user ID
  getFeedsByUserId(id) {
    const apiURL = `${this.apiRoot}?format=json&jsoncallback=JSONP_CALLBACK&id=${id}`;
    console.log(apiURL);
    return this.http.jsonp(apiURL, 'JSONP_CALLBACK');
  }

  // get feeds by a comma delimited list of tags
  getFeedsByTags(tags) {
    const apiURL = `${this.apiRoot}?format=json&jsoncallback=JSONP_CALLBACK&tags=${tags}`;
    return this.http.jsonp(apiURL, 'JSONP_CALLBACK');
  }
}
