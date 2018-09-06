import { Component, OnInit } from '@angular/core';
import {PersonViewModel} from './person.view.model';
import {PersonListInteractor} from '../../business/person-list/personlist.interactor';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css'],
  providers:[PersonListInteractor]
})
export class PersonListComponent implements OnInit {
  persons: PersonViewModel[] = [];
  constructor(private interactor: PersonListInteractor) { }

  ngOnInit() {
  }

  onBtnClicked(){
    this.interactor.getPersons()
      .subscribe(value => this.persons = value);
  }
}
