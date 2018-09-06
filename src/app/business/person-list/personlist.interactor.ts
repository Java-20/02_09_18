import {Observable} from 'rxjs';
import {PersonViewModel} from '../../presentation/person-list/person.view.model';
import {PersonsBusinessModel} from './persons.business.model';
import {PersonListRepository} from '../../data/person-list/personlist.repository';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {forEach} from '@angular/router/src/utils/collection';


@Injectable()
export class PersonListInteractor {
  persons: PersonsBusinessModel[] = [];
  constructor(private repository: PersonListRepository){}

  getPersons():Observable<PersonViewModel[]>{
    return this.repository.getPersons()
      .pipe(map(value => {
        this.persons = value;
        let arr: PersonViewModel[] = [];
        value.forEach(v => {
          arr.push(new PersonViewModel(v.name));
        });
        return arr;
      }));
  }
}
