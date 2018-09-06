import {Observable} from 'rxjs';
import {PersonDtoModel} from '../dto/person.dto.model';

export class StoreProvider {
  getPersons(): Observable<PersonDtoModel>{
    return Observable.create(observer => {
      observer.next(new PersonDtoModel('Vasya',
      25,'vasya@mail.com',1));
      observer.next(new PersonDtoModel('Sofa',
        27,'sofa@mail.com',2));
      observer.next(new PersonDtoModel('Vova',
        32,'vova@mail.com',3));
      observer.next(new PersonDtoModel('Anna',
        18,'anna@mail.com',4));
      observer.next(new PersonDtoModel('Petya',
        21,'petya@mail.com',5));
      observer.next(new PersonDtoModel('Dima',
        23,'dima@mail.com',6));
      observer.complete();
    });
  }
}
