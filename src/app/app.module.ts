import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PersonListModule} from './modules/person-list/personlist.module';
import {StoreProvider} from './data/providers/store.provider';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PersonListModule
  ],
  providers: [StoreProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
