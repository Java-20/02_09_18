import {NgModule} from '@angular/core';
import {PersonListComponent} from '../../presentation/person-list/person-list.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations:[
    PersonListComponent
  ],
  imports:[
    CommonModule
  ],
  exports:[PersonListComponent]
})
export class PersonListModule {

}
