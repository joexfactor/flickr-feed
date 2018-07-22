import { Component, OnInit } from '@angular/core';
import { FeedService } from '../../services/feed.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  isImageClicked: boolean;
  isAuthorClicked: boolean;
  isTagsClicked: boolean;
  allFeeds: any;
  items: any;
  searchContent: string;
  prompt: string;
  isResultAvailable: boolean;
  isResultPanelAvailable: boolean;
  isSearchAvailable: string;
  searchPlaceHolder: string;

  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.isImageClicked = true;
    this.isAuthorClicked = false;
    this.isTagsClicked = false;
    this.prompt = '';
    this.isResultAvailable = false;
    this.isResultPanelAvailable = false;
    this.isSearchAvailable = 'readonly';
    this.searchPlaceHolder = 'Search by Image is not supported by Flickr API';
  }

  searchFeeds(event) {

    this.isResultPanelAvailable = true;
    window.location.href = '#result';

    if (this.isImageClicked) {
      this.feedService.getAllFeeds().subscribe(res => {
        this.prompt = 'Search results for latest images';
        this.allFeeds = res;
        this.items = this.allFeeds.items;
        console.log(this.allFeeds);
        this.isResultAvailable = true;
      }, err => {
        console.log('No data');
        this.prompt = 'There were no results found.';
        this.isResultAvailable = false;
      });
    }

    if (this.isAuthorClicked) {
      this.feedService.getFeedsByUserId(this.searchContent).subscribe(res => {
        this.prompt = 'Search results for author \"' + this.searchContent + '\"';
        this.allFeeds = res;
        this.items = this.allFeeds.items;
        console.log(this.allFeeds);
        this.isResultAvailable = true;
      }, err => {
        console.log('No data');
        this.prompt = 'There were no results found.';
        this.isResultAvailable = false;
      });
    }

    if (this.isTagsClicked) {
      this.feedService.getFeedsByTags(this.searchContent).subscribe(res => {
        this.prompt = 'Search results for tag \"' + this.searchContent + '\"';
        this.allFeeds = res;
        this.items = this.allFeeds.items;
        console.log(this.allFeeds);
        this.isResultAvailable = true;
      }, err => {
        console.log('No data');
        this.prompt = 'There were no results found.';
        this.isResultAvailable = false;
      });
    }

  }

  clickImage(event) {
    this.searchContent = '';
    this.isImageClicked = true;
    this.isAuthorClicked = false;
    this.isTagsClicked = false;
    this.isSearchAvailable = 'readonly';
    this.searchPlaceHolder = 'Search by Image is not supported by Flickr API';
  }

  clickAuthor(event) {
    this.searchContent = '';
    this.isImageClicked = false;
    this.isAuthorClicked = true;
    this.isTagsClicked = false;
    this.isSearchAvailable = '';
    this.searchPlaceHolder = 'Search by Author ID';
  }

  clickTags(event) {
    this.searchContent = '';
    this.isImageClicked = false;
    this.isAuthorClicked = false;
    this.isTagsClicked = true;
    this.isSearchAvailable = '';
    this.searchPlaceHolder = 'Search by Tags, seperated by comma';
  }

  contentChange() {
    console.log(this.searchContent);
  }
}
