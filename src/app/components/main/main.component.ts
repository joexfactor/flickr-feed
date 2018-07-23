import { Component, OnInit } from '@angular/core';
import { FeedService } from '../../services/feed.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  // check which tab is clicked
  isImageClicked: boolean;
  isAuthorClicked: boolean;
  isTagsClicked: boolean;

  searchContent: string;
  prompt: string;

  // results from api
  allFeeds: any;
  items: any;

  // control the display logic of the searchbar and result
  isSearchBarReadOnly: string;
  searchPlaceHolder: string;
  isResultAvailable: boolean;
  isResultPanelAvailable: boolean;

  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.isImageClicked = true;
    this.isAuthorClicked = false;
    this.isTagsClicked = false;
    this.prompt = '';
    this.isResultAvailable = false;
    this.isResultPanelAvailable = false;
    this.isSearchBarReadOnly = 'readonly';
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
        console.log('No Result');
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
        console.log('No Result');
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
        console.log('No Result');
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
    this.isSearchBarReadOnly = 'readonly';
    this.searchPlaceHolder = 'Search by Image is not supported by Flickr API';
  }

  clickAuthor(event) {
    this.searchContent = '';
    this.isImageClicked = false;
    this.isAuthorClicked = true;
    this.isTagsClicked = false;
    this.isSearchBarReadOnly = '';
    this.searchPlaceHolder = 'Search by Author ID';
  }

  clickTags(event) {
    this.searchContent = '';
    this.isImageClicked = false;
    this.isAuthorClicked = false;
    this.isTagsClicked = true;
    this.isSearchBarReadOnly = '';
    this.searchPlaceHolder = 'Search by Tags, seperated by comma';
  }

  contentChange() {
    console.log(this.searchContent);
  }
}
