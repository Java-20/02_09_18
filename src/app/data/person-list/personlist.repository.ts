import {Observable} from 'rxjs';
import {PersonsBusinessModel} from '../../business/person-list/persons.business.model';

export class PersonListRepository {
  getPersons():Observable<PersonsBusinessModel[]>{
    return null;
  }
}
