import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {StoreModule} from '@ngrx/store';
import {counterReducer} from './counter.reducer';
import { AppComponent } from './app.component';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Angular CLI environment

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({count:counterReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
