import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {booksReducer} from './state/book.reducer';
import {collectionReducer} from './state/collection.reducer';
import {StoreModule} from '@ngrx/store';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { BookListComponent } from './book-list/book-list.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Angular CLI environment

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot({books:booksReducer,collection:collectionReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    BookListComponent,
    BookCollectionComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
