import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { FeedService } from './services/feed.service';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [FeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
